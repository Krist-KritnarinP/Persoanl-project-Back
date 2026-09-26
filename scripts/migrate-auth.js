import 'dotenv/config';
import pg from 'pg';
import { readFile } from 'node:fs/promises';

const client = new pg.Client({ connectionString: process.env.DIRECT_URL || process.env.DATABASE_URL, connectionTimeoutMillis: 10000 });
try {
  await client.connect();
  await client.query(await readFile(new URL('./auth-migration.sql', import.meta.url), 'utf8'));
  console.log('Google sign-in and password-reset migration applied (additive; existing users and data preserved).');
} catch (error) {
  console.error('Auth migration failed:', error.code || error.name);
  process.exitCode = 1;
} finally {
  await client.end();
}
