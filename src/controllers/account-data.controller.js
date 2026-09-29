import bcrypt from "bcrypt";
import createError from "http-errors";
import z from "zod";
import { prisma } from "../lib/prisma.js";
import { clearRefreshCookie } from "../security/refresh-session.js";
const credential = z
  .object({ currentPassword: z.string().min(1).max(256) })
  .strict();
async function confirm(req) {
  const { currentPassword } = credential.parse(req.body);
  if (!(await bcrypt.compare(currentPassword, req.user.password)))
    throw createError(400, "Invalid credential");
}
export async function exportAccount(req, res, next) {
  try {
    await confirm(req);
    // Explicit whitelist: never export hashes, share tokens, refresh sessions or internal prompts.
    const data = await prisma.user.findUnique({
      where: { id: req.user.id, tokenVersion: req.user.tokenVersion },
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true,
        updatedAt: true,
        trips: {
          select: {
            id: true,
            tripName: true,
            destination: true,
            startDate: true,
            endDate: true,
            tripDescription: true,
            members: {
              select: { id: true, name: true, active: true, version: true },
            },
            bills: {
              select: {
                id: true,
                title: true,
                date: true,
                currency: true,
                total: true,
                data: true,
                voided: true,
                version: true,
                createdAt: true,
              },
            },
            settlements: {
              select: {
                id: true,
                fromId: true,
                toId: true,
                amount: true,
                date: true,
                allocations: true,
                reversed: true,
                version: true,
                createdAt: true,
              },
            },
            days: {
              select: {
                id: true,
                dayCount: true,
                dayDate: true,
                description: true,
                activities: {
                  select: {
                    id: true,
                    activityType: true,
                    locationName: true,
                    activityDate: true,
                    activityTime: true,
                    price: true,
                    description: true,
                    status: true,
                    latitude: true,
                    longitude: true,
                  },
                },
              },
            },
          },
        },
        tripCollaborations: {
          select: {
            role: true,
            status: true,
            createdAt: true,
            trip: { select: { id: true, tripName: true } },
          },
        },
        aiMessages: {
          select: {
            id: true,
            tripId: true,
            kind: true,
            model: true,
            content: true,
            createdAt: true,
          },
        },
      },
    });
    if (!data) throw createError(404, "Account not found");
    res.set(
      "Content-Disposition",
      'attachment; filename="ailhoung-account.json"',
    );
    res.json({ formatVersion: 1, exportedAt: new Date().toISOString(), data });
  } catch (error) {
    next(error);
  }
}
export async function deleteAccount(req, res, next) {
  try {
    await confirm(req);
    const deleted = await prisma.$transaction(async (tx) => {
      // Match credential version to reject stale confirmation after password changes.
      const result = await tx.user.deleteMany({
        where: { id: req.user.id, tokenVersion: req.user.tokenVersion },
      });
      if (!result.count) throw createError(401, "Session expired");
      await tx.aiUsage.deleteMany({
        where: {
          OR: [
            { key: { startsWith: `ai:user:${req.user.id}:` } },
            { key: { startsWith: `ai:minute:${req.user.id}:` } },
          ],
        },
      });
      return result.count;
    });
    if (deleted) clearRefreshCookie(res);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
}
