BEGIN;
SELECT pg_advisory_xact_lock(914210);
-- CreateTable
CREATE TABLE "trip_members" (
    "id" UUID NOT NULL,
    "trip_id" INTEGER NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "version" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "trip_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "split_bills" (
    "id" UUID NOT NULL,
    "trip_id" INTEGER NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "date" VARCHAR(10) NOT NULL,
    "activity_id" INTEGER,
    "currency" VARCHAR(3) NOT NULL DEFAULT 'THB',
    "total" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    "voided" BOOLEAN NOT NULL DEFAULT false,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "split_bills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "split_settlements" (
    "id" UUID NOT NULL,
    "trip_id" INTEGER NOT NULL,
    "from_id" UUID NOT NULL,
    "to_id" UUID NOT NULL,
    "amount" INTEGER NOT NULL,
    "date" VARCHAR(10) NOT NULL,
    "allocations" JSONB NOT NULL,
    "reversed" BOOLEAN NOT NULL DEFAULT false,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "split_settlements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "billing_events" (
    "id" UUID NOT NULL,
    "trip_id" INTEGER NOT NULL,
    "actor_id" INTEGER NOT NULL,
    "request_id" UUID NOT NULL,
    "fingerprint" VARCHAR(64) NOT NULL,
    "action" VARCHAR(40) NOT NULL,
    "before" JSONB,
    "result" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "billing_events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "trip_members_trip_id_idx" ON "trip_members"("trip_id");

-- CreateIndex
CREATE INDEX "split_bills_trip_id_idx" ON "split_bills"("trip_id");

-- CreateIndex
CREATE INDEX "split_settlements_trip_id_idx" ON "split_settlements"("trip_id");

-- CreateIndex
CREATE UNIQUE INDEX "billing_events_trip_id_request_id_key" ON "billing_events"("trip_id", "request_id");

-- AddForeignKey
ALTER TABLE "trip_members" ADD CONSTRAINT "trip_members_trip_id_fkey" FOREIGN KEY ("trip_id") REFERENCES "trips"("trip_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "split_bills" ADD CONSTRAINT "split_bills_trip_id_fkey" FOREIGN KEY ("trip_id") REFERENCES "trips"("trip_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "split_settlements" ADD CONSTRAINT "split_settlements_trip_id_fkey" FOREIGN KEY ("trip_id") REFERENCES "trips"("trip_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "billing_events" ADD CONSTRAINT "billing_events_trip_id_fkey" FOREIGN KEY ("trip_id") REFERENCES "trips"("trip_id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "trip_members" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "split_bills" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "split_settlements" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "billing_events" ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname='ailhoung_runtime') THEN
GRANT SELECT, INSERT, UPDATE, DELETE ON "trip_members" TO ailhoung_runtime;
CREATE POLICY ailhoung_runtime_access ON "trip_members" FOR ALL TO ailhoung_runtime USING (true) WITH CHECK (true);
GRANT SELECT, INSERT, UPDATE, DELETE ON "split_bills" TO ailhoung_runtime;
CREATE POLICY ailhoung_runtime_access ON "split_bills" FOR ALL TO ailhoung_runtime USING (true) WITH CHECK (true);
GRANT SELECT, INSERT, UPDATE, DELETE ON "split_settlements" TO ailhoung_runtime;
CREATE POLICY ailhoung_runtime_access ON "split_settlements" FOR ALL TO ailhoung_runtime USING (true) WITH CHECK (true);
GRANT SELECT, INSERT, UPDATE, DELETE ON "billing_events" TO ailhoung_runtime;
CREATE POLICY ailhoung_runtime_access ON "billing_events" FOR ALL TO ailhoung_runtime USING (true) WITH CHECK (true);
END IF; END $$;
COMMIT;
