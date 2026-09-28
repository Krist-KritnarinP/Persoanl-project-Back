# อ่านโค้ด Backend เริ่มตรงไหน

รัน npm run dev ใน PersonalProject_API; frontend แยก repo ข้างกัน ไม่มี frontend server ใน repo นี้

## Request เดินทางอย่างไร
`server.js` ตรวจ config/เปิด server → `app.js` วาง CORS/limits/routes → route ตรวจ auth/input → controller รับ request/ส่ง response → service ตรวจ ownership และเรียก Prisma → errorHandler จัดรูปแบบ error

| โฟลเดอร์/ไฟล์ใน src | หน้าที่ |
|---|---|
| routes/auth.route.js | register/login/Google/refresh/forgot/reset |
| routes/trips.routes.js | /api/trips และ share/revoke ของเจ้าของ |
| routes/shared.route.js | /api/shared/:token อ่านอย่างเดียว ไม่ต้อง login |
| routes/days.routes.js | เพิ่ม/แก้/ลบวัน; mount ใต้ /api |
| routes/activities.route.js | เพิ่ม/แก้/ลบกิจกรรม |
| routes/users.route.js | บัญชี logout export/delete |
| routes/weather.route.js | ประวัติและเรียก AI อากาศ |
| controllers/ | HTTP status, request/response, ส่ง errors ต่อ; auth ใช้ transaction โดยตรงในบาง flow |
| services/trips.service.js | query ทริปพร้อม ownership และ public share whitelist |
| services/trip-summary.js | เติมวันเริ่ม/จบ fallback + totalDays จากลำดับวันเดิม; ไม่ query DB |
| services/days.service.js, activities.service.js | CRUD, ownership และ creation limit |
| security/ | quota/config/refresh rotation และการเพิกถอน session |
| middlewares/ | ตรวจ JWT, error response และ not found |
| validations/schema.js | Zod schemas/IDs/date/password/input limits |
| ops/ | health/readiness + sanitized monitoring |
| lib/prisma.js | จุดสร้าง Prisma client/connection pool |
| generated/prisma/ | code generator; ห้าม refactor ด้วยมือ |

## ข้อตกลงที่คงไว้
- ทุก mutation ยังตรวจ owner ตามเดิม; public share คืนเฉพาะ whitelist เดิม
- summarizeTrip ใช้ ?? ไม่ใช่ ||; วันที่ทริปมาก่อนวันที่วันแรก/สุดท้าย และไม่ sort ใหม่
- public share มี shape ต่างจาก owner response จึงไม่ใช้ helper รวมที่อาจเผยข้อมูลบัญชี
- JWT/refresh/reset lock order, tokenVersion, rate limits และ Origin checks ห้ามแก้เพื่อความสั้น
- AI prompt/model fallback/quota/cache เป็น logic ที่ผู้ใช้ปรับมาแล้ว; รอบนี้จัดรูปแบบเท่านั้น
- Route shared ต้องอยู่ก่อน middleware /api ที่ตรวจ auth; อย่าสลับ mount order

## ตรวจงานและฐานข้อมูล
npm test ใช้ unit/stubs; scripts/*-smoke.js เป็น integration ที่มีการสร้าง/ลบข้อมูลทดสอบ ต้องใช้ DB ชั่วคราวเท่านั้น
รอบ refactor ไม่แก้ schema/migration/.env/dependencies หรือข้อมูลจริง; ไม่ต้องรัน migration เพื่อรับโค้ดรอบนี้
อ่าน AUTH_SETUP.md สำหรับ Google/SMTP และ PHASE0_OPERATIONS.md สำหรับงานเปิดใช้งานจริงที่ยังค้าง
อ่าน [AGENT_HANDOFF.md](AGENT_HANDOFF.md) ก่อนทำ refactor ต่อ

## AI Trip Planner
ร่างแผนจากข้อความและปฏิทินที่ `/trips/ai`; ดู [AI_PLANNER.md](AI_PLANNER.md) สำหรับ flow, API, ข้อจำกัด และวิธีทดสอบ

## Travel overview
แดชบอร์ดแผนที่/ปฏิทิน/ค่าใช้จ่ายที่ `/travel-overview`; ดู [TRAVEL_OVERVIEW.md](TRAVEL_OVERVIEW.md) สำหรับ data flow และความหมายของสถานะ/ยอดเงิน

## Trip billing
`src/billing/` แยกสูตรเงิน/ledger/transaction service; route ใต้ owned trip ดู [BILLING.md](BILLING.md) ก่อนแก้สูตรหรือ migration
