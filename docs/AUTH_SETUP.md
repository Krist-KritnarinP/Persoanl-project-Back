# Checklist: Google Login และ Forgot Password บน localhost

อัปเดต 2026-09-26 — ทำใน `PersonalProject_API` + `PersonalProject_Front` โดยตรง ไม่ใช้ monorepo สำรอง ไม่ต้อง deploy

## สิ่งที่ทำแล้ว
- [x] ปุ่ม Google แบบ DaisyUI และลิงก์ลืมรหัสผ่านอยู่หน้า Login `/` เสมอ แม้ยังไม่มี config Google
- [x] เมื่อตั้ง Google แล้ว ใช้ปุ่มจาก Google Identity Services ส่ง ID token ให้ API ตรวจ signature/audience/expiry
- [x] บัญชีเดิมอีเมลตรงกับ Google ต้องยืนยันรหัสผ่านเดิมก่อนเชื่อม ไม่รวมบัญชีโดยอัตโนมัติ
- [x] ลิงก์ reset อายุ 30 นาที ใช้ครั้งเดียว เก็บ hash ใน DB และยกเลิกทุก session หลัง reset
- [x] เพิ่ม schema ในฐานข้อมูลเดิมแล้ว ข้อมูล mockup เดิมยังอยู่ ไม่ต้องสร้างฐานข้อมูลใหม่
- [x] ทดสอบ logic กับ PostgreSQL แยก และทดสอบหน้าเว็บ desktop/mobile แล้ว

## คุณต้องทำ: Google
- [ ] เปิด Google Cloud Console / Google Auth Platform เลือกโปรเจกต์ของคุณ ตั้ง Branding/Audience และข้อมูลติดต่อ
- [ ] สร้าง OAuth Client ชนิด **Web application**
- [ ] เพิ่ม Authorized JavaScript origins: `http://localhost:5173` (ตรงกับ URL ที่เปิดจริง ไม่มี path หรือ slash ท้าย)
- [ ] หากใช้โหมด Testing เพิ่มบัญชีเพื่อนที่จะทดสอบใน Test users
- [ ] ใส่ Client ID เดียวกันในสองไฟล์ local ต่อไปนี้ (Client ID ไม่ใช่ Client Secret):

`PersonalProject_API/.env`:
```dotenv
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
FRONTEND_URL=http://localhost:5173
```

`PersonalProject_Front/.env`:
```dotenv
VITE_API_URL=http://localhost:8899/api
VITE_GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
```

ใช้ popup callback ของ GIS จึงไม่มี backend OAuth redirect URL/Client Secret ที่ต้องกรอกในโค้ดนี้ อย่าใส่ Client Secret หรือ secret ใดใน `VITE_*`

รองรับ Gmail และ Google Workspace ที่มี verified email และ `hd` เท่านั้น ตาม [Google: Verify ID token](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token) บัญชี Google ที่ใช้อีเมล third-party อื่นให้ใช้ email/password ของเว็บ

## คุณต้องทำ: อีเมล reset
- [ ] เลือกผู้ให้บริการ SMTP ที่คุณมีสิทธิ์ใช้ และนำค่าจากผู้ให้บริการใส่ **เฉพาะ** `PersonalProject_API/.env`
```dotenv
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-credential
SMTP_FROM=AI LHOUNG <your-verified-sender@example.com>
```
- [ ] กรอกทั้ง 5 ค่า หรือเว้นว่างทั้งหมด; ยังไม่ตั้งค่าระบบจะตอบ 503 โดยไม่แอบอ้างว่าส่งอีเมลแล้ว
- [ ] ใช้ sender ที่ผู้ให้บริการยืนยันแล้ว; พอร์ต 587 ใช้ STARTTLS, 465 ใช้ TLS ห้ามปิดการตรวจ certificate
- [ ] อย่าส่งรหัสผ่าน/API key/.env ในแชตหรือ commit ขึ้น Git

## เปิดใช้และทดสอบจริง
- [ ] หยุดแล้ว `npm run dev` ใหม่ใน **API** และ **Front** คนละ terminal หลังแก้ `.env`
- [ ] เปิด `http://localhost:5173/` หากเคย login อยู่ให้ logout ก่อน จะเห็นปุ่ม Google และลิงก์ลืมรหัสผ่านใต้ปุ่ม Login
- [ ] ทดสอบ Google ด้วย Gmail จริง: บัญชีใหม่สร้างได้; บัญชีเว็บเดิมต้องยืนยันรหัสผ่านและยังเห็นทริปเดิม
- [ ] ลืมรหัสผ่าน: ใส่อีเมลที่สมัครแล้ว ตรวจ inbox/spam เปิดลิงก์ในเครื่องเดียวกัน เปลี่ยนรหัสผ่าน แล้ว login ใหม่
- [ ] ลองลิงก์เดิมซ้ำต้องใช้ไม่ได้ และรหัสผ่านเดิมต้อง login ไม่ได้
- [ ] บัญชีที่สมัครด้วย Google อย่างเดียวต้องใช้ Forgot Password ตั้งรหัสผ่านก่อนใช้ export/delete ที่ยืนยันด้วยรหัสผ่าน

ลิงก์ reset บน localhost เปิดได้เฉพาะเครื่องที่รัน frontend; ยังไม่ใช่ลิงก์สำหรับเพื่อนเปิดจากเครื่องอื่น หาก refresh หน้า reset หลัง URL ถูกล้าง ให้เปิดลิงก์จากอีเมลใหม่

**ยังไม่ได้ทดสอบ Google จริงหรือส่งอีเมลจริง** เพราะตอนตรวจ local env ยังไม่มี Client ID/SMTP; browser tests ใช้ Google/API จำลอง ส่วน integration ใช้ PostgreSQL จริงแยกและจำลอง mail/token verifier
