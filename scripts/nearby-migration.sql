BEGIN;
SELECT pg_advisory_xact_lock(914212);
ALTER TABLE public.days ADD COLUMN IF NOT EXISTS activity_order JSONB;
COMMIT;
