import test from 'node:test';
import assert from 'node:assert/strict';
import bcrypt from 'bcrypt';
import { createHash } from 'node:crypto';
import { createPasswordResetHandlers } from '../src/controllers/password-reset.controller.js';
import { createGoogleLogin, resolveGoogleUser } from '../src/controllers/google-auth.controller.js';

process.env.FRONTEND_URL = 'http://localhost:5173';
process.env.GOOGLE_CLIENT_ID = 'test-client.apps.googleusercontent.com';
process.env.JWT_SECRET = 'test-only-not-a-real-signing-key';
const password = 'Original test password';
const passwordHash = await bcrypt.hash(password, 4);
const res = () => ({ statusCode: 200, cookie() {}, clearCookie() { this.cleared = true; }, status(code) { this.statusCode = code; return this; }, json(body) { this.body = body; return this; } });
async function invoke(handler, body, headers = {}) {
  const response = res();
  await handler({ body, headers }, response, error => { response.error = error; response.statusCode = error.status || 500; });
  return response;
}
function fixture() {
  const user = { id: 1, username: 'Tester', email: 'tester@gmail.com', password: passwordHash, tokenVersion: 0, googleSub: null };
  const tokens = new Map(); let revoked = 0;
  const db = {
    $queryRaw: async () => [],
    user: {
      findFirst: async ({ where }) => where.email.equals.toLowerCase() === user.email ? { ...user } : null,
      findUnique: async ({ where }) => where.id === user.id || (where.googleSub && where.googleSub === user.googleSub) ? { ...user } : null,
      update: async ({ data }) => { const version = user.tokenVersion; Object.assign(user, data); if (data.tokenVersion) user.tokenVersion = version + data.tokenVersion.increment; return { ...user }; },
      create: async ({ data }) => ({ ...data, id: 2, tokenVersion: 0 }),
    },
    passwordResetToken: {
      findFirst: async () => [...tokens.values()][0] || null,
      findUnique: async ({ where }) => tokens.get(where.tokenHash) || null,
      create: async ({ data }) => { tokens.set(data.tokenHash, { ...data, usedAt: null }); return data; },
      deleteMany: async () => { tokens.clear(); return { count: 1 }; },
      updateMany: async ({ where, data }) => {
        const token = tokens.get(where.tokenHash);
        if (!token || token.usedAt || token.expiresAt <= where.expiresAt.gt) return { count: 0 };
        Object.assign(token, data); return { count: 1 };
      },
    },
    refreshSession: { deleteMany: async () => { revoked++; } },
  };
  db.$transaction = fn => fn(db);
  return { db, user, tokens, revoked: () => revoked };
}
test('recovery gives identical responses, stores only hashes and throttles repeat mail', async () => {
  const f = fixture(), mails = [];
  const handlers = createPasswordResetHandlers({ db: f.db, isConfigured: () => true, sendMail: async mail => mails.push(mail) });
  const unknown = await invoke(handlers.forgotPassword, { email: 'missing@gmail.com' });
  const known = await invoke(handlers.forgotPassword, { email: 'tester@gmail.com' });
  assert.deepEqual(known.body, unknown.body); assert.equal(known.statusCode, 202);
  const url = new URL(mails[0].resetUrl), token = new URLSearchParams(url.hash.slice(1)).get('token');
  assert.equal(url.search, ''); assert.equal(token.length, 43);
  const hash = createHash('sha256').update(token).digest('hex');
  assert.ok(f.tokens.has(hash)); assert.equal(JSON.stringify([...f.tokens.values()]).includes(token), false);
  await invoke(handlers.forgotPassword, { email: 'tester@gmail.com' }); assert.equal(mails.length, 1);
  const reset = await invoke(handlers.resetPassword, { token, password: 'New secure test password' });
  assert.equal(reset.statusCode, 200); assert.equal(reset.cleared, true);
  assert.equal(await bcrypt.compare('New secure test password', f.user.password), true);
  assert.equal(f.user.tokenVersion, 1); assert.equal(f.revoked(), 1); assert.equal(f.tokens.size, 0);
  assert.equal((await invoke(handlers.resetPassword, { token, password })).statusCode, 400);
});
test('expired and password-version-revoked reset tokens cannot change credentials', async () => {
  for (const staleVersion of [false, true]) {
    const f = fixture(), token = 'a'.repeat(43), hash = createHash('sha256').update(token).digest('hex');
    f.tokens.set(hash, { tokenHash: hash, userId: 1, tokenVersion: staleVersion ? -1 : 0, usedAt: null, expiresAt: new Date(Date.now() + (staleVersion ? 60000 : -60000)) });
    const handler = createPasswordResetHandlers({ db: f.db }).resetPassword;
    assert.equal((await invoke(handler, { token, password })).statusCode, 400);
    assert.equal(f.user.password, passwordHash); assert.equal(f.revoked(), 0);
  }
});
test('SMTP failures remain generic and remove unusable reset tokens', async () => {
  const f = fixture();
  const handler = createPasswordResetHandlers({ db: f.db, isConfigured: () => true, sendMail: async () => { throw Error('private SMTP details'); } }).forgotPassword;
  const response = await invoke(handler, { email: 'tester@gmail.com' });
  assert.equal(response.statusCode, 202); assert.equal(f.tokens.size, 0);
  assert.equal(JSON.stringify(response.body).includes('SMTP'), false);
});
test('Google rejects untrusted origin, bad signature and non-authoritative/unverified email', async () => {
  const origin = { origin: process.env.FRONTEND_URL }, body = { credential: 'a'.repeat(100) };
  let calls = 0;
  const invalid = createGoogleLogin({ verify: async args => { calls++; assert.equal(args.audience, process.env.GOOGLE_CLIENT_ID); throw Error('bad signature'); } });
  assert.equal((await invoke(invalid, body, { origin: 'https://attacker.invalid' })).statusCode, 403); assert.equal(calls, 0);
  assert.equal((await invoke(invalid, body, origin)).statusCode, 401);
  for (const payload of [{ sub: '123', email: 'tester@gmail.com', email_verified: false }, { sub: '123', email: 'tester@example.com', email_verified: true }]) {
    const handler = createGoogleLogin({ verify: async () => ({ getPayload: () => payload }) });
    assert.ok([401, 403].includes((await invoke(handler, body, origin)).statusCode));
  }
});
test('Google account linking requires existing password and revokes previous sessions', async () => {
  const f = fixture(), payload = { sub: 'google-sub', email: 'tester@gmail.com', name: 'Tester' };
  await assert.rejects(resolveGoogleUser(payload, undefined, f.db), { code: 'GOOGLE_LINK_PASSWORD_REQUIRED' });
  assert.equal(f.user.googleSub, null);
  await assert.rejects(resolveGoogleUser(payload, 'wrong password', f.db), { status: 401 });
  const linked = await resolveGoogleUser(payload, password, f.db);
  assert.equal(linked.googleSub, payload.sub); assert.equal(f.revoked(), 1);
  const returning = await resolveGoogleUser({ ...payload, email: 'changed@gmail.com' }, undefined, f.db);
  assert.equal(returning.id, linked.id);
});
