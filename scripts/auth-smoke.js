import 'dotenv/config';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import bcrypt from 'bcrypt';
import { prisma } from '../src/lib/prisma.js';
import { createPasswordResetHandlers } from '../src/controllers/password-reset.controller.js';
import { createGoogleLogin } from '../src/controllers/google-auth.controller.js';
import { issueRefreshSession, rotateRefreshSession } from '../src/security/refresh-session.js';
import { createToken } from '../src/utilities/jwt.js';
import authCheck from '../src/middlewares/auth.middleware.js';
const target = new URL(process.env.DATABASE_URL);
if (!['localhost', '127.0.0.1'].includes(target.hostname) || !target.pathname.endsWith('_test')) throw Error('Auth smoke requires a disposable loopback database ending in _test');
const ids = [], mails = [];
const password = 'Original test password', newPassword = 'Changed test password';
const email = `auth-${randomUUID()}@gmail.com`;
const origin = process.env.FRONTEND_URL || 'http://localhost:5173';
const response = () => ({ statusCode: 200, cookie() {}, clearCookie() {}, status(code) { this.statusCode=code;return this; }, json(body) { this.body=body;return this; } });
async function call(handler, body) {
  const res=response(); await handler({body,headers:{origin}},res,error=>{res.statusCode=error.status||500;res.error=error}); return res;
}
try {
  const user=await prisma.user.create({data:{username:'AuthSmoke',email,password:await bcrypt.hash(password,4)}}); ids.push(user.id);
  const accessToken=await createToken(user), session=await issueRefreshSession(user);
  const handlers=createPasswordResetHandlers({isConfigured:()=>true,sendMail:async mail=>mails.push(mail)});
  const missing=await call(handlers.forgotPassword,{email:'nobody@example.invalid'});
  const requested=await Promise.all([call(handlers.forgotPassword,{email}),call(handlers.forgotPassword,{email})]);
  assert.deepEqual(requested[0].body,missing.body); assert.equal(mails.length,1);
  const token=new URLSearchParams(new URL(mails[0].resetUrl).hash.slice(1)).get('token');
  const stored=await prisma.passwordResetToken.findFirst({where:{userId:user.id}});
  assert.notEqual(stored.tokenHash,token);assert.equal(stored.tokenVersion,user.tokenVersion);
  const resets=await Promise.all([call(handlers.resetPassword,{token,password:newPassword}),call(handlers.resetPassword,{token,password:newPassword})]);
  assert.deepEqual(resets.map(r=>r.statusCode).sort(),[200,400]);
  assert.equal(await prisma.passwordResetToken.count({where:{userId:user.id}}),0);
  assert.equal(await prisma.refreshSession.count({where:{userId:user.id}}),0);
  assert.equal(await rotateRefreshSession(session.token),null);
  let rejected; await authCheck({headers:{authorization:`Bearer ${accessToken}`}},response(),error=>{rejected=error}); assert.equal(rejected.status,401);
  const changed=await prisma.user.findUnique({where:{id:user.id}});
  assert.equal(await bcrypt.compare(password,changed.password),false); assert.equal(await bcrypt.compare(newPassword,changed.password),true);
  process.env.GOOGLE_CLIENT_ID='test-client.apps.googleusercontent.com';
  const payload={sub:randomUUID(),email,email_verified:true,name:'Google smoke'};
  const google=createGoogleLogin({verify:async ({audience})=>{assert.equal(audience,process.env.GOOGLE_CLIENT_ID);return {getPayload:()=>payload}}});
  const body={credential:'x'.repeat(100)};
  assert.equal((await call(google,body)).body.code,'GOOGLE_LINK_PASSWORD_REQUIRED');
  assert.equal((await call(google,{...body,currentPassword:'wrong password'})).statusCode,401);
  const linked=await call(google,{...body,currentPassword:newPassword}); assert.equal(linked.statusCode,200);assert.equal(linked.body.user.id,user.id);
  assert.equal((await call(google,body)).body.user.id,user.id);
  payload.sub=randomUUID();payload.email=`new-${randomUUID()}@gmail.com`;
  const fresh=await call(google,body);assert.equal(fresh.statusCode,200);ids.push(fresh.body.user.id);
  assert.equal((await prisma.user.findUnique({where:{id:fresh.body.user.id}})).googleSub,payload.sub);
  assert.equal(fresh.body.user.password,undefined);
  console.log('PASS: real DB reset issuance/concurrency/single-use, token revocation, password-confirmed Google linking and new account. Mail and Google verification mocked; no provider calls.');
} finally {
  await prisma.user.deleteMany({where:{id:{in:ids}}});
  await prisma.$disconnect();
}
