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
