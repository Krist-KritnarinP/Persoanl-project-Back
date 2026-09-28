import { getTravelOverview } from "../controllers/travel-overview.controller.js";
import {
  validateBody,
  validateIds,
  tripCreateSchema,
  tripUpdateSchema,
} from "../validations/schema.js";
import express from "express";
import {
  getAllTrips,
  createTrip,
  getTripById,
  updateTrip,
  deleteTrip,
  createShare,
  revokeShare,
} from "../controllers/trips.controller.js";
import authCheck from "../middlewares/auth.middleware.js"; // ดักตรวจ Token ก่อนเข้าถึง Controller

const TripsRoute = express.Router();
for (const name of ["tripId", "dayId", "activityId", "messageId"])
  TripsRoute.param(name, validateIds);

// ต้องผ่าน authMiddleware ทุกเส้นทางเพื่อระบุตัวตนของผู้ใช้ (req.user)
TripsRoute.use(authCheck);

// 3.1 ดึงทริปทั้งหมดของผู้ใช้
TripsRoute.get("/", getAllTrips);
TripsRoute.get("/overview", getTravelOverview);

// 3.2 สร้างทริปใหม่
TripsRoute.post("/", validateBody(tripCreateSchema), createTrip);

// 3.3 [หน้า Timeline] ดึงทริปแบบดึง Days และ Activities ทั้งหมดมาแสดง
TripsRoute.get("/:tripId", getTripById);

// 3.4 แก้ไขข้อมูลทริป
TripsRoute.put("/:tripId", validateBody(tripUpdateSchema), updateTrip);

// 3.5 ลบข้อมูลทริป
TripsRoute.delete("/:tripId", deleteTrip);

// แชร์ลิงก์ดูได้อย่างเดียว
TripsRoute.post("/:tripId/share", createShare);
TripsRoute.delete("/:tripId/share", revokeShare);

export default TripsRoute;
