import "dotenv/config";
import pg from "pg";
import { readFile } from "node:fs/promises";
const client = new pg.Client({ connectionString: process.env.DIRECT_URL || process.env.DATABASE_URL, connectionTimeoutMillis: 10000 });
try {
  await client.connect();
  const counts = async () => (await client.query("SELECT (SELECT count(*) FROM trips)::int AS trips, (SELECT count(*) FROM days)::int AS days, (SELECT count(*) FROM activities)::int AS activities")).rows[0];
  console.log("Before:", await counts());
  await client.query(await readFile(new URL("./manual-weather-migration.sql", import.meta.url), "utf8"));
  console.log("After:", await counts());
  console.log("Manual weather columns installed; existing records retained.");
} catch (error) {
  console.error("Manual weather migration failed:", error.code || error.name);
  process.exitCode = 1;
} finally { await client.end(); }
