import 'dotenv/config';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import app from '../src/app.js';
import { prisma } from '../src/lib/prisma.js';
const created = [];
const server = app.listen(0, '127.0.0.1');
await new Promise(resolve => server.once('listening', resolve));
const base = `http://127.0.0.1:${server.address().port}/api`;
async function request(path, method = 'GET', body, token) {
  const res = await fetch(base + path, { method, headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) }, ...(body ? { body: JSON.stringify(body) } : {}) });
  return { status: res.status, data: res.status === 204 ? null : await res.json() };
}
try {
  const password = 'Security smoke test password';
  const tokens = [];
  for (let i = 0; i < 2; i++) {
    const email = `smoke-${randomUUID()}@example.invalid`;
    const reg = await request('/auth/register', 'POST', { username: 'SmokeTest', email, password });
    assert.equal(reg.status, 201); created.push(reg.data.user.id);
    const login = await request('/auth/login', 'POST', { email, password });
    assert.equal(login.status, 200); tokens.push(login.data.token);
  }
  const [a,b] = tokens;
  let res = await request('/trips', 'POST', { tripName: 'Security test', destination: 'Bangkok', startDate: '2026-10-01', endDate: '2026-10-03' }, a);
  assert.equal(res.status, 201); const trip = res.data.data.id;
  assert.equal((await request(`/trips/${trip}`, 'GET', undefined, b)).status, 404);
  assert.equal((await request(`/trips/${trip}`, 'PUT', { tripName: 'Wrong owner' }, b)).status, 404);
  assert.equal((await request(`/trips/${trip}/share`, 'POST', {}, b)).status, 404);
  res = await request(`/trips/${trip}/days`, 'POST', { dayDate: '2026-10-01' }, a);
  assert.equal(res.status, 201); const day = res.data.data.id;
  assert.equal((await request(`/days/${day}`, 'DELETE', undefined, b)).status, 404);
  res = await request('/activities', 'POST', { dayId: day, locationName: 'Test place', activityType: 'ATTRACTION', activityTime: '1970-01-01T09:30:00Z', latitude: 13, longitude: 100 }, a);
  assert.equal(res.status, 201); const activity = res.data.data.id;
  assert.equal((await request(`/activities/${activity}`, 'PUT', { locationName: 'Wrong owner' }, b)).status, 404);
  assert.equal((await request(`/activities/${activity}`, 'PUT', { price: -1 }, a)).status, 400);
  assert.equal((await request('/weather/predict-weather', 'POST', { tripId: trip }, b)).status, 404);
  const share = await request(`/trips/${trip}/share`, 'POST', {}, a);
  assert.equal(share.status, 200);
  res = await request(`/shared/${share.data.data.shareToken}`);
  assert.equal(res.status, 200); assert.equal(res.data.data.userId, undefined); assert.equal(res.data.data.user, undefined);
  await request(`/trips/${trip}/share`, 'DELETE', undefined, a);
  assert.equal((await request(`/shared/${share.data.data.shareToken}`)).status, 404);
  assert.equal((await request('/users/me', 'PUT', { password: 'Changed secure password' }, a)).status, 400);
  assert.equal((await request('/users/me', 'PUT', { currentPassword: password, password: 'Changed secure password' }, a)).status, 200);
  assert.equal((await request('/users/me', 'GET', undefined, a)).status, 401);
  assert.equal((await request('/users/logout', 'POST', {}, b)).status, 204);
  assert.equal((await request('/users/me', 'GET', undefined, b)).status, 401);
  console.log('PASS: two-account isolation, CRUD, input validation, public share/revoke, password/session revocation. No AI provider calls.');
} finally {
  // Delete only records created by this invocation; cascading removes their test trips.
  if (created.length) await prisma.user.deleteMany({ where: { id: { in: created } } });
  await new Promise(resolve => server.close(resolve));
  await prisma.$disconnect();
}
