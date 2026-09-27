import {
  createDayService,
  updateDayService,
  deleteDayService,
} from "../services/days.service.js";

// 4.1 POST /trips/:tripId/days - สร้างวันใหม่ในทริป
export const createDay = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { tripId } = req.params; // 🔑 ดึง tripId จาก URL Param

    // รวม tripId เข้าไปใน Payload
    const payload = { ...req.body, tripId: Number(tripId) };
    const newDay = await createDayService(userId, payload);

    res.status(201).json({
      message: "Create day successfully",
      data: newDay,
    });
  } catch (error) {
    if (error.message === "Trip not found or unauthorized") {
      return res.status(404).json({ message: error.message });
    }
    if (
      error.message === "tripId is required" ||
      error.message === "dayDate is required for Day 1"
    ) {
      return res.status(400).json({ message: error.message });
    }

    next(error);
  }
};

// 4.2 PUT /days/:dayId - แก้ไขข้อมูลวัน
export const updateDay = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { dayId } = req.params;

    const updatedDay = await updateDayService(dayId, userId, req.body);

    if (!updatedDay) {
      return res.status(404).json({ message: "Day not found or unauthorized" });
    }

    res.status(200).json({
      message: "Update day successfully",
      data: updatedDay,
    });
  } catch (error) {
    next(error);
  }
};

// 4.3 DELETE /days/:dayId - ลบวัน
export const deleteDay = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { dayId } = req.params;

    const deletedDay = await deleteDayService(dayId, userId);

    if (!deletedDay) {
      return res.status(404).json({ message: "Day not found or unauthorized" });
    }

    res.status(200).json({
      message: "Delete day successfully",
    });
  } catch (error) {
    next(error);
  }
};
