import createError from 'http-errors';
import { prisma } from '../lib/prisma.js';
// All app instances coordinate through PostgreSQL, not per-process memory.
export async function reserveAiQuota(userId, db = prisma, now = new Date()) {
  const day = now.toISOString().slice(0, 10);
  const bucket = Math.floor(now.getTime() / 60000);
  const limits = [
    [`ai:user:${userId}:${day}`, Number(process.env.AI_USER_DAILY_LIMIT || 10)],
    [`ai:global:${day}`, Number(process.env.AI_GLOBAL_DAILY_LIMIT || 100)],
    [`ai:minute:${userId}:${bucket}`, 2],
  ];
  return db.$transaction(async tx => {
    await tx.$queryRaw`SELECT pg_advisory_xact_lock(914207)::text`;
    for (const [key, limit] of limits) {
      if (!Number.isInteger(limit) || limit < 1) throw createError(503, 'Invalid AI quota configuration');
      const usage = await tx.aiUsage.findUnique({ where: { key } });
      if ((usage?.count || 0) >= limit) throw createError(429, 'AI quota exceeded');
    }
    for (const [key] of limits) await tx.aiUsage.upsert({ where: { key }, create: { key, count: 1 }, update: { count: { increment: 1 } } });
    // Keep durable counters bounded; quota periods are much shorter than retention.
    await tx.aiUsage.deleteMany({ where: { updatedAt: { lt: new Date(now.getTime() - 3 * 86400000) } } });
  });
}
// Lock per account before checking and creating records to prevent concurrent bypass.
export async function withCreationLimit(userId, checkAndCreate) {
  return prisma.$transaction(async tx => {
    await tx.$queryRaw`SELECT pg_advisory_xact_lock(914208, ${Number(userId)}::integer)::text`;
    return checkAndCreate(tx);
  });
}
export function enforceLimit(count, max) {
  if (count >= max) throw createError(429, 'Resource limit reached');
}
