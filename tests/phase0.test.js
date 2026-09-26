import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { generateWeather, configuredModels } from '../src/services/model-fallback.js';
import { rotateRefreshSession, requireRefreshOrigin } from '../src/security/refresh-session.js';
import { safeEvent } from '../src/ops/monitoring.js';
import { healthHandlers } from '../src/ops/health.js';
import { prisma } from '../src/lib/prisma.js';

const error = status => Object.assign(new Error('provider secret must not leak'), { status });
test('AI fallback uses only configured models and reserves quota for each attempt', async () => {
  assert.throws(() => configuredModels({}), { status: 503 });
  assert.deepEqual(configuredModels({ GEMINI_MODEL: 'pinned-primary', GEMINI_FALLBACK_MODEL: 'pinned-primary' }), ['pinned-primary']);
  const calls = []; let reservations = 0;
  const ai = { models: { generateContent: async ({ model }) => {
    assert.equal(++calls.length, reservations);
    calls[calls.length - 1] = model;
    if (model === 'primary') throw error(404);
    return { text: 'Forecast' };
  } } };
  const result = await generateWeather(ai, 'trip', { models: ['primary', 'fallback'], reserve: async () => { reservations++; } });
  assert.equal(result.model, 'fallback'); assert.deepEqual(calls, ['primary', 'fallback']);
});
test('quota, authentication and timeouts do not trigger additional AI charges', async () => {
  for (const status of [400,401,403,429,504]) {
    let calls = 0;
    await assert.rejects(generateWeather({ models: { generateContent: async () => { calls++; throw error(status); } } }, 'trip', {
      models: ['primary','fallback'], reserve: async () => {},
    }), { status });
    assert.equal(calls, 1);
  }
  let calls = 0;
  await assert.rejects(generateWeather({ models: { generateContent: async () => { calls++; throw error(503); } } }, 'trip', {
    models: ['primary','fallback'], reserve: async () => { if (calls) throw error(429); },
  }), { status: 429 });
  assert.equal(calls, 1);
});
function refreshDb() {
  const token = 'a'.repeat(96), tokenHash = createHash('sha256').update(token).digest('hex');
  const user = { id: 1, tokenVersion: 0 };
  const sessions = new Map([[tokenHash, { tokenHash, userId: 1, tokenVersion: 0, expiresAt: new Date(Date.now()+60000), usedAt: null }]]);
  const tx = {
    $queryRaw: async () => {}, user: { findUnique: async () => ({...user}), update: async () => { user.tokenVersion++; } },
    refreshSession: {
      findUnique: async ({where}) => sessions.get(where.tokenHash),
      update: async ({where,data}) => Object.assign(sessions.get(where.tokenHash),data),
      create: async ({data}) => sessions.set(data.tokenHash,data),
      deleteMany: async () => sessions.clear(),
    },
  };
  return { token, tokenHash, user, sessions, db: { $transaction: fn => fn(tx) } };
}
test('refresh rotates hashed token and replay revokes sessions', async () => {
  const f = refreshDb();
  const result = await rotateRefreshSession(f.token, f.db);
  assert.notEqual(result.token, f.token); assert.ok(f.sessions.get(f.tokenHash).usedAt);
  assert.equal([...f.sessions.values()].some(s => JSON.stringify(s).includes(result.token)), false);
  assert.equal(await rotateRefreshSession(f.token, f.db), null);
  assert.equal(f.user.tokenVersion, 1); assert.equal(f.sessions.size, 0);
});
test('expired and password-revoked refresh tokens are rejected; origin is mandatory', async () => {
  const f = refreshDb(); f.user.tokenVersion = 1;
  assert.equal(await rotateRefreshSession(f.token, f.db), null);
  f.user.tokenVersion = 0; f.sessions.get(f.tokenHash).expiresAt = new Date(0);
  assert.equal(await rotateRefreshSession(f.token, f.db), null);
  assert.equal(await rotateRefreshSession('malformed', f.db), null);
  requireRefreshOrigin({ headers: {} }, {}, e => assert.equal(e.status,403));
  requireRefreshOrigin({ headers: { origin: 'https://attacker.invalid' } }, {}, e => assert.equal(e.status,403));
});
test('monitoring allowlist excludes URLs, credentials, user data and exception messages', () => {
  const event = safeEvent({ tags: { status: 500, requestId: 'safe-id', email: 'private' }, request: { headers: { authorization: 'private' } }, exception: { values: [{ value: 'private' }] }, user: { email: 'private' }, breadcrumbs: [{message:'private'}] });
  assert.equal(JSON.stringify(event).includes('private'), false);
  assert.equal(event.tags.requestId, 'safe-id');
});
test('readiness fails closed with sanitized response; liveness does not need database', async () => {
  let checks = 0;
  const health = healthHandlers({ $queryRaw: async () => { checks++; throw new Error('password=private'); } });
  const response = () => ({ statusCode: 200, status(n) { this.statusCode=n; return this; }, json(v) { this.body=v; return this; } });
  let res = response(); health.live({},res); assert.equal(res.statusCode,200);
  res = response(); await health.ready({},res); assert.equal(res.statusCode,503); assert.deepEqual(res.body,{status:'unavailable'});
  await health.ready({},response()); assert.equal(checks,1);
});
test.after(async () => prisma.$disconnect());
