import createError from "http-errors";
import { verifyToken } from "../utilities/jwt.js";
import { findUserByEmail, findUserById } from "../services/user.service.js";

// ตรวจสอบว่า เข้าได้มั้ย แต่ถ้าเงื่อไขไม่ผ่านก็ไม่มี สิทธ์
async function authCheck(req, res, next) {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return next(createError(401, "Unauthorization"));
  }
  const token = authorization.split(" ")[1];
  const payload = await verifyToken(token);
  const user = await findUserById(payload.id);
  if (!user) {
    return next(createError(401, "Unauthorized"));
  }
  req.user = user;
  next();
}
export default authCheck;
