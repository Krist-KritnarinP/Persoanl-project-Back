import { createHash, randomBytes } from 'node:crypto';
import createError from 'http-errors';
import { prisma } from '../lib/prisma.js';

const LIFETIME = 7 * 86400000;
const COOKIE = 'ailhoung_refresh';
const hash = token => createHash('sha256').update(token).digest('hex');
const cookieOptions = () => ({
  httpOnly: true, secure: process.env.NODE_ENV === 'production',
  sameSite: process.env.REFRESH_COOKIE_SAME_SITE || 'lax', path: '/api/auth',
});
export function setRefreshCookie(res, token, expiresAt) {
  res.cookie(COOKIE, token, { ...cookieOptions(), expires: expiresAt });
}
export function clearRefreshCookie(res) { res.clearCookie(COOKIE, cookieOptions()); }
export function readRefreshCookie(req) {
  const value = req.headers.cookie?.split(';').map(s => s.trim()).find(s => s.startsWith(`${COOKIE}=`))?.slice(COOKIE.length + 1);
  return /^[a-f0-9]{96}$/.test(value || '') ? value : null;
}
export function isTrustedOrigin(req) {
  return req.headers.origin === (process.env.FRONTEND_URL || 'http://localhost:5173');
}
export function requireRefreshOrigin(req, _res, next) {
  if (!isTrustedOrigin(req)) return next(createError(403, 'Untrusted origin'));
  next();
}
export async function issueRefreshSession(user, db = prisma, now = new Date()) {
  const token = randomBytes(48).toString('hex');
  const expiresAt = new Date(now.getTime() + LIFETIME);
  await db.$transaction(async tx => {
    await tx.$queryRaw`SELECT user_id FROM users WHERE user_id = ${user.id} FOR UPDATE`;
    const current = await tx.user.findUnique({ where: { id: user.id } });
    if (!current || current.tokenVersion !== user.tokenVersion) throw createError(401, 'Session changed');
    await tx.refreshSession.deleteMany({ where: { userId: user.id, OR: [{ expiresAt: { lte: now } }, { tokenVersion: { not: user.tokenVersion } }] } });
    const active = await tx.refreshSession.findMany({ where: { userId: user.id, usedAt: null }, orderBy: { expiresAt: 'desc' }, skip: 9, select: { tokenHash: true } });
    if (active.length) await tx.refreshSession.deleteMany({ where: { tokenHash: { in: active.map(s => s.tokenHash) } } });
    await tx.refreshSession.create({ data: { tokenHash: hash(token), userId: user.id, tokenVersion: user.tokenVersion, expiresAt } });
  });
  return { token, expiresAt };
}
export async function rotateRefreshSession(token, db = prisma, now = new Date()) {
  if (!/^[a-f0-9]{96}$/.test(token || '')) return null;
  const tokenHash = hash(token);
  return db.$transaction(async tx => {
    // Locate the account first, then serialize all rotations and revocations for it.
    const candidate = await tx.refreshSession.findUnique({ where: { tokenHash } });
    if (!candidate) return null;
    await tx.$queryRaw`SELECT user_id FROM users WHERE user_id = ${candidate.userId} FOR UPDATE`;
    const session = await tx.refreshSession.findUnique({ where: { tokenHash } });
    const user = await tx.user.findUnique({ where: { id: candidate.userId } });
    if (!session || !user || session.tokenVersion !== user.tokenVersion || session.expiresAt <= now) return null;
    if (session.usedAt) {
      // Reuse indicates a copied token. Commit revocation before returning 401.
      await tx.user.update({ where: { id: user.id }, data: { tokenVersion: { increment: 1 } } });
      await tx.refreshSession.deleteMany({ where: { userId: user.id } });
      return null;
    }
    const nextToken = randomBytes(48).toString('hex');
    await tx.refreshSession.update({ where: { tokenHash }, data: { usedAt: now } });
    await tx.refreshSession.create({ data: { tokenHash: hash(nextToken), userId: user.id, tokenVersion: user.tokenVersion, expiresAt: session.expiresAt } });
    return { token: nextToken, expiresAt: session.expiresAt, user };
  });
}
