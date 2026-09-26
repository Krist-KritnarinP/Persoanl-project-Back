# Handover — กลับมาใช้ API เดิมก่อน setup deploy

- ใช้ `PersonalProject_API` คู่กับ `PersonalProject_Front` ตามคำขอผู้ใช้ให้ย้อนงาน setup deploy
- Application code คงที่ commit `b1785f5`; repo นี้ไม่ได้รับ Phase 0, Google Login หรือ Forgot Password ที่เพิ่มใน monorepo จึงไม่ต้อง reset source หรือ downgrade schema
- รัน `npm run dev` ภายในโฟลเดอร์นี้เพื่อเปิด API (พอร์ต 8899 ตาม config เดิม); frontend ต้องรัน `npm run dev` ใน `PersonalProject_Front` แยก terminal
- เก็บ `.env` และข้อมูลฐานข้อมูลเดิมไว้ ไม่คัดลอก secrets ไม่รัน migration ไม่ลบหรือย้อนข้อมูล
- Monorepo และ Phase 0 worktree เก็บสำรองที่ `/Users/kritnarinp/Desktop/Codecamp_23/_AI_LHOUNG_BACKUP_2026-09-26/` พร้อม Git history
- Checklist และคำสั่งเริ่มงานอยู่ใน `../START_HERE.md`; งาน deploy และ auth ใหม่พักไว้ก่อน
- ไม่ push รอบนี้ ไม่เปลี่ยนหรือลบบริการ GitHub/Render/Vercel ที่เคยตั้งไว้
- ตรวจ git status, scripts, original auth routes และ git diff --check; เปลี่ยนเฉพาะเอกสารจึงไม่ทดสอบ DB ซ้ำ
