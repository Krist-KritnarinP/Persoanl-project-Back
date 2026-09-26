BEGIN;
CREATE TABLE IF NOT EXISTS refresh_sessions (
  token_hash VARCHAR(64) PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  token_version INTEGER NOT NULL,
  expires_at TIMESTAMP(3) NOT NULL,
  used_at TIMESTAMP(3)
);
CREATE INDEX IF NOT EXISTS refresh_sessions_user_id_idx ON refresh_sessions(user_id);
CREATE INDEX IF NOT EXISTS refresh_sessions_expires_at_idx ON refresh_sessions(expires_at);
ALTER TABLE refresh_sessions ENABLE ROW LEVEL SECURITY;
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'ailhoung_runtime') THEN
    GRANT SELECT, INSERT, UPDATE, DELETE ON refresh_sessions TO ailhoung_runtime;
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='refresh_sessions' AND policyname='ailhoung_runtime_access') THEN
      CREATE POLICY ailhoung_runtime_access ON refresh_sessions FOR ALL TO ailhoung_runtime USING (true) WITH CHECK (true);
    END IF;
  END IF;
END $$;
COMMIT;
