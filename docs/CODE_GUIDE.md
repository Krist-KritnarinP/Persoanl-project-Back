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
| routes/social.routes.js | เพื่อน กลุ่มแชท ข้อความ notification และแชร์พิกัดชั่วคราว; DELETE membership ใช้ออกจากแชทเฉพาะบัญชีตนเอง |
| routes/weather.route.js | ประวัติและเรียก AI อากาศ |
| controllers/ | HTTP status, request/response, ส่ง errors ต่อ; auth ใช้ transaction โดยตรงในบาง flow |
| services/trips.service.js | query ทริปพร้อม ownership และ public share whitelist |
| services/social.service.js | access-check, conversation, friend/message operations และ notification events |
| services/trip-summary.js | เติมวันเริ่ม/จบ fallback + totalDays จากลำดับวันเดิม; ไม่ query DB |
| services/days.service.js, activities.service.js | CRUD, ownership และ creation limit |
| security/ | quota/config/refresh rotation และการเพิกถอน session |
| middlewares/ | ตรวจ JWT, error response และ not found |
| validations/schema.js | Zod schemas/IDs/date/password/input limits |
| ops/ | health/readiness + sanitized monitoring |
| lib/prisma.js | จุดสร้าง Prisma client/connection pool |
| generated/prisma/ | code generator; ห้าม refactor ด้วยมือ |

## ข้อตกลงที่คงไว้
- การอ่านทริปตรวจ owner หรือ accepted collaborator; การแก้ไขตรวจ owner หรือ editor; ลบทริป/จัดการผู้ร่วม/จัดการ public share ยังเป็น owner-only
- อ่าน [TRIP_COLLABORATION_PLAN.md](TRIP_COLLABORATION_PLAN.md) ก่อนแก้สิทธิ์ร่วมทริปหรือ migration; public share ยังคง whitelist เดิม
- summarizeTrip ใช้ ?? ไม่ใช่ ||; วันที่ทริปมาก่อนวันที่วันแรก/สุดท้าย และไม่ sort ใหม่
- public share มี shape ต่างจาก owner response จึงไม่ใช้ helper รวมที่อาจเผยข้อมูลบัญชี
- JWT/refresh/reset lock order, tokenVersion, rate limits และ Origin checks ห้ามแก้เพื่อความสั้น
- AI prompt/model fallback/quota/cache เป็น logic ที่ผู้ใช้ปรับมาแล้ว; รอบนี้จัดรูปแบบเท่านั้น
- Route shared ต้องอยู่ก่อน middleware /api ที่ตรวจ auth; อย่าสลับ mount order
- Social API ใช้ PostgreSQL tables ผ่าน `src/services/social.service.js`; อ่าน [SOCIAL_CHAT_PLAN.md](SOCIAL_CHAT_PLAN.md) ก่อนแตะ schema, access checks หรือ retention ของพิกัด
- `/api/social/notifications` เป็น inbox ต่อผู้ใช้; friend/message writes สร้าง event transactionally; `scripts/notifications-migration.sql` เป็น additive migration แยกจาก social tables

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

## PostgreSQL notification parameters (2026-09-30)
`social.service.js` uses explicit `::text` casts for bound values passed into polymorphic `jsonb_build_object`. Without these, PostgreSQL can reject the notification INSERT with 42P18 and roll back the chat message. Unit stubs cannot detect SQL type inference. Run `CHECK_SOCIAL_SQL=1 node --test tests/social-notifications.test.js` for read-only EXPLAIN validation against the configured DB (requires social/notification schema). This plans the real production SQL without executing INSERT; it is not a full end-to-end send test.

## Manual weather (2026-10-01)

`validations/manual-weather.js` validates optional observation JSON. `services/manual-weather.js` maps explicit null to Prisma.DbNull; day/activity services preserve existing access checks. Public share explicitly selects manualWeather. Additive migration is `scripts/manual-weather-migration.sql`. See [weather behavior](WEATHER_AI.md).

## Nearby places / insertion (2026-10-01)

- `validations/nearby.js`: strict filter/place/insertion schemas. `controllers/nearby.controller.js`: HTTP wrappers; `services/nearby.service.js`: authenticated source access, same-trip editable target, quota and atomic insertion. `services/nearby-provider.js`: fixed external endpoints, numeric radius query, timeout, dedup/radius filtering; does not invent ratings.
- `POST /api/activities/:activityId/nearby` body `{radiusKm:1..5, category:"restaurant"|"attraction"|"park"|"hotel", limit:1..5, language:"th"|"en"|"zh"|"ko", latitude?, longitude?}`. Saved pin wins over optional client-resolved pin. 404 unauthorized/not found, 422 missing pin, 429 rate/provider limit, 503 external failure. Route limited to 12 searches/minute/IP in addition to general API limits.
- `POST /api/activities/:activityId/nearby/add` body `{dayId, placement:"end"|"before"|"after", anchorActivityId:null|id, place:{name,latitude,longitude,category}}`. End requires null anchor; before/after require a current activity in the chosen day. Source/target must be in the same editable trip. Stale anchor returns 409 before creating. Fields become a regular activity with price 0, target day date, no time. Existing billing/weather/activity controls continue to work.
- `services/activity-order.js`: retains query order on untouched days, overlays explicit day order on inserted days, ignores deleted IDs and appends unknown/new activities. `activities.service.js` and nearby creation both lock target day before reading/updating order, after the existing account quota lock. Never overwrite existing times to force insertion.
- Migration `npm run migrate:nearby` adds only nullable JSONB `days.activity_order`; generate Prisma client afterward. No backfill/reset. Private and public trip reads sort with the same helper and strip order metadata; public share whitelist still excludes account secrets.

Provider setup: without `GOOGLE_PLACES_API_KEY`, Overpass uses named OSM POIs (up to 300 candidates), ranks reference tags + distance and returns up to requested count; sparse areas may return fewer or zero. Park polygons use their center, so their distance is approximate. Distance is straight-line, not route travel distance. Source coordinates can be geocoder estimates if no saved pin exists. Public Overpass can timeout/rate-limit; retry or reduce radius, no sample places are substituted. Hotel fallback includes guesthouses/hostels; restaurant fallback includes cafés.

Optional Google key is server-only and restricted to Places API (New); enable the API and billing/quota controls separately. [Nearby Search official fields/ranking](https://developers.google.com/maps/documentation/places/web-service/nearby-search) and [type catalog](https://developers.google.com/maps/documentation/places/web-service/place-types). Google path is mock-tested, not live-tested here. Review [Places attribution/storage policies](https://developers.google.com/maps/documentation/places/web-service/policies) before production enablement, especially saving Places-derived content and displaying it on the existing non-Google map. No ratings/review text/photos are persisted by the feature. Default OSM attribution is visible with a copyright link; [Overpass usage reference](https://dev.overpass-api.de/overpass-doc/en/preface/commons.html).

`npm run test:itinerary:integration` verifies actual Prisma JSON and insertion SQL in a transaction with disposable fixtures, then rolls back. It requires an existing account as the foreign-key parent without editing it. Sequences may advance despite rollback. Do not run this check on a production environment without deciding that explicitly.
