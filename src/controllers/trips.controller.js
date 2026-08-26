import {
  getAllTripsService,
  createTripService,
  getTripByIdService,
  updateTripService,
  deleteTripService,
} from "../services/trips.service.js";

// 3.1 GET /trips - ดึงทริปทั้งหมดของผู้ใช้ (สำหรับหน้า Dashboard)
export const getAllTrips = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const trips = await getAllTripsService(userId);

    res.status(200).json({
      message: "Get all trips successfully",
      data: trips,
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