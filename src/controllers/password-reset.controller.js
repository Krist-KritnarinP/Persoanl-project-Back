import { createHash, randomBytes } from "node:crypto";
import bcrypt from "bcrypt";
import createError from "http-errors";
import { prisma } from "../lib/prisma.js";
import { clearRefreshCookie } from "../security/refresh-session.js";
import {
  isPasswordResetMailConfigured,
  sendPasswordResetEmail,
} from "../services/password-reset-mailer.js";
import {
  forgotPasswordSchema,
  resetPasswordSchema,
} from "../validations/schema.js";

const hashToken = (token) => createHash("sha256").update(token).digest("hex");
const genericMessage =
  "If an account exists for that email, a reset link will be sent.";
export function createPasswordResetHandlers({
  db = prisma,
  sendMail = sendPasswordResetEmail,
  isConfigured = isPasswordResetMailConfigured,
  now = () => new Date(),
} = {}) {
  return {
    async forgotPassword(req, res, next) {
      try {
        const { email } = forgotPasswordSchema.parse(req.body);
        if (!isConfigured())
          throw createError(503, "Password reset email is not configured");
        const user = await db.user.findFirst({
          where: { email: { equals: email, mode: "insensitive" } },
        });
        if (user) {
          const rawToken = randomBytes(32).toString("base64url");
          const tokenHash = hashToken(rawToken);
          const created = await db.$transaction(async (tx) => {
            // Same lock order as refresh/reset: account first, token second.
            await tx.$queryRaw`SELECT user_id FROM users WHERE user_id = ${user.id} FOR UPDATE`;
            const current = await tx.user.findUnique({
              where: { id: user.id },
            });
            if (!current) return false;
            const instant = now();
            const recent = await tx.passwordResetToken.findFirst({
              where: {
                userId: user.id,
                createdAt: { gt: new Date(instant.getTime() - 60_000) },
              },
            });
            if (recent) return false;
            await tx.passwordResetToken.deleteMany({
              where: { userId: user.id },
            });
            await tx.passwordResetToken.create({
              data: {
                tokenHash,
                userId: user.id,
                tokenVersion: current.tokenVersion,
                expiresAt: new Date(instant.getTime() + 30 * 60_000),
              },
            });
            return true;
          });
          if (created) {
            const resetUrl = new URL(
              "/reset-password",
              process.env.FRONTEND_URL || "http://localhost:5173",
            );
            // Fragment never reaches HTTP access logs or Referer headers.
            resetUrl.hash = new URLSearchParams({ token: rawToken }).toString();
            try {
              await sendMail({ to: user.email, resetUrl: resetUrl.toString() });
            } catch {
              await db.passwordResetToken.deleteMany({ where: { tokenHash } });
              console.warn("Password reset email delivery failed");
            }
          }
        }
        res.status(202).json({ message: genericMessage });
      } catch (error) {
        next(error);
      }
    },
    async resetPassword(req, res, next) {
      try {
        const { token, password } = resetPasswordSchema.parse(req.body);
        const tokenHash = hashToken(token);
        const candidate = await db.passwordResetToken.findUnique({
          where: { tokenHash },
        });
        if (!candidate || candidate.usedAt || candidate.expiresAt <= now())
          throw createError(400, "Reset link is invalid or expired");
        const passwordHash = await bcrypt.hash(password, 12);
        const reset = await db.$transaction(async (tx) => {
          await tx.$queryRaw`SELECT user_id FROM users WHERE user_id = ${candidate.userId} FOR UPDATE`;
          const current = await tx.user.findUnique({
            where: { id: candidate.userId },
          });
          if (!current || current.tokenVersion !== candidate.tokenVersion)
            return false;
          const claimed = await tx.passwordResetToken.updateMany({
            where: { tokenHash, usedAt: null, expiresAt: { gt: now() } },
            data: { usedAt: now() },
          });
          if (claimed.count !== 1) return false;
          await tx.user.update({
            where: { id: candidate.userId },
            data: { password: passwordHash, tokenVersion: { increment: 1 } },
          });
          await tx.passwordResetToken.deleteMany({
            where: { userId: candidate.userId },
          });
          await tx.refreshSession.deleteMany({
            where: { userId: candidate.userId },
          });
          return true;
        });
        if (!reset) throw createError(400, "Reset link is invalid or expired");
        clearRefreshCookie(res);
        res.json({
          message: "Password reset successfully. Please sign in again.",
        });
      } catch (error) {
        next(error);
      }
    },
  };
}
export const { forgotPassword, resetPassword } = createPasswordResetHandlers();
