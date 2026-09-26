# Phase 0 — local implementation and remaining operations

อัปเดต 2026-09-26: โค้ดทำในสอง original repos; ยังพัก deploy และไม่ push

## Implemented
- Access JWT 15 นาที; refresh cookie HttpOnly อายุสูงสุด 7 วัน, hashed storage, rotation/replay detection, Origin check, session revocation
- Frontend refresh single-flight/Web Locks; logout/password change/reset เพิกถอน sessions
- Export own data / delete account with password confirmation ผ่านหน้า profile
- AI cache fingerprint 6 ชั่วโมงและ durable per-user/global quota เดิม; เพิ่ม explicit model/fallback เฉพาะ 404/503, คิด quota ทุก attempt และ kill switch `AI_ENABLED=false`
- `/health/live` และ `/health/ready`; readiness timeout, graceful shutdown, optional Sentry allowlist ไม่ส่ง request body/token/PII
- Validate production env; setup runtime-role script รองรับตารางใหม่
- CI checks แยกแต่ละ repo: unit/build/browser และ API Prisma/PostgreSQL integration; ไม่มี workflow deploy ใหม่
- Google/Forgot Password ดู [AUTH_SETUP.md](AUTH_SETUP.md)

## Database change actually applied
- สำรอง **public schema + data** เป็น PostgreSQL custom archive ในเครื่อง ก่อน migration:
  `/Users/kritnarinp/Desktop/Codecamp_23/_AI_LHOUNG_BACKUP_2026-09-26/database-before-local-phase0/public-before-phase0.dump`
- ไฟล์ mode 600 ในโฟลเดอร์ private, อย่าเผยแพร่; ตรวจ archive catalog แล้ว แต่ยังไม่ได้ restore backup ของข้อมูลจริง
- ใช้ owner DIRECT_URL รัน additive `phase0-migration.sql` และ `auth-migration.sql`: refresh_sessions, users.google_sub, password_reset_tokens รวม token_version/index/RLS/grants
- ตรวจจำนวนแถว users/trips/days/activities/ai_messages ก่อน/หลัง: เท่าเดิม; ไม่แก้รหัสผ่านผู้ใช้หรือข้อมูล mockup
- API readiness และ generated Prisma client ทดสอบอ่าน DB เดิมผ่านหลัง migration
- DATABASE_URL เดิมอ่านตารางใหม่ได้ และ role ไม่มี superuser/bypassrls; JWT secret เดิมยาวอย่างน้อย 32 bytes จึงไม่หมุน secret ซ้ำในรอบนี้
- ไม่ใช้ prisma db push/reset กับฐานข้อมูลเดิม และไม่รัน smoke tests ที่สร้าง/ลบข้อมูลบน DB จริง
- Upgrade จาก schema เดิมและ idempotence ทดสอบผ่าน PostgreSQL 17 แยก พร้อม runtime role จำกัดสิทธิ์

## สำหรับฐานข้อมูลใหม่ในอนาคต
รันจาก `PersonalProject_API` หลังสำรองและตรวจว่า DIRECT_URL ชี้ฐานข้อมูลที่ตั้งใจ:
```sh
npm ci
npm run migrate:security
npm run migrate:phase0
npm run migrate:auth
npx prisma generate
```
`security:runtime-role` ใช้สร้าง role ใหม่เท่านั้น ถ้ามีแล้วให้ตรวจ grants ห้ามรันเพื่อหมุน role ที่ใช้อยู่โดยไม่วางแผน
`npm run maintenance:sessions` ล้าง refresh/reset tokens ที่หมดอายุ; ตั้ง schedule ก่อน production

## งานค้างก่อนเปิดให้ผู้ใช้จริง
- [ ] ตั้ง Google Client ID/SMTP และทดสอบ provider จริงตาม AUTH_SETUP
- [ ] เปิด automatic backups ตามบริการที่เลือก และทดสอบ restore จริงในฐานข้อมูลแยก (archive รอบนี้ครอบคลุม public schema ไม่ใช่ Supabase ทั้งโปรเจกต์)
- [ ] ตรวจ policies/grants ของทุก role และ credential rotation/runbook ก่อน production
- [ ] ตรวจ GEMINI_MODEL/GEMINI_FALLBACK_MODEL ที่บัญชีใช้ได้จริงและตั้ง budget alerts; รอบนี้ไม่ได้ยิง AI เสียโควต้า
- [ ] ตั้ง SENTRY_DSN, uptime monitoring และทดสอบ alert จริง
- [ ] Privacy/Terms, ผู้ให้บริการและอีเมลติดต่อข้อมูลส่วนบุคคล, retention, consent ตามข้อมูลจริง — ผู้ใช้ให้พักจนมีข้อมูล ห้ามอ้างว่า compliance เสร็จ
- [ ] แยก staging/production database และกำหนด domain/cookie/proxy จริงเมื่อเริ่ม deploy อีกครั้ง
- [ ] หากหลาย API instances ใช้ distributed rate-limit store; ตอนนี้ auth limiter เป็น in-memory ต่อ process
- [ ] วางแผนลด access token ใน localStorage (ยังได้รับผลจาก XSS แม้ refresh เป็น HttpOnly) และ audit dependencies/CSP ก่อน production

ดังนั้น Phase 0 ส่วนโค้ดพร้อมทดสอบ local แต่ยังไม่ถือว่า production readiness ครบ

## Validation
API: unit 20 passed; security/phase0/auth integration ผ่าน PostgreSQL 17 แยก รวม concurrent reset, one-time use, revocation, Google linking, ownership และ CRUD
Frontend: unit 6 passed; build ผ่าน; lint ไม่มี error มี 8 warnings เดิม; Playwright desktop/mobile 4 passed และตรวจภาพหน้า Login
Google verifier และ SMTP จำลองใน tests; ไม่ใช่หลักฐานว่า provider จริงตั้งค่าพร้อมแล้ว
