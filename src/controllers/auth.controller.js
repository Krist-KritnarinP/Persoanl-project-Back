import { isTrustedOrigin, issueRefreshSession, setRefreshCookie } from "../security/refresh-session.js";
import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma.js";
import { createUser, findUserByEmail } from "../services/user.service.js";
import createError from 'http-errors'
import { createToken } from "../utilities/jwt.js";
import { loginSchema, registerSchema } from "../validations/schema.js";

export async function register(req, res, next) {
  try {
    const { username, email, password } = registerSchema.parse(req.body);

    const user = await findUserByEmail(email)
    if (user) {
        return next(createError(400, "Email already exist"))
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = await createUser(username, email, hashPassword)

    res.status(201).json({
      message: "Register Successfully",
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (err) {
    next(err);
  }
}


export async function login(req, res, next) {
  try {
    const { email, password } = loginSchema.parse(req.body);

    // 1. Validate ข้อมูลด้วย Zod


    // 2. ค้นหา User ตาม Email
    const user = await findUserByEmail(email);

    // 3. เช็กว่าพบ User หรือไม่ก่อน (ถ้าไม่พบ ให้หยุดและส่ง Error ทันที)
    if (!user) {
      return next(createError(401, "Invalid email or password")); // ✅ ใส่ return
    }

    // 4. เปรียบเทียบ Password (บรรทัดนี้ปลอดภัยแล้วเพราะ user มีค่าแน่นอน)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(createError(401, "Invalid email or password")); // ✅ ใส่ return
    }

    // 5. สร้าง Token และส่ง Response กลับ
    if (req.headers.origin && !isTrustedOrigin(req)) return next(createError(403, "Untrusted origin"));
    const token = await createToken(user);
    if (isTrustedOrigin(req)) {
      const session = await issueRefreshSession(user);
      setRefreshCookie(res, session.token, session.expiresAt);
    }

    return res.status(200).json({
      message: "Login successfully",
      token: token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      }
    });

  } catch (err) {
    next(err); // ให้ Zod validation error หรือ error อื่นๆ หลุดไปเข้า Error Handler
  }
}
