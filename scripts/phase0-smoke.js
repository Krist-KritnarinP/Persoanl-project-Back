import 'dotenv/config';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import app from '../src/app.js';
import { prisma } from '../src/lib/prisma.js';
const created = [];
const server = app.listen(0, '127.0.0.1');
await new Promise(resolve => server.once('listening',resolve));
const base = `http://127.0.0.1:${server.address().port}`;
const origin = process.env.FRONTEND_URL || 'http://localhost:5173';
async function request(path, { method = 'GET', body, token, cookie, source = origin } = {}) {
  const res = await fetch(base + path, { method, headers: {
    'Content-Type':'application/json', ...(source ? { Origin:source } : {}),
    ...(token ? {Authorization:`Bearer ${token}`} : {}), ...(cookie ? {Cookie:cookie} : {}),
  }, ...(body ? {body:JSON.stringify(body)} : {}) });
  return { status: res.status, cookie: res.headers.get('set-cookie')?.split(';')[0], cookieHeader: res.headers.get('set-cookie'), data: res.status===204 ? null : await res.json() };
}
const password = 'Phase zero test password';
try {
  assert.equal((await request('/health/live')).status,200);
  assert.equal((await request('/health/ready')).status,200);
  const accounts=[];
  for(let i=0;i<2;i++) {
    const email=`phase0-${randomUUID()}@example.invalid`;
    const reg=await request('/api/auth/register',{method:'POST',body:{username:'PhaseZero',email,password}});
    assert.equal(reg.status,201);created.push(reg.data.user.id);
    const login=await request('/api/auth/login',{method:'POST',body:{email,password}});
    assert.equal(login.status,200);assert.ok(login.cookie);assert.match(login.cookieHeader,/HttpOnly/);assert.match(login.cookieHeader,/Path=\/api\/auth/);
    accounts.push({email,token:login.data.token,cookie:login.cookie,id:reg.data.user.id});
  }
  let [a,b]=accounts;
  const refresh = cookie => request('/api/auth/refresh',{method:'POST',body:{},cookie});
  assert.equal((await request('/api/auth/refresh',{method:'POST',cookie:a.cookie,source:''})).status,403);
  assert.equal((await request('/api/auth/refresh',{method:'POST',cookie:a.cookie,source:'https://attacker.invalid'})).status,403);
  let renewed=await refresh(a.cookie);assert.equal(renewed.status,200);assert.notEqual(renewed.cookie,a.cookie);
  assert.equal((await refresh(a.cookie)).status,401); // Replay revokes the whole account's sessions.
  assert.equal((await request('/api/users/me',{token:renewed.data.token})).status,401);
  assert.equal((await refresh(renewed.cookie)).status,401);
  const login=await request('/api/auth/login',{method:'POST',body:{email:a.email,password}});
  a={...a,token:login.data.token,cookie:login.cookie};
  const trip=await request('/api/trips',{method:'POST',token:a.token,body:{tripName:'Private export trip'}});
  assert.equal(trip.status,201);
  const share=await request(`/api/trips/${trip.data.data.id}/share`,{method:'POST',token:a.token,body:{}});
  assert.equal(share.status,200);
  const path='/api/users/me/export';
  assert.equal((await request(path,{method:'POST',token:a.token,body:{currentPassword:'wrong'}})).status,400);
  const exported=await request(path,{method:'POST',token:a.token,body:{currentPassword:password}});
  assert.equal(exported.status,200);assert.equal(exported.data.data.id,a.id);assert.equal(exported.data.data.trips.length,1);
  const serialized=JSON.stringify(exported.data);
  for(const field of ['password','tokenVersion','tokenHash','shareToken']) assert.equal(serialized.includes(`"${field}"`),false);
  const other=await request(path,{method:'POST',token:b.token,body:{currentPassword:password}});
  assert.equal(other.data.data.id,b.id);assert.equal(other.data.data.trips.length,0);
  assert.equal((await request('/api/users/me',{method:'DELETE',token:a.token,body:{currentPassword:'wrong'}})).status,400);
  assert.equal((await request('/api/users/me',{method:'DELETE',token:a.token,body:{currentPassword:password}})).status,204);
  assert.equal((await request('/api/users/me',{token:a.token})).status,401);
  assert.equal((await refresh(a.cookie)).status,401);
  assert.equal((await request(`/api/shared/${share.data.data.shareToken}`)).status,404);
  assert.equal(await prisma.trip.count({where:{userId:a.id}}),0);
  assert.equal(await prisma.refreshSession.count({where:{userId:a.id}}),0);
  assert.equal((await request('/api/users/me',{method:'PUT',token:b.token,body:{currentPassword:password,password:'Changed phase zero password'}})).status,200);
  assert.equal((await refresh(b.cookie)).status,401);
  const relogin=await request('/api/auth/login',{method:'POST',body:{email:b.email,password:'Changed phase zero password'}});
  assert.equal((await request('/api/users/logout',{method:'POST',token:relogin.data.token,body:{}})).status,204);
  assert.equal((await refresh(relogin.cookie)).status,401);
  console.log('PASS: readiness, cookie/origin protection, rotation/replay, own-data export, confirmed deletion/cascade, password/logout refresh revocation. No AI calls.');
} finally {
  if(created.length) await prisma.user.deleteMany({where:{id:{in:created}}});
  await new Promise(resolve=>server.close(resolve));
  await prisma.$disconnect();
}
