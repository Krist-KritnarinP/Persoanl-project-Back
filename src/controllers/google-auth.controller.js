import { randomBytes } from 'node:crypto';
import bcrypt from 'bcrypt';
import createError from 'http-errors';
import { OAuth2Client } from 'google-auth-library';
import { prisma } from '../lib/prisma.js';
import { isTrustedOrigin, issueRefreshSession, setRefreshCookie } from '../security/refresh-session.js';
import { createToken } from '../utilities/jwt.js';
import { googleLoginSchema } from '../validations/schema.js';

const client = new OAuth2Client();
export async function resolveGoogleUser(payload, currentPassword, db = prisma) {
  const { sub, name } = payload;
  const email = payload.email.trim().toLowerCase();
  const linked = await db.user.findUnique({ where: { googleSub: sub } });
  if (linked) return linked;
  const existing = await db.user.findFirst({ where: { email: { equals: email, mode: 'insensitive' } } });
  if (existing) {
    if (existing.googleSub) throw createError(409, 'Google identity conflict');
    // Never silently merge a password account based only on a matching email.
    if (!currentPassword) throw createError(409, 'Confirm existing password', { code: 'GOOGLE_LINK_PASSWORD_REQUIRED' });
    if (!await bcrypt.compare(currentPassword, existing.password)) throw createError(401, 'Invalid credential');
    return db.$transaction(async tx => {
      await tx.$queryRaw`SELECT user_id FROM users WHERE user_id = ${existing.id} FOR UPDATE`;
      const current = await tx.user.findUnique({ where: { id: existing.id } });
      if (!current || current.tokenVersion !== existing.tokenVersion || (current.googleSub && current.googleSub !== sub)) throw createError(409, 'Account changed');
      const user = await tx.user.update({ where: { id: existing.id }, data: { googleSub: sub, tokenVersion: { increment: 1 } } });
      await tx.refreshSession.deleteMany({ where: { userId: user.id } });
      await tx.passwordResetToken.deleteMany({ where: { userId: user.id } });
      return user;
    });
  }
  const displayName = String(name || '').trim().replace(/\s+/g, ' ').slice(0, 50);
  const username = displayName.length >= 4 ? displayName : `Google ${sub.slice(-8)}`;
  const password = await bcrypt.hash(randomBytes(32).toString('base64url'), 12);
  try {
    return await db.user.create({ data: { email, username, password, googleSub: sub } });
  } catch (error) {
    if (error.code !== 'P2002') throw error;
    const raced = await db.user.findUnique({ where: { googleSub: sub } });
    if (raced) return raced;
    throw createError(409, 'Account already exists. Sign in again to link it.');
  }
}
export function createGoogleLogin({ db = prisma, verify = args => client.verifyIdToken(args), issueSession = issueRefreshSession } = {}) {
  return async (req, res, next) => {
    try {
      if (!isTrustedOrigin(req)) throw createError(403, 'Untrusted origin');
      const { credential, currentPassword } = googleLoginSchema.parse(req.body);
      if (!process.env.GOOGLE_CLIENT_ID) throw createError(503, 'Google sign-in is not configured');
      let ticket;
      try { ticket = await verify({ idToken: credential, audience: process.env.GOOGLE_CLIENT_ID }); }
      catch { throw createError(401, 'Invalid Google credential'); }
      const payload = ticket.getPayload();
      if (!payload?.sub || !payload.email || payload.email_verified !== true) throw createError(401, 'Invalid Google credential');
      if (!payload.email.toLowerCase().endsWith('@gmail.com') && !payload.hd) throw createError(403, 'Use Gmail or Google Workspace');
      const user = await resolveGoogleUser(payload, currentPassword, db);
      const session = await issueSession(user, db);
      setRefreshCookie(res, session.token, session.expiresAt);
      res.json({ message: 'Login successfully', token: await createToken(user), user: { id: user.id, username: user.username, email: user.email } });
    } catch (error) {
      if (error.code === 'GOOGLE_LINK_PASSWORD_REQUIRED') return res.status(409).json({ code: error.code, message: 'Confirm your existing password to link Google.' });
      next(error);
    }
  };
}
export const googleLogin = createGoogleLogin();
