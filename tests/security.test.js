import test from 'node:test';
import { randomBytes } from 'node:crypto';
import assert from 'node:assert/strict';
import bcrypt from 'bcrypt';
import { prisma } from '../src/lib/prisma.js';
import { registerSchema, activityCreateSchema, activityUpdateSchema, tripCreateSchema, dayCreateSchema } from '../src/validations/schema.js';
import { createToken } from '../src/utilities/jwt.js';
import authCheck from '../src/middlewares/auth.middleware.js';
import { editMe, logout } from '../src/controllers/users.controller.js';
import errorHandler from '../src/middlewares/errorHandler.js';
import { reserveAiQuota } from '../src/security/quotas.js';
import { validateConfig } from '../src/security/config.js';
import { getTripByIdService, getSharedTripService } from '../src/services/trips.service.js';
import { updateActivityService } from '../src/services/activities.service.js';
import { predictTripWeather } from '../src/controllers/weather.controller.js';
// Unit tests use a disposable signing key and mocked database methods.
process.env.JWT_SECRET = randomBytes(48).toString("hex");
const response = () => ({ statusCode: 200, status(n) { this.statusCode = n; return this; }, json(v) { this.body = v; return this; }, sendStatus(n) { this.statusCode = n; } });
const user = { id: 41, email: 'test@example.invalid', username: 'Test', tokenVersion: 0, password: await bcrypt.hash('existing password', 4) };

test('reject weak passwords, oversized UTF-8 and malformed activity/date inputs', () => {
  assert.equal(registerSchema.safeParse({ username: 'Test', email: user.email, password: '1234' }).success, false);
  assert.equal(registerSchema.safeParse({ username: 'Test', email: user.email, password: 'ก'.repeat(25) }).success, false);
  assert.equal(activityCreateSchema.safeParse({ dayId: 1, locationName: 'Place', latitude: 91 }).success, false);
  assert.equal(activityCreateSchema.safeParse({ dayId: 1, locationName: 'Place', price: -1 }).success, false);
  assert.equal(activityUpdateSchema.safeParse({ dayId: 9 }).success, false);
  assert.equal(dayCreateSchema.safeParse({ dayDate: '2026-02-30' }).success, false);
  assert.equal(tripCreateSchema.safeParse({ tripName: 'Trip', startDate: '2026-10-02', endDate: '2026-10-01' }).success, false);
  assert.equal(activityCreateSchema.safeParse({ dayId: 1, locationName: 'Place', activityTime: '1970-01-01T12:30:00Z', latitude: null, longitude: '' }).success, true);
});
test('password change requires existing password and invalidates previously issued JWT', async () => {
  const originalFind = prisma.user.findUnique, originalUpdate = prisma.user.updateMany;
  let current = { ...user }, writes = 0;
  prisma.user.findUnique = async () => current;
  prisma.user.updateMany = async ({ where, data }) => {
    assert.equal(where.tokenVersion, current.tokenVersion);
    current = { ...current, password: data.password, tokenVersion: current.tokenVersion + 1 };
    writes++; return { count: 1 };
  };
  try {
    const token = await createToken(current);
    let error;
    await editMe({ user: current, body: { password: 'a new secure password' } }, response(), e => { error = e; });
    assert.equal(error.status, 400); assert.equal(writes, 0);
    const res = response();
    await editMe({ user: current, body: { currentPassword: 'existing password', password: 'a new secure password' } }, res, e => { throw e; });
    assert.equal(res.body.reauthenticate, true);
    await authCheck({ headers: { authorization: `Bearer ${token}` } }, response(), e => { error = e; });
    assert.equal(error.status, 401);
    const newToken = await createToken(current);
    let accepted = false;
    await authCheck({ headers: { authorization: `Bearer ${newToken}` } }, response(), e => { assert.equal(e, undefined); accepted = true; });
    assert.equal(accepted, true);
    await logout({ user: current }, response(), e => { throw e; });
    await authCheck({ headers: { authorization: `Bearer ${newToken}` } }, response(), e => { error = e; });
    assert.equal(error.status, 401);
  } finally { prisma.user.findUnique = originalFind; prisma.user.updateMany = originalUpdate; }
});
test('internal errors never return query or secret details', () => {
  const res = response(); errorHandler(new Error('SECRET SQL password=hidden'), { method: 'POST' }, res, () => {});
  assert.equal(res.statusCode, 500); assert.equal(res.body.message.includes('SECRET'), false); assert.ok(res.body.requestId);
});
test('AI quota rejects before incrementing any counters and uses transaction lock', async () => {
  let locked = false, writes = 0;
  const tx = { $queryRaw: async () => { locked = true; }, aiUsage: { findUnique: async () => { assert.ok(locked); return { count: 100000 }; }, upsert: async () => { writes++; } } };
  await assert.rejects(reserveAiQuota(user.id, { $transaction: fn => fn(tx) }), { status: 429 });
  assert.equal(writes, 0);
});
test('ownership filters reject other user before reading or modifying records', async () => {
  const tripFind = prisma.trip.findFirst, activityFind = prisma.activity.findFirst;
  prisma.trip.findFirst = async ({ where }) => { assert.equal(where.userId, 41); return null; };
  prisma.activity.findFirst = async ({ where }) => { assert.equal(where.day.trip.userId, 41); return null; };
  try {
    assert.equal(await getTripByIdService(9, 41), null);
    assert.equal(await updateActivityService(99, 41, { locationName: 'Changed' }), null);
    const originalKey = process.env.GEMINI_API_KEY; process.env.GEMINI_API_KEY = 'test-not-a-real-key';
    try {
      let error;
      await predictTripWeather({ user, body: { tripId: 9 } }, response(), e => { error = e; });
      assert.equal(error.status, 404); // No network or quota call was needed.
    } finally { if (originalKey === undefined) delete process.env.GEMINI_API_KEY; else process.env.GEMINI_API_KEY = originalKey; }
  } finally { prisma.trip.findFirst = tripFind; prisma.activity.findFirst = activityFind; }
});
test('public share explicitly excludes password and email', async () => {
  const original = prisma.trip.findUnique;
  prisma.trip.findUnique = async ({ select }) => {
    assert.deepEqual(select.user, { select: { username: true } });
    assert.equal(select.userId, undefined); assert.equal(select.shareToken, undefined);
    return null;
  };
  try { assert.equal(await getSharedTripService('test-token'), null); } finally { prisma.trip.findUnique = original; }
});
test('production refuses weak secret and HTTP frontend', () => {
  assert.throws(() => validateConfig({ NODE_ENV: 'production', DATABASE_URL: 'test', JWT_SECRET: 'short', FRONTEND_URL: 'https://example.com' }));
  assert.throws(() => validateConfig({ NODE_ENV: 'production', DATABASE_URL: 'test', JWT_SECRET: 'x'.repeat(64), FRONTEND_URL: 'http://example.com' }));
});
test.after(async () => { await prisma.$disconnect(); });
