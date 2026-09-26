import createError from "http-errors";
import { verifyToken } from "../utilities/jwt.js";
import { findUserById } from "../services/user.service.js";

// ตรวจสอบว่า เข้าได้มั้ย แต่ถ้าเงื่อไขไม่ผ่านก็ไม่มี สิทธ์
async function authCheck(req, res, next) {
  const authorization = req.headers.authorization;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return next(createError(401, "Unauthorized: missing Bearer token"));
  }
  const token = authorization.split(" ")[1];
  if (!token) {
    return next(createError(401, "Unauthorized: missing token"));
  }
  try {
    const payload = await verifyToken(token);
    if (!payload?.id) {
      return next(createError(401, "Unauthorized: invalid token payload"));
    }
    const user = await findUserById(Number(payload.id));
    if (!user || !Number.isInteger(payload.version) || payload.version !== user.tokenVersion) {
      return next(createError(401, "Unauthorized"));
    }
    req.user = user;
    next();
  } catch (err) {
    if (err?.name === "TokenExpiredError") {
      return next(createError(401, "Unauthorized: token expired"));
    }
    if (err?.name === "JsonWebTokenError") {
      return next(createError(401, "Unauthorized: invalid token"));
    }
    next(err);
  }
}
export default authCheck;
