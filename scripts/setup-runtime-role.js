// Run with the owner DIRECT_URL. Creates a dedicated backend role, not a browser role.
import 'dotenv/config';
import pg from 'pg';
import { randomBytes } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
const admin = new pg.Client({ connectionString: process.env.DIRECT_URL || process.env.DATABASE_URL, connectionTimeoutMillis: 10000 });
const role = 'ailhoung_runtime';
let runtime;
try {
  await admin.connect();
  const exists = await admin.query('SELECT 1 FROM pg_roles WHERE rolname=$1', [role]);
  if (exists.rowCount) throw new Error('ROLE_ALREADY_EXISTS');
  const password = randomBytes(32).toString('hex');
  await admin.query('BEGIN');
  await admin.query(`CREATE ROLE ${role} LOGIN PASSWORD '${password}' NOSUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT NOBYPASSRLS`);
  await admin.query(`GRANT USAGE ON SCHEMA public TO ${role}`);
  for (const table of ['users', 'trips', 'days', 'activities', 'ai_messages', 'ai_usage', 'refresh_sessions', 'password_reset_tokens']) {
    await admin.query(`GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.${table} TO ${role}`);
    // Trusted backend role; per-user isolation remains in the API's ownership checks.
    // This does not grant anon/authenticated Supabase API roles any access.
    await admin.query(`CREATE POLICY ailhoung_runtime_access ON public.${table} FOR ALL TO ${role} USING (true) WITH CHECK (true)`);
  }
  for (const [table, column] of [['users','user_id'],['trips','trip_id'],['days','day_id'],['activities','activity_id'],['ai_messages','message_id']]) {
    const result = await admin.query('SELECT pg_get_serial_sequence($1,$2) AS seq', [`public.${table}`, column]);
    const seq = result.rows[0].seq;
    if (seq && /^[a-zA-Z0-9_.]+$/.test(seq)) await admin.query(`GRANT USAGE, SELECT ON SEQUENCE ${seq} TO ${role}`);
  }
  const privileges = await admin.query("SELECT has_schema_privilege($1, 'public', 'CREATE') AS ddl", [role]);
  if (privileges.rows[0].ddl) throw new Error('PUBLIC_SCHEMA_ALLOWS_CREATE');
  await admin.query('COMMIT');
  const url = new URL(process.env.DATABASE_URL);
  const originalUser = decodeURIComponent(url.username);
  const suffix = originalUser.includes('.') ? originalUser.slice(originalUser.indexOf('.')) : '';
  url.username = role + suffix; url.password = password;
  runtime = new pg.Client({ connectionString: url.toString(), connectionTimeoutMillis: 10000 });
  await runtime.connect();
  await runtime.query('SELECT token_version FROM users LIMIT 0');
  await runtime.query('SELECT key FROM ai_usage LIMIT 0');
  let env = await readFile('.env', 'utf8');
  env = env.replace(/^DATABASE_URL\s*=.*$/m, `DATABASE_URL="${url}"`);
  const secretLine = `JWT_SECRET="${randomBytes(48).toString('hex')}"`;
  env = /^JWT_SECRET\s*=/m.test(env) ? env.replace(/^JWT_SECRET\s*=.*$/m, secretLine) : `${env}\n${secretLine}\n`;
  await writeFile('.env', env, { mode: 0o600 });
  console.log('Runtime role verified; local DATABASE_URL and JWT secret updated. Existing sessions must sign in again.');
} catch (error) {
  await admin.query('ROLLBACK').catch(() => {});
  console.error('Runtime setup failed:', error.code || (['ROLE_ALREADY_EXISTS','PUBLIC_SCHEMA_ALLOWS_CREATE'].includes(error.message) ? error.message : error.name));
  process.exitCode = 1;
} finally { await runtime?.end(); await admin.end(); }
