import {
  validateBody,
  validateIds,
  dayCreateSchema,
  dayUpdateSchema,
} from "../validations/schema.js";
import express from "express";
import {
  createDay,
  updateDay,
  deleteDay,
} from "../controllers/days.controller.js";
import authCheck from "../middlewares/auth.middleware.js";

const DaysRoute = express.Router();
for (const name of ["tripId", "dayId", "activityId", "messageId"])
  DaysRoute.param(name, validateIds);

// ล็อกระบบสิทธิ์ด้วย Middleware ก่อนเข้าถึงทุก Route

// 4.1 สร้างวันใหม่
// POST /api/trips/:tripId/days (mounted under /api)
DaysRoute.post(
  "/trips/:tripId/days",
  authCheck,
  validateBody(dayCreateSchema),
  createDay,
);

// 4.2 แก้ไขข้อมูลวัน
// PUT /api/days/:dayId (mounted under /api)
DaysRoute.put(
  "/days/:dayId",
  authCheck,
  validateBody(dayUpdateSchema),
  updateDay,
);

// 4.3 ลบวัน
// DELETE /api/days/:dayId (mounted under /api)
DaysRoute.delete("/days/:dayId", authCheck, deleteDay);

export default DaysRoute;
