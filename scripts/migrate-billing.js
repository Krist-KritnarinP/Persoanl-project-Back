import "dotenv/config";
import pg from "pg";
import { readFile } from "node:fs/promises";
const client = new pg.Client({
  connectionString: process.env.DIRECT_URL || process.env.DATABASE_URL,
  connectionTimeoutMillis: 10000,
});
try {
  await client.connect();
  const exists = await client.query(
    "SELECT to_regclass('public.billing_events') AS table_name",
  );
  if (exists.rows[0].table_name)
    console.log("Billing tables already installed; no changes.");
  else {
    await client.query(
      await readFile(
        new URL("./billing-migration.sql", import.meta.url),
        "utf8",
      ),
    );
    console.log("Billing tables installed; existing trip data preserved.");
  }
} catch (error) {
  console.error("Billing migration failed:", error.code || error.name);
  process.exitCode = 1;
} finally {
  await client.end();
}
