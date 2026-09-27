# Handover — ร่างครบในคลิกเดียว + แผน BYOK (2026-09-27)

- AiPlanner ใช้ generateCompletePlan loop ต่อช่วงอัตโนมัติจนจบ; UI สั้นลงเหลือประโยคเดียวพร้อม progress; ลองทำต่อมีเฉพาะเมื่อขัดข้อง
- API คืน retryAfterSeconds เฉพาะ minute quota; frontend รอแบบ abortable แล้ว retry ไม่เกิน 3 ครั้งติดกัน. Daily/provider quota ไม่ยิงซ้ำอัตโนมัติ
- ออกจากหน้าแล้ว abort งานรอ/request และไม่ส่งช่วงใหม่; ยังต้องเปิดหน้าไว้ ไม่มี worker/background job รอบนี้
- เก็บข้อจำกัด provider/ค่าใช้จ่าย key กลางไว้; ไม่เพิ่มเพดานวัน ไม่อ้างว่า AI ใช้ได้ไม่จำกัดจริง
- เอกสารแผน 1 user/own project key: docs/AI_BYOK_PLAN.md พร้อม secret storage, ownership, per-user quota, no silent shared fallback, worker phase; ยังไม่รับ/จัดเก็บ key ผู้ใช้จริง
- ทดสอบ unit orchestration สำเร็จ/รอ quota/daily quota/cancel และ browser desktop/mobile; build ผ่าน. ไม่เรียก AI จริงเพิ่ม ไม่แก้ schema/env/ข้อมูล demo
- ผลตรวจ: Front unit 9, API เดิม 28 + retry quota 1, browser 4 ผ่าน; lint 9 warnings เดิม ไม่มี error
- commit แยก Front/API ไม่ push/deploy

---
## บันทึกรอบก่อน

# Handover — ทริปยาว + token notice + ช่องข้อความ (2026-09-27)

- ตามผู้ใช้สั่ง: ยกเลิกเพดาน 7 วันต่อทริป; แบ่งร่างทีละ 7 วันและกดร่างต่อ พร้อมจำนวนวันที่เสร็จ/ทั้งหมด
- แจ้ง token ก่อนเริ่มและแสดง usage ที่มีข้อมูล; โควตาเดิมยังคงอยู่ ติดโควตาแล้วทำต่อได้จาก PLAN v2 เดิมข้ามวัน
- partial draft ยังแก้/confirm ไม่ได้; เมื่อครบจึงเปิดให้แก้และบันทึกเหมือนเดิม; merge ภายใต้ account lock
- parser planner ย้ายมาก่อน global JSON parser ตรวจ auth ก่อนรับ payload 10 MB; API อื่นไม่เปลี่ยน
- textarea ความต้องการเอา rounded ออก เพิ่ม padding/line height แก้ตัวอักษรถูกบัง
- API 28 unit ผ่าน; browser ทริป 9 วัน/resume/notice/textarea บน desktop/mobile; build ผ่าน. รอบนี้ไม่ได้เรียก Gemini จริงหรือแก้ DB demo
- คู่มือ/ข้อจำกัด: docs/AI_PLANNER.md; ไม่เพิ่ม dependency/schema/env; commit แยกสอง repo ไม่ push

---
## บันทึกรอบก่อน

# Handover — AI Trip Planner MVP (2026-09-27)

- ทำครบ flow ข้อความ + ปฏิทิน 1–7 วัน → Gemini draft → Zod validate → preview แก้/ลบกิจกรรม → ยืนยัน atomic save → เปิดหน้าทริปเดิม
- เข้าได้จากปุ่ม “สร้างทริปด้วย AI” ด้านบน Dashboard หรือ sidebar → `/trips/ai`; UI ใหม่ภาษาไทย
- ใช้ PLAN record เป็นร่างและ durable confirmation receipt; account lock + transaction กัน duplicate/partial saves; auth/owner/100-trip limit; weather history ไม่ปน PLAN
- ค่าใช้จ่ายประมาณการ THB รวมทั้งกลุ่ม ไม่ใช่ราคายืนยัน; AI ไม่เขียนพิกัด ใช้ geocode เดิมหลังบันทึก
- Gemini schema แบบเต็มเคยตอบ 400: แก้เป็น structural schema ฝั่ง provider และตรวจ bounds/วัน/เวลา/ราคา/unknown fields ด้วย Zod ฝั่ง server ตามเดิม
- ทดสอบเรียก Gemini จริงโจทย์ 1 วันผ่าน พร้อม cache/no-trip-before-confirm; ยังไม่รับรองคุณภาพสถานที่หรือราคาและทริปยาวทุกกรณี
- API unit 27 ผ่าน; Front unit 7 ผ่าน; browser desktop/mobile 2 ผ่าน; PostgreSQL ชั่วคราวผ่าน ownership/date/rollback/5 confirmations→1 trip/weather isolation; build/SEO ผ่าน; lint 9 warnings เดิม
- ไม่แก้ schema, dependencies, secrets หรือข้อมูล demo จริง ไม่ deploy/push รอบนี้; commit แยกสอง repo
- งานค้าง/คู่มือ/checklist: [docs/AI_PLANNER.md](docs/AI_PLANNER.md); ROADMAP อัปเดตแยก MVP จาก price references/confidence/translation/draft recovery ที่ยังไม่ทำ
- การแก้ preview หายเมื่อ refresh; AI draft cache 6 ชม. ไม่ใช่ retention cleanup; ใช้ quota ร่วมกับ weather

---
## บันทึกรอบก่อน

# Handover — รับช่วง refactor จาก agent เดิม (2026-09-27)

- รับช่วงงานค้างโดยเก็บทุกส่วนของ agent เดิมไว้ รวมบันทึก geocode priority
- จัดรูปแบบ source และแยกเฉพาะ presentation/helper ที่เหมือนกันจริง; คง route, UI, CSS, auth, เวลา, ธีม, map/AI logic เดิม
- เอกสารให้อีก agent: [docs/AGENT_HANDOFF.md](docs/AGENT_HANDOFF.md)
- คู่มือสำหรับผู้เริ่มต้น: [docs/CODE_GUIDE.md](docs/CODE_GUIDE.md)
- ผลตรวจ: Front unit 6+1, API unit 20+2, browser ทริป/share/map 4 กรณีผ่าน; build/SEO ผ่าน, lint 9 warnings เดิมไม่มี error
- Source ที่จัดรูปแบบอย่างเดียวผ่าน normalized AST comparison; ส่วนย้าย helper/components ตรวจตาม flow ที่เกี่ยวข้อง
- ไม่แก้ DB/schema/secrets/dependencies ไม่ push/deploy; ไม่ขยายงานตรวจซ้ำเกินความจำเป็นตามคำสั่งผู้ใช้
- รอบนี้ commit ใน repo นี้; ดู git log ล่าสุดเพื่ออ้างอิง revision

---
## บันทึกรอบก่อน

# Handover — อัปเดตเส้นทาง Login หลังเพิ่ม Landing (2026-09-26)

- Frontend มี Landing ที่ `/`; หน้า Google Login/Forgot Password เดิมเปิดที่ `/login`
- อัปเดต docs/AUTH_SETUP.md ให้ผู้ใช้เปิดถูกหน้า; FRONTEND_URL ยังเป็น origin http://localhost:5173 เหมือนเดิม ไม่เติม /login ใน env
- API logic, DB, dependencies และ secrets ไม่เปลี่ยนในรอบ Landing นี้; ไม่มี deploy/push
- Export PDF พักไว้ตามคำสั่งผู้ใช้ ไม่มี PDF implementation ใน API

---
## บันทึกรอบก่อน

# Handover — Phase 0 + Google/Forgot Password ใน API เดิม (2026-09-26)

ทำงานใน `PersonalProject_API` คู่กับ `PersonalProject_Front`; ไม่แก้ repo backup ไม่ deploy/push

- เพิ่ม refresh sessions, account export/delete, health/monitoring/env checks, AI fallback โดยคง compact weather prompt เดิม
- Google verify ID token ฝั่ง server; password-confirmed linking ป้องกันรวมบัญชีเดิมโดยไม่มีหลักฐาน
- Forgot/reset ผ่าน Nodemailer, hash token อายุ 30 นาที ใช้ครั้งเดียว; lock user และ tokenVersion กัน race/stale reset; reset ยกเลิก sessions เดิม
- ใช้ stable packages จาก npm latest: Nodemailer 10.0.10, google-auth-library 11.1.0, @sentry/node 11.0.0 พร้อม lockfile
- สำรอง public schema/data ไว้นอก Git และใช้ additive migrations กับ DB เดิมแล้ว; จำนวนแถวเดิมไม่เปลี่ยนและ runtime role อ่าน schema ใหม่ได้
- API unit 20 ผ่าน; integration security/Phase0/auth ผ่าน PostgreSQL 17 แยกพร้อม limited runtime role ไม่ใช้ข้อมูลจริงในการ smoke tests
- ยังไม่มี Google Client ID/SMTP ใน local env จึงต้องตั้งค่าก่อน login Google/รับเมลจริง; ปุ่ม frontend ยังแสดงได้เสมอ
- Checklist ผู้ใช้: [docs/AUTH_SETUP.md](docs/AUTH_SETUP.md)
- สถานะฐานข้อมูล, backup, ข้อจำกัด และ Phase 0 งานค้าง: [docs/PHASE0_OPERATIONS.md](docs/PHASE0_OPERATIONS.md)
- เริ่ม API: `npm run dev` ในโฟลเดอร์นี้ (8899); frontend แยก terminal ใน `PersonalProject_Front` (5173)
- ตรวจ readiness และ generated Prisma client กับฐานข้อมูลเดิมผ่าน แบบอ่านอย่างเดียว
- Git commit รอบนี้บันทึก source/tests/docs รวมกัน; secrets และ backup ไม่เข้า Git ไม่มี push

---
## บันทึกรอบก่อน (ประวัติ ไม่ใช่สถานะล่าสุด)

# Handover — กลับมาใช้ API เดิมก่อน setup deploy

- ใช้ `PersonalProject_API` คู่กับ `PersonalProject_Front` ตามคำขอผู้ใช้ให้ย้อนงาน setup deploy
- Application code คงที่ commit `b1785f5`; repo นี้ไม่ได้รับ Phase 0, Google Login หรือ Forgot Password ที่เพิ่มใน monorepo จึงไม่ต้อง reset source หรือ downgrade schema
- รัน `npm run dev` ภายในโฟลเดอร์นี้เพื่อเปิด API (พอร์ต 8899 ตาม config เดิม); frontend ต้องรัน `npm run dev` ใน `PersonalProject_Front` แยก terminal
- เก็บ `.env` และข้อมูลฐานข้อมูลเดิมไว้ ไม่คัดลอก secrets ไม่รัน migration ไม่ลบหรือย้อนข้อมูล
- Monorepo และ Phase 0 worktree เก็บสำรองที่ `/Users/kritnarinp/Desktop/Codecamp_23/_AI_LHOUNG_BACKUP_2026-09-26/` พร้อม Git history
- Checklist และคำสั่งเริ่มงานอยู่ใน `../START_HERE.md`; งาน deploy และ auth ใหม่พักไว้ก่อน
- ไม่ push รอบนี้ ไม่เปลี่ยนหรือลบบริการ GitHub/Render/Vercel ที่เคยตั้งไว้
- ตรวจ git status, scripts, original auth routes และ git diff --check; เปลี่ยนเฉพาะเอกสารจึงไม่ทดสอบ DB ซ้ำ
