BEGIN;
SELECT pg_advisory_xact_lock(914212);

CREATE TABLE "social_friendships" (
  "user_low" INTEGER NOT NULL REFERENCES "users"("user_id") ON DELETE CASCADE,
  "user_high" INTEGER NOT NULL REFERENCES "users"("user_id") ON DELETE CASCADE,
  "requested_by" INTEGER NOT NULL REFERENCES "users"("user_id") ON DELETE CASCADE,
  "status" VARCHAR(16) NOT NULL DEFAULT 'pending' CHECK ("status" IN ('pending','accepted')),
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ("user_low", "user_high"),
  CHECK ("user_low" < "user_high")
);
CREATE INDEX "social_friendships_requested_idx" ON "social_friendships" ("requested_by", "status");

CREATE TABLE "chat_conversations" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(100),
  "created_by" INTEGER REFERENCES "users"("user_id") ON DELETE SET NULL,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE "chat_members" (
  "conversation_id" INTEGER NOT NULL REFERENCES "chat_conversations"("id") ON DELETE CASCADE,
  "user_id" INTEGER NOT NULL REFERENCES "users"("user_id") ON DELETE CASCADE,
  "joined_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ("conversation_id", "user_id")
);
CREATE INDEX "chat_members_user_idx" ON "chat_members" ("user_id", "conversation_id");

CREATE TABLE "chat_messages" (
  "id" BIGSERIAL PRIMARY KEY,
  "conversation_id" INTEGER NOT NULL REFERENCES "chat_conversations"("id") ON DELETE CASCADE,
  "sender_id" INTEGER REFERENCES "users"("user_id") ON DELETE SET NULL,
  "kind" VARCHAR(24) NOT NULL DEFAULT 'text' CHECK ("kind" IN ('text','location_request')),
  "body" VARCHAR(2000) NOT NULL,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX "chat_messages_conversation_id_id_idx" ON "chat_messages" ("conversation_id", "id" DESC);

CREATE TABLE "location_shares" (
  "conversation_id" INTEGER NOT NULL,
  "user_id" INTEGER NOT NULL,
  "expires_at" TIMESTAMP(3) NOT NULL,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ("conversation_id", "user_id"),
  FOREIGN KEY ("conversation_id", "user_id") REFERENCES "chat_members"("conversation_id", "user_id") ON DELETE CASCADE
);
CREATE TABLE "live_locations" (
  "conversation_id" INTEGER NOT NULL,
  "user_id" INTEGER NOT NULL,
  "latitude" DOUBLE PRECISION NOT NULL CHECK ("latitude" BETWEEN -90 AND 90),
  "longitude" DOUBLE PRECISION NOT NULL CHECK ("longitude" BETWEEN -180 AND 180),
  "accuracy" DOUBLE PRECISION,
  "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ("conversation_id", "user_id"),
  FOREIGN KEY ("conversation_id", "user_id") REFERENCES "location_shares"("conversation_id", "user_id") ON DELETE CASCADE
);
ALTER TABLE "social_friendships" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "chat_conversations" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "chat_members" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "chat_messages" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "location_shares" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "live_locations" ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname='ailhoung_runtime') THEN
  GRANT SELECT, INSERT, UPDATE, DELETE ON "social_friendships", "chat_conversations", "chat_members", "chat_messages", "location_shares", "live_locations" TO ailhoung_runtime;
  GRANT USAGE, SELECT ON SEQUENCE "chat_conversations_id_seq", "chat_messages_id_seq" TO ailhoung_runtime;
  CREATE POLICY ailhoung_runtime_access ON "social_friendships" FOR ALL TO ailhoung_runtime USING (true) WITH CHECK (true);
  CREATE POLICY ailhoung_runtime_access ON "chat_conversations" FOR ALL TO ailhoung_runtime USING (true) WITH CHECK (true);
  CREATE POLICY ailhoung_runtime_access ON "chat_members" FOR ALL TO ailhoung_runtime USING (true) WITH CHECK (true);
  CREATE POLICY ailhoung_runtime_access ON "chat_messages" FOR ALL TO ailhoung_runtime USING (true) WITH CHECK (true);
  CREATE POLICY ailhoung_runtime_access ON "location_shares" FOR ALL TO ailhoung_runtime USING (true) WITH CHECK (true);
  CREATE POLICY ailhoung_runtime_access ON "live_locations" FOR ALL TO ailhoung_runtime USING (true) WITH CHECK (true);
END IF; END $$;
COMMIT;
