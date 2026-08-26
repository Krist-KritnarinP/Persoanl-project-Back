import express from "express";
import {
  createDay,
  updateDay,
  deleteDay,
} from "../controllers/days.controller.js";
import authCheck from "../middlewares/auth.middleware.js";

const DaysRoute = express.Router();

// ล็อกระบบสิทธิ์ด้วย Middleware ก่อนเข้าถึงทุก Route
DaysRoute.use(authCheck);

// 4.1 สร้างวันใหม่
// DaysRoute.post("/", createDay);
DaysRoute.post("/trips/:tripId/days", authCheck, createDay);

// 4.2 แก้ไขข้อมูลวัน
DaysRoute.put("/:dayId", updateDay);

// 4.3 ลบวัน
DaysRoute.delete("/:dayId", deleteDay);

export default DaysRoute;