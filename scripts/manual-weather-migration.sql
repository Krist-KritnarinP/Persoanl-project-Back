BEGIN;
SELECT pg_advisory_xact_lock(914211);
ALTER TABLE public.days ADD COLUMN IF NOT EXISTS manual_weather JSONB;
ALTER TABLE public.activities ADD COLUMN IF NOT EXISTS manual_weather JSONB;
COMMIT;
