BEGIN;
SELECT pg_advisory_xact_lock(914213);

CREATE TABLE IF NOT EXISTS "notifications" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER NOT NULL REFERENCES "users"("user_id") ON DELETE CASCADE,
  "actor_id" INTEGER REFERENCES "users"("user_id") ON DELETE SET NULL,
  "type" VARCHAR(40) NOT NULL,
  "entity_type" VARCHAR(40),
  "entity_id" VARCHAR(100),
  "payload" JSONB NOT NULL DEFAULT '{}'::jsonb,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "read_at" TIMESTAMP(3)
);
CREATE INDEX IF NOT EXISTS "notifications_user_unread_created_idx"
  ON "notifications" ("user_id", "created_at" DESC) WHERE "read_at" IS NULL;
CREATE INDEX IF NOT EXISTS "notifications_user_created_idx"
  ON "notifications" ("user_id", "created_at" DESC);

ALTER TABLE "notifications" ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname='ailhoung_runtime') THEN
  GRANT SELECT, INSERT, UPDATE, DELETE ON "notifications" TO ailhoung_runtime;
  GRANT USAGE, SELECT ON SEQUENCE "notifications_id_seq" TO ailhoung_runtime;
  DROP POLICY IF EXISTS ailhoung_runtime_access ON "notifications";
  CREATE POLICY ailhoung_runtime_access ON "notifications" FOR ALL TO ailhoung_runtime USING (true) WITH CHECK (true);
END IF; END $$;
COMMIT;
