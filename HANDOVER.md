# สถานะล่าสุด — API / Social + Trip collaboration (2026-09-30)

## Friends, group chat, and timed location sharing

- เพิ่ม persisted notification feed สำหรับ friend requests และข้อความใหม่: GET list/unread count, mark read, mark conversation/all read; migrations: `npm run migrate:notifications`
- สร้าง event ใน transaction เดียวกับ friend request/message; CORS เพิ่ม PATCH; inbox มี privacy scoping ด้วย recipient user และ conversation membership
- Notification migration ยังไม่ได้ apply ใน database ที่กำหนดใน environment นี้ เนื่องจาก connection ชี้ออกนอกเครื่อง; ทดสอบ service logic/unit แล้ว ห้ามถือว่า local API เชื่อม DB local

- Added persistent in-app notifications for incoming friend requests and messages; migration: `npm run migrate:notifications` (must run after social migration per environment).

- เพิ่ม authenticated API สำหรับ friend requests, direct/group conversations, messages, group location requests และแชร์พิกัดตาม consent ได้ 5 นาทีถึง 24 ชั่วโมง
- ตำแหน่งเก็บล่าสุดจุดเดียวต่อคน/กลุ่ม; stop/expiry ลบ position, API ปฏิเสธ update หลัง expiry และ cleanup job ทำงานทุกนาที
- Migration `npm run migrate:social` เป็น additive; apply แล้วกับฐานข้อมูลที่ตั้งไว้ ตรวจแล้ว trips=5 และ conversations/messages/locations=0; ต้อง apply แยกทุก environment อื่นก่อน deploy
- Front เพิ่ม `/chat` กับ floating chat dock; ย้ายกล่องเชิญ collaborator ไปใต้แผนที่และย่อขนาด
- รายละเอียด contract, privacy/retention, rollout และข้อจำกัด polling: [docs/SOCIAL_CHAT_PLAN.md](docs/SOCIAL_CHAT_PLAN.md)
- API tests ผ่าน 40; Front build/lint/unit ผ่าน; browser suite ผ่าน 34/34 เมื่อใช้ 2 workers
- Migration apply กับ DB ที่ตั้งในเครื่องมือแล้ว; ยังไม่ได้ push/deploy โค้ดขึ้น remote

- เพิ่มการเชิญ/ตอบรับผู้ร่วมและการตรวจ owner/viewer/editor; itinerary, overview, weather ของผู้ใช้เอง และ ledger ใช้สิทธิ์สมาชิก; public share whitelist เดิม
- เพิ่ม `TripCollaborator`, migration `npm run migrate:collaboration` และ Prisma client ที่ generate แล้ว; apply migration สำเร็จกับฐานข้อมูลตาม `DIRECT_URL`/`DATABASE_URL` ที่ตั้งใน environment นี้แล้ว
- ตรวจแบบอ่านอย่างเดียวหลัง migration: ตาราง `trips` ยังมี 5 ทริป และ `trip_collaborators` มี 0 แถว; migration เพิ่มเฉพาะตารางสมาชิก ไม่ได้แก้หรือลบทริปเดิม
- ต้อง apply migration แยกใน environment อื่นก่อน deploy API เวอร์ชันนี้; ยังต้องทำ owner/viewer/editor และ privacy verification บน PostgreSQL ชั่วคราว
- แผน implementation/checklist: [docs/TRIP_COLLABORATION_PLAN.md](docs/TRIP_COLLABORATION_PLAN.md); การแจ้งคำเชิญทาง email ยังไม่ทำ ผู้รับเห็นคำเชิญหลัง sign in ที่ Dashboard
- Repo มีไฟล์ `docs/ADMIN.md` เป็น untracked ซึ่งคงไว้โดยไม่แก้หรือ stage
- ฟีเจอร์หารบิลชุดแรกยังอยู่ใน [docs/SPLIT_BILLS_PLAN.md](docs/SPLIT_BILLS_PLAN.md) และคู่มือ [docs/BILLING.md](docs/BILLING.md); Frontend checks ล่าสุดที่ผู้ใช้แจ้งผ่าน run 36524216696

---

# Handover — Trip billing shipped (2026-09-29)

- เพิ่ม owner-only THB billing: สมาชิก, รายการย่อย/หลายผู้จ่าย, หาร4แบบ, VAT/service/tip, server preview, คืนบางคน/บิล/บางส่วน, reversal และ audit/version/idempotency
- เงินหน่วยสตางค์ + allocation; บิลที่มี repayment ต้องย้อนก่อนแก้; แยกงบ Activity.price จาก confirmed bills และไม่รวมเงินคืนเป็นค่าเที่ยว
- เพิ่มตาราง4ชุดแบบ additive และ generate Prisma แล้วใน DB ปัจจุบัน; temporary smoke data ถูกลบทิ้ง ไม่มี seed บิลจริง
- TravelOverview และ account export รวมบิลของเจ้าของ; public share ไม่เปิดข้อมูลบิล
- ผลตรวจและ checklist environment: [docs/BILLING.md](docs/BILLING.md)
- API 35เดิม+5billing ผ่าน; DB smoke duplicate/concurrency/ownership/reversal ผ่าน; Front unit13/build/browser billing+sidebar ผ่าน
- Commit แยก API/Front ไม่ push; ระบบโอนเงินจริง/สลิป/หลายสกุล/AI/สิทธิ์ร่วมอยู่นอก scope

---

# Handover — แผนหารบิลทริป (2026-09-28)

- ผู้ใช้สั่งทำแผนรอ ยังไม่เริ่มฟีเจอร์ และไม่ใช้ AI
- แผนครอบคลุมสมาชิก/ผู้จ่ายหลายคน/หารเท่ากัน-กำหนดยอด-%-ส่วน/รายการย่อย/VAT รวมและบวกเพิ่ม/service charge/tips
- คืนบางคน บางบิล บางส่วนระหว่างทริปได้ มี allocation และประวัติ reversal ไม่ลบหนี้ของคนอื่น ไม่เพิ่มยอดเที่ยวจากเงินคืน
- แยกงบ Activity.price จากบิลยืนยัน ไม่ดึงงบเดิมมาสร้างหนี้หรือรวมยอดซ้ำ
- MVP เจ้าของจัดการ THB ก่อน; สิทธิ์ร่วม/หลายสกุล/โอนจริง/AI เป็นงานนอกขอบเขต
- รายละเอียดและ acceptance: [docs/SPLIT_BILLS_PLAN.md](docs/SPLIT_BILLS_PLAN.md) เป็นแผนที่ต้องอ่านก่อนเริ่มงาน
- รอบนี้ docs-only ไม่มีแก้โค้ด/schema/env/DB ไม่มี test runtime ที่ต้องรัน; commit แยกสอง repo ไม่ push

---

# Handover — Travel overview dashboard (2026-09-28)

- เพิ่มกล่องแผนที่ใต้ AI Trip Assistant เปิด /travel-overview: ปฏิทินช่วงทริป ตัวกรองวัน/สถานะ ค่าใช้จ่ายรายทริป/รวม และหมุดตามวันที่กิจกรรม
- สถานะตามแผน ไม่ใช่ check-in; ยอดรวม Activity.price เป็น THB อาจรวมประมาณการ ไม่ใช่ยอดชำระยืนยัน
- GET /api/trips/overview ใช้ auth + owner query + whitelist + pagination; ไม่มี geocode/AI เพิ่ม ไม่แก้ schema/env/ข้อมูลจริง
- รองรับ 4 ภาษาและมือถือ โหลดแผนที่แบบ lazy พร้อม loading/retry/empty
- Front unit 13, API unit 35, browser desktop/mobile 4 ผ่าน; build ผ่าน, lint 7 warnings เดิม ไม่มี error
- คู่มือไฟล์/พฤติกรรม/ข้อจำกัดพิกัด: [docs/TRAVEL_OVERVIEW.md](docs/TRAVEL_OVERVIEW.md)
- Commit แยก Front/API ไม่ push/deploy; ต้องรัน API เวอร์ชันใหม่เพื่อให้ endpoint overview ใช้งานได้

---

# Handover — Import weather supplied by user (2026-09-28)

- ตามคำสั่งผู้ใช้ เพิ่มข้อความ seasonal weather ครบ D1–D9 ลง Trip #2 เป็น AiMessage kind WEATHER, message id 8
- เก็บข้อความผู้ใช้ 2,635 characters โดยไม่แก้เนื้อหา; model=manual-user-import แยกจากคำตอบ Gemini และไม่ปลอม cache fingerprint
- อ่านกลับตรวจตรงกับต้นฉบับสำเร็จ; คง history เดิม ไม่เปลี่ยน itinerary/พิกัด ไม่เรียก AI และไม่ใช้ quota
- ดูผ่านหน้า Trip #2 > Weather history > รายการล่าสุด; reload แล้วเปิด modal อ่านได้
- ข้อความกล่าวถึงแหล่งอากาศตามต้นฉบับผู้ใช้ ไม่ได้ตรวจสอบแหล่งข้อมูลหรือความถูกต้องของรายงานรอบนี้
- Commit นี้บันทึก handover เท่านั้น ข้อมูล DB ไม่ได้อยู่ใน Git

---

# Handover — Short weather prompt (2026-09-28)

- ปรับตามรูปแบบผู้ใช้: Task / Constraints / Itinerary Data และ D<number> YYYY-MM-DD + เช้า/กลางวัน/เย็น บรรทัดละสั้น ๆ
- ตัด overview, advice, uncertainty รายวัน และ marker ที่ไม่จำเป็น; UI รองรับข้อความไม่มี marker อยู่แล้ว
- อนุญาตช่วงอุณหภูมิโดยประมาณตามฤดูกาลเมื่อมีพื้นฐานรองรับ; แสงเหนือเฉพาะช่วงเย็นในพื้นที่ที่เกี่ยวข้อง ไม่แต่งเปอร์เซ็นต์หรือยืนยันว่าจะเห็น
- คง 4 ภาษา, itinerary compact, quota/output budget เดิม; prompt เปลี่ยนทำให้ fingerprint cache เปลี่ยนอัตโนมัติ
- พิกัดใน DB ยังไม่ได้แก้; prompt ให้ระบุความไม่แน่นอนเมื่อพิกัดขัดกับชื่อสถานที่
- ตรวจ weather prompt tests ผ่าน; ไม่เรียก Gemini ไม่แก้ข้อมูล DB หรือ frontend รอบนี้

---

# Handover — Weather development logs (2026-09-28)

- Front dev Console แสดง [Weather → API] พร้อม tripId/language
- API terminal แสดง [Weather → AI] พร้อม prompt จริง จำนวน characters (ไม่ใช่ tokens) และ output budget ก่อนเรียก provider
- Cache hit แสดงว่าใช้ประวัติ ไม่มี AI request; ไม่ log key/header/credentials
- Backend เปิด log เมื่อ NODE_ENV=development หรือ npm run dev เท่านั้น และปิดเสมอเมื่อ NODE_ENV=production; prompt มีสถานที่/วันเดินทาง อย่าแชร์ log สาธารณะ
- ตรวจ syntax/diff; ไม่เรียก AI เพิ่ม ไม่เปลี่ยน logic request/cache; commit ทั้งสอง repo ไม่ push

---

# Handover — AI Weather รายช่วงเวลา + Modal (2026-09-28)

- เพิ่มแนวโน้มอากาศตามพื้นที่กิจกรรม เช้า/กลางวัน/เย็น พร้อมผลต่อแผนและการเตรียมตัว รองรับ 4 ภาษา
- กล่องขนาดคงที่ scroll ภายใน; เปิดคำตอบเต็ม/ประวัติเก่าใน Modal ที่รองรับมือถือและ Escape
- Prompt ใช้สถานที่ไม่ซ้ำและตารางย่อ; Front ส่ง tripId/language เท่านั้น API อ่านข้อมูลที่ตรวจเจ้าของแล้ว
- ระบุชัดว่า seasonal estimate ไม่ใช่พยากรณ์สด; cache v3, ป้องกัน input ใหญ่/คำตอบถูกตัด และเก็บ history เต็มแทนตัด 8k
- ตรวจ API 33, Front unit 11, browser weather 2 ผ่าน; build ผ่าน lint ไม่มี error (7 warnings อื่น)
- รายละเอียด ขีดจำกัด และสิ่งที่ยังไม่ได้ทดสอบ: [docs/WEATHER_AI.md](docs/WEATHER_AI.md)
- ไม่เรียก Gemini จริง ไม่แก้ schema/env/demo data; commit แยก Front/API ไม่ push/deploy

---

# Handover — ภาษา UI ทุกหน้าและภาษา AI (2026-09-28)

- แก้หน้า AI ให้รองรับ th/en/zh/ko ครบ พร้อม LanguageSwitcher; แก้จุดตกหล่น Dashboard/auth/profile/trip/map/share, tooltip, day labels และ validation
- Planner/weather รับ language allowlist/default th; cache แยกภาษา; แผนเดิม/ข้อมูลผู้ใช้ไม่ถูกแปลทับเมื่อสลับ UI
- เช็กทุกหน้าทั้ง desktop/mobile 4 ภาษาและข้อความไทยตกค้าง; browser รวม 18 cases ผ่านหลัง rerun timeout ด้วย 2 workers; Front unit 11, API รวม 31; build/SEO ผ่าน, lint warnings เดิม 9
- รายละเอียดและข้อจำกัด: [docs/I18N_AUDIT.md](docs/I18N_AUDIT.md)
- ไม่แก้ schema/dependency/env/ข้อมูล demo และไม่เรียก AI จริงเพิ่ม; commit แยก Front/API ไม่ push/deploy

---
## บันทึกรอบก่อน

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
