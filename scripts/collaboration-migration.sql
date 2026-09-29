BEGIN;
SELECT pg_advisory_xact_lock(914211);
CREATE TABLE "trip_collaborators" (
    "id" SERIAL NOT NULL,
    "trip_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "role" VARCHAR(16) NOT NULL,
    "status" VARCHAR(16) NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "trip_collaborators_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "trip_collaborators_role_check" CHECK ("role" IN ('viewer', 'editor')),
    CONSTRAINT "trip_collaborators_status_check" CHECK ("status" IN ('pending', 'accepted', 'declined'))
);
CREATE UNIQUE INDEX "trip_collaborators_trip_id_user_id_key" ON "trip_collaborators"("trip_id", "user_id");
CREATE INDEX "trip_collaborators_user_id_status_idx" ON "trip_collaborators"("user_id", "status");
ALTER TABLE "trip_collaborators" ADD CONSTRAINT "trip_collaborators_trip_id_fkey" FOREIGN KEY ("trip_id") REFERENCES "trips"("trip_id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "trip_collaborators" ADD CONSTRAINT "trip_collaborators_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "trip_collaborators" ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname='ailhoung_runtime') THEN
  GRANT SELECT, INSERT, UPDATE, DELETE ON "trip_collaborators" TO ailhoung_runtime;
  GRANT USAGE, SELECT ON SEQUENCE "trip_collaborators_id_seq" TO ailhoung_runtime;
  CREATE POLICY ailhoung_runtime_access ON "trip_collaborators" FOR ALL TO ailhoung_runtime USING (true) WITH CHECK (true);
END IF; END $$;
COMMIT;
