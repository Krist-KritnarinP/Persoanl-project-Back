# ADMIN — Spec สำหรับ AI LHOUNG (หลายแอดมิน + จัดการสิทธิ์จ่ายเงิน + เผื่อ scale)

> สถานะ: แผน (ยังไม่ลงโค้ด) อ่านคู่กับ `ROADMAP.md` และ `PHASE0_OPERATIONS.md`
> หลักการ: admin มีไว้กันพัง + กันค่า AI บาน ไม่ใช่ทำ CRUD สวยๆ

## 1. เป้าหมาย / ไม่ทำ

**ทำ:**
- แอดมินหลายคนได้ (สมัคร/เชิญได้ ไม่ใช่ hardcode คนเดียว)
- จัดการสิทธิ์ตามแพ็กเกจที่ user จ่าย (Free / Starter / Pro / Business ตาม ROADMAP)
- ดูแล user / ทริป / share link / AI quota / billing แบบแยก env staging/prod

**ไม่ทำตอนนี้ (ตัดออก):**
- LINE Bot เต็มระบบ, Vault เก็บไฟล์สแกน, B2B white-label, impersonate login เป็น user, แก้ DB ตรงจากหน้า admin, กราฟ analytics สวยๆ, RBAC 5 ขั้น

## 2. Roles

```
USER     = คนเที่ยวปกติ (default)
ADMIN    = ดูแลระบบ + จัดการสิทธิ์ได้ แต่สร้างแอดมินใหม่ไม่ได้
SUPERADMIN = สร้าง/ปลด ADMIN ได้ + เปลี่ยนแพ็กเกจราคาสูง + แตะ config เสี่ยง
```

- `User.role` default `USER` ห้ามสมัครเป็น ADMIN จากหน้า register ปกติ
- การได้ ADMIN 3 ทางเท่านั้น:
  1. `SUPERADMIN_EMAILS` ใน env (seed ตอน migrate ครั้งแรก)
  2. SUPERADMIN กดเชิญผ่าน `/admin/users/:id/promote` (ต้อง login + audit)
  3. invite token ครั้งเดียวหมดอายุ 24 ชม. (`admin_invites` ตารางแยก)
- ทุก request admin เช็ค 2 ชั้น: `authCheck (JWT + tokenVersion)` -> `requireRole(ADMIN|SUPERADMIN)`

## 3. DB ที่ต้องเพิ่ม (additive เท่านั้น ห้ามลบของเดิม)

```prisma
enum Role { USER ADMIN SUPERADMIN }

model User {
  role Role @default(USER)
  // + relation: subscriptions, adminAuditLogs
  isBanned Boolean @default(false)
  bannedAt DateTime?
  bannedReason String?
}

model Subscription {
  id String @id @default(uuid()) @db.Uuid
  userId Int @map("user_id")
  plan String @db.VarChar(20) // FREE | STARTER | PRO | BUSINESS
  status String @db.VarChar(20) // ACTIVE | PAST_DUE | CANCELLED | EXPIRED
  currentPeriodStart DateTime @map("current_period_start")
  currentPeriodEnd DateTime @map("current_period_end")
  gateway String? @db.VarChar(20) // STRIPE | OMISE | MANUAL
  gatewayCustomerId String? @map("gateway_customer_id")
  gatewaySubId String? @map("gateway_sub_id")
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  @@index([userId, status])
  @@map("subscriptions")
}

model QuotaOverride {
  userId Int @id @map("user_id")
  aiMonthlyLimit Int? @map("ai_monthly_limit")
  tripLimit Int? @map("trip_limit")
  reason String?
  updatedBy Int @map("updated_by")
  updatedAt DateTime @updatedAt @map("updated_at")
  @@map("quota_overrides")
}

model AdminInvite {
  tokenHash String @id @map("token_hash") @db.VarChar(64)
  email String @db.VarChar(100)
  role Role @default(ADMIN)
  expiresAt DateTime @map("expires_at")
  usedAt DateTime? @map("used_at")
  createdBy Int @map("created_by")
  @@map("admin_invites")
}

model AdminAuditLog {
  id BigInt @id @default(autoincrement())
  actorId Int @map("actor_id")
  action String @db.VarChar(40) // PROMOTE | BAN | GRANT_PLAN | REVOKE_SHARE | SET_QUOTA ...
  targetType String @db.VarChar(20) // USER | TRIP | SUBSCRIPTION
  targetId String @db.VarChar(64)
  meta Json?
  createdAt DateTime @default(now()) @map("created_at")
  @@index([actorId, createdAt])
  @@map("admin_audit_logs")
}
```

- ใช้ migration additive + RLS เดิม (admin ตรวจสิทธิ์ที่ API ไม่พึ่ง RLS)
- quota หลักยังใช้ `ai_usage` + middleware เดิม แค่เพิ่ม `QuotaOverride` มาทับค่าตาม plan

## 4. สิทธิ์ตามแพ็กเกจ (ผูกกับ ROADMAP)

| plan | ทริป | AI/เดือน | อื่น |
|---|---|---|---|
| FREE | 3 | 5 (อากาศ) | แชร์ลิงก์ได้ |
| STARTER 79฿ | ไม่จำกัด | 100 | export PDF |
| PRO 199฿ | ไม่จำกัด | 300 + AI สร้างทริป 30 | ทริปกลุ่ม 5 คน |
| BUSINESS 2900฿ | ไม่จำกัด | ตามตกลง | สมาชิก 20 + support |

- enforce ในโค้ดก่อนขาย: `requireQuota(plan)` ก่อนยิง Gemini / สร้างทริป / เชิญสมาชิก
- admin ทำได้: ดู subscription, กด grant/extend/revoke manual (พร้อมเหตุผล), ดูประวัติ billing event
- gateway (Stripe/Omise) เป็นตัวจริงเรื่องเก็บเงิน: `POST /api/billing/checkout` -> QR -> webhook `payment.success` -> เปิดสิทธิ์ auto ห้าม admin เปิดสิทธิ์จากสลิปกระดาษ

## 5. API (ทั้งหมดต้อง ADMIN ขึ้นไป)

```
POST /api/admin/invites            # SUPERADMIN เท่านั้น {email, role}
POST /api/admin/users/:id/promote  # SUPERADMIN {role}
POST /api/admin/users/:id/demote
POST /api/admin/users/:id/ban      # {reason}
POST /api/admin/users/:id/unban
POST /api/admin/users/:id/revoke-sessions  # tokenVersion++

GET  /api/admin/users?search=&plan=&page=
GET  /api/admin/users/:id          # trips + subs + ai use ย้อนหลัง (read-only)

GET  /api/admin/trips?search=
POST /api/admin/trips/:id/revoke-share
DELETE /api/admin/trips/:id        # abuse เท่านั้น + audit

GET  /api/admin/ai/usage?day=      # ต่อ user / รวมระบบ
POST /api/admin/ai/kill-switch     # {enabled}
POST /api/admin/ai/quota-override  # {userId, aiMonthlyLimit, reason}

GET  /api/admin/billing/subs?status=
POST /api/admin/billing/grant      # {userId, plan, months, reason} MANUAL
POST /api/admin/billing/revoke     # {userId, reason}

GET  /api/admin/system/health      # ต่อ env
GET  /api/admin/audit?actor=&action=
```

- ทุกเส้น rate-limit แยก + audit log ทุก action ที่เปลี่ยนข้อมูล
- response ห้ามส่ง password hash / secret / gateway secret กลับ

## 6. Frontend `/admin` (guard 2 ชั้น)

```
ProtectRoute (login) -> RequireAdmin (role !== USER)
 /admin            # overview: ป้าย STAGING/PROD + health + AI ใช้วันนี้
 /admin/users      # ค้นหา + เข้าหน้า detail
 /admin/users/:id
 /admin/trips
 /admin/ai         # quota + kill switch
 /admin/billing    # subs + grant/revoke
 /admin/audit      # ตาราง audit read-only
```

- โชว์ป้าย env ใหญ่กันเผลอลบ prod
- ปุ่มเสี่ยง (ban / revoke / grant) ต้อง confirm + ใส่เหตุผล
- ไม่โหลด Leaflet ในหน้า admin (แยก chunk อยู่แล้ว)

## 7. แยก env (staging / prod)

- DB คนละก้อน, secret คนละชุด (`JWT_SECRET, GEMINI_API_KEY` แยกกัน)
- `FRONTEND_URL` prod ต้อง HTTPS, `TRUST_PROXY_HOPS` ตั้งตาม host จริง
- `SUPERADMIN_EMAILS` แยกกัน staging ใช้เมลเทสเท่านั้น
- deploy: staging auto จาก main, prod promote เอง + rollback ได้
- ห้ามใช้ dump prod มา seed staging ใช้ mockup เดิม

## 8. Security กัน user เจาะขึ้น admin (สำคัญสุด)

> threat model ของเว็บนี้: JWT อยู่ใน localStorage + rate-limit เป็น memory + ยังไม่มี `role` — ถ้าเพิ่ม admin โดยไม่ล็อก 3 จุดนี้จะโดนยกระดับสิทธิ์ทันที

**8.1 กฎเหล็ก 5 ข้อ (ห้ามต่อรอง)**
1. **สิทธิ์จริงอยู่ที่ server เท่านั้น** — ห้ามเชื่อ `role` จาก client / JWT payload ตรงๆ ต้องโหลด `User.role + isBanned` จาก DB ทุกครั้งใน `requireRole` ถ้า DB บอก USER คือจบ 403 ทันที
2. **default deny** — ทุกเส้น `/api/admin/*` 挂 `authCheck -> requireRole(ADMIN|SUPERADMIN)` ก่อน controller เสมอ ไม่มีเส้นไหนลืม掛 ถ้า ORDER ผิด (เหมือนกับดัก `DaysRoute` เคยดัก public share) ให้ fail-closed
3. **ห้าม mass-assignment** — `POST /auth/register`, `PUT /users/me` ใช้ zod strict `stripUnknown` ห้ามรับ `role, isBanned, tokenVersion` จาก body เด็ดขาด ใครส่ง `role: ADMIN` มาต้องถูกทิ้งเงียบ + log เตือน
4. **action เสี่ยงต้องยืนยันรหัสผ่านใหม่** — promote/demote/ban/grant/revoke/kill-switch ต้องส่ง `passwordConfirm` + เช็ค `tokenVersion` ล่าสุด กัน token เก่าที่ขโมยมาเอาไปใช้
5. **audit แก้ไม่ได้** — `admin_audit_logs` append-only ไม่มี UPDATE/DELETE API ให้ใครทั้งนั้น ถ้า promote ผิดปกติ (เช่น ตี 3, นอกประเทศ) ให้ alert

**8.2 มาตรการตามท่าเจาะยอดฮิต**
- **ปลอม JWT / แก้ payload เป็น ADMIN:** JWT ต้อง `alg HS256` เท่านั้น + `JWT_SECRET ≥32 bytes` แยก staging/prod + ตรวจ `exp + tokenVersion` ทุกครั้ง revoke แล้วต้องใช้ไม่ได้ทันที
- **XSS ขโมย token แอดมิน:** อันนี้เสี่ยงสุดเพราะตอนนี้ JWT อยู่ localStorage — หน้า `/admin/*` ต้อง CSP เข้มสุด ห้าม `dangerouslySetInnerHTML` ห้ามโหลดสคริปต์นอก ห้าม log token ลง console ระยะยาวควรย้าย session แอดมินเป็น HttpOnly cookie + SameSite=Lax แยกจาก user ปกติ
- **เดา invite / ยึด promote:** invite เก็บแค่ `sha256(token)` หมดอายุ 24 ชม. ใช้ครั้งเดียว ผูกกับ email ที่เชิญเท่านั้น promote ตัวเอง (`:id == actorId`) ห้ามเสมอ ต้องมี SUPERADMIN อีกคนกดให้
- **brute-force / credential stuffing:** login + admin login ใช้ rate-limit แยกเข้มกว่า user (เช่น 20/15นาที/IP) + ล็อกชั่วคราวเมื่อผิด 5 ครั้งติด ตอน scale หลาย instance ต้องย้ายจาก memory เป็น Redis/shared store ไม่งั้นกันไม่อยู่
- **IDOR / เปลี่ยน id ใน URL:** ทุกเส้น admin ที่มี `:id` ต้องเช็คว่า target มีจริง + บันทึก `actorId -> targetId` ลง audit ห้ามส่งข้อมูลอ่อนไหวกลับ (password hash, gateway secret, DIRECT_URL)
- **env หลง:** ป้าย STAGING/PROD ทั้งหน้า + API ทั้ง terminal สีต่างกัน `SUPERADMIN_EMAILS` staging กับ prod คนละชุด ห้ามใช้ secret เดียวกัน
- **first-admin hijack:** seed SUPERADMIN ครั้งเดียวตอน migrate ถ้ามี SUPERADMIN แล้วห้าม seed ซ้ำ ห้ามมี endpoint `make-me-admin` หลงเหลือใน prod

**8.3 ขั้นต่ำก่อนเปิด admin จริง**
- [ ] negative test: USER ยิง `POST /admin/*` ได้ 403 ทุกเส้น, ส่ง `role: ADMIN` ใน register/update ถูกทิ้ง
- [ ] negative test: token เก่าหลัง `revoke-sessions` ใช้เข้า admin ไม่ได้
- [ ] negative test: invite หมดอายุ/ใช้ซ้ำ/ผิด email ใช้ไม่ได้
- [ ] ตรวจว่า frontend `RequireAdmin` เป็นแค่ UX ไม่ใช่ security ของจริงต้องกันที่ API
- [ ] เปิด 2FA (TOTP) ให้ ADMIN/SUPERADMIN ก่อน แล้วค่อยเพิ่มคน (ถ้ายังไม่มีเวลา อย่างน้อยบังคับรหัสผ่าน 15 ตัว + confirm ทุก action เสี่ยง)

**8.4 PDPA**
- ห้าม impersonate, ห้ามดู password, เลขเอกสาร mask 4 ตัวท้าย
- export/delete ตามคำขอเจ้าของข้อมูล ทำผ่าน flow เดิม + audit

## 9. Acceptance

- [ ] สมัครปกติได้แค่ USER เป็น ADMIN ได้เฉพาะ invite/seed
- [ ] USER เข้า `/api/admin/*` ได้ 403 ทุกเส้น + audit ไม่บันทึก read fail
- [ ] ส่ง `role: ADMIN` ใน register / PUT /users/me ถูกทิ้ง ไม่ยกระดับสิทธิ์
- [ ] token เก่าหลัง revoke-sessions เข้า admin ไม่ได้
- [ ] invite หมดอายุ / ใช้ซ้ำ / ผิด email ใช้ไม่ได้, promote ตัวเองไม่ได้
- [ ] SUPERADMIN เชิญ ADMIN ใหม่ได้ 2 คนขึ้นไป, ADMIN สร้าง ADMIN ต่อไม่ได้
- [ ] grant PRO manual แล้ว quota ขึ้นจริง, revoke แล้วกลับ FREE ทันที
- [ ] kill-switch ปิด AI แล้ว user ได้ข้อความไทย ไม่ใช่ 500 หลุด
- [ ] staging กับ prod config ไม่ปนกัน (เช็ค health 2 env)
