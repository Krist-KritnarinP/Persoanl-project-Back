import {
  getAllTripsService,
  createTripService,
  getTripByIdService,
  updateTripService,
  deleteTripService,
  createShareService,
  revokeShareService,
  getSharedTripService,
} from "../services/trips.service.js";

// 3.1 GET /trips - ดึงทริปทั้งหมดของผู้ใช้ (สำหรับหน้า Dashboard)
export const getAllTrips = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const page = Number(req.query.page || 1);
    if (!Number.isInteger(page) || page < 1 || page > 1000) return res.status(400).json({ message: "Invalid page" });
    const trips = await getAllTripsService(userId, page);

    res.status(200).json({
      message: "Get all trips successfully",
      data: trips,
      nextPage: trips.length === 100 ? page + 1 : null,
    });
  } catch (error) {
    next(error);
  }
};

// 3.2 POST /trips - สร้างทริปใหม่ (ไม่จำเป็นต้องส่ง startDate/endDate)
export const createTrip = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const newTrip = await createTripService(userId, req.body);

    res.status(201).json({
      message: "Create trip successfully",
      data: newTrip,
    });
  } catch (error) {
    next(error);
  }
};

// 3.3 GET /trips/:tripId
export const getTripById = async (req, res, next) => {
  try {
    
    // console.log("=== DEBUG GET TRIP BY ID ===");
    // console.log("1. req.params:", req.params);
    // console.log("2. req.user:", req.user);

   
    const tripId = req.params.tripId || req.params.id;
    const userId = req.user?.id || req.user?.userId; // เผื่อ key ใน req.user ต่างกัน

    // console.log("3. Parsed tripId:", Number(tripId));
    // console.log("4. Parsed userId:", Number(userId));
    // console.log("============================");

    const trip = await getTripByIdService(tripId, userId);

    if (!trip) {
      return res.status(404).json({ message: "Trip not found or unauthorized" });
    }

    res.status(200).json({
      message: "Get trip details successfully",
      data: trip,
    });
  } catch (error) {
    next(error);
  }
};

// 3.4 PUT /trips/:tripId - แก้ไขข้อมูลทริป
export const updateTrip = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { tripId } = req.params;

    const updatedTrip = await updateTripService(tripId, userId, req.body);

    if (!updatedTrip) {
      return res.status(404).json({ message: "Trip not found or unauthorized" });
    }

    res.status(200).json({
      message: "Update trip successfully",
      data: updatedTrip,
    });
  } catch (error) {
    next(error);
  }
};

// 3.5 DELETE /trips/:tripId - ลบทริป
export const deleteTrip = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { tripId } = req.params;

    const deletedTrip = await deleteTripService(tripId, userId);

    if (!deletedTrip) {
      return res.status(404).json({ message: "Trip not found or unauthorized" });
    }

    res.status(200).json({
      message: "Delete trip successfully",
    });
  } catch (error) {
    next(error);
  }
};

// 3.5 POST /trips/:tripId/share - เปิดแชร์ลิงก์ดูได้อย่างเดียว
export const createShare = async (req, res, next) => {
  try {
    const shared = await createShareService(req.params.tripId, req.user.id);
    if (!shared) {
      return res.status(404).json({ message: "Trip not found or unauthorized" });
    }
    res.status(200).json({
      message: "Share link created",
      data: { shareToken: shared.shareToken },
    });
  } catch (error) {
    next(error);
  }
};

// 3.6 DELETE /trips/:tripId/share - ปิดแชร์ลิงก์
export const revokeShare = async (req, res, next) => {
  try {
    const revoked = await revokeShareService(req.params.tripId, req.user.id);
    if (!revoked) {
      return res.status(404).json({ message: "Trip not found or unauthorized" });
    }
    res.status(200).json({ message: "Share link revoked" });
  } catch (error) {
    next(error);
  }
};

// 3.7 GET /shared/:token - ดูทริปผ่านลิงก์ (public)
export const getSharedTrip = async (req, res, next) => {
  try {
    const trip = await getSharedTripService(req.params.token);
    if (!trip) {
      return res.status(404).json({ message: "Shared trip not found or link revoked" });
    }
    res.status(200).json({
      message: "Get shared trip successfully",
      data: trip,
    });
  } catch (error) {
    next(error);
  }
};