import express from 'express';
import {
  getAllTrips,
  createTrip,
  getTripById,
  updateTrip,
  deleteTrip
} from '../controllers/trips.controller.js';
import authCheck from '../middlewares/auth.middleware.js'; // ดักตรวจ Token ก่อนเข้าถึง Controller

const TripsRoute = express.Router();

// ต้องผ่าน authMiddleware ทุกเส้นทางเพื่อระบุตัวตนของผู้ใช้ (req.user)
TripsRoute.use(authCheck);

// 3.1 ดึงทริปทั้งหมดของผู้ใช้
TripsRoute.get('/', getAllTrips);

// 3.2 สร้างทริปใหม่
TripsRoute.post('/', createTrip);

// 3.3 [หน้า Timeline] ดึงทริปแบบดึง Days และ Activities ทั้งหมดมาแสดง
TripsRoute.get('/:tripId', getTripById);

// 3.4 แก้ไขข้อมูลทริป
TripsRoute.put('/:tripId', updateTrip);

// 3.5 ลบข้อมูลทริป
TripsRoute.delete('/:tripId', deleteTrip);

export default TripsRoute;