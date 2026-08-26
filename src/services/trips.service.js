import { prisma } from "../lib/prisma.js";

// 3.1 ดึงทริปทั้งหมดของผู้ใช้ (สำหรับหน้า Dashboard พร้อมสรุปวันที่และจำนวนวัน)
export const getAllTripsService = async (userId) => {
  const trips = await prisma.trip.findMany({
    where: {
      userId: Number(userId),
    },
    include: {
      days: {
        orderBy: {
          dayCount: "asc",
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // คำนวณ startDate, endDate และ totalDays จากรายการ Day ในทริป
  return trips.map((trip) => {
    const days = trip.days;
    const totalDays = days.length;
    
    // วันเริ่มต้น = dayDate ของ Day 1 (ถ้ามี)
    const startDate = totalDays > 0 ? days[0].dayDate : trip.startDate;
    // วันสิ้นสุด = dayDate ของ Day วันสุดท้าย (ถ้ามี)
    const endDate = totalDays > 0 ? days[totalDays - 1].dayDate : trip.endDate;

    return {
      ...trip,
      startDate,
      endDate,
      totalDays,
    };
  });
};

// 3.2 สร้างทริปใหม่ (ไม่บังคับส่ง startDate / endDate)
export const createTripService = async (userId, tripData) => {
  const { tripName, destination, startDate, endDate, tripDescription } = tripData;

  return await prisma.trip.create({
    data: {
      tripName,
      destination,
      startDate: startDate ? new Date(startDate) : null,
      endDate: endDate ? new Date(endDate) : null,
      tripDescription: tripDescription || null,
      userId: Number(userId),
    },
  });
};

// 3.3 ดึงข้อมูลทริปหน้า Timeline
export const getTripByIdService = async (tripId, userId) => {
  const targetId = Number(tripId);


  if (!targetId || isNaN(targetId)) {
    return null;
  }

  const trip = await prisma.trip.findFirst({
    where: {
      id: targetId,
      userId: Number(userId),
    },
    include: {
      days: {
        orderBy: {
          dayCount: "asc",
        },
        include: {
          activities: {
            orderBy: {
              activityTime: "asc",
            },
          },
        },
      },
    },
  });

  if (!trip) return null;

  const days = trip.days;
  const totalDays = days.length;
  const startDate = totalDays > 0 ? days[0].dayDate : trip.startDate;
  const endDate = totalDays > 0 ? days[totalDays - 1].dayDate : trip.endDate;

  return {
    ...trip,
    startDate,
    endDate,
    totalDays,
  };
};

// 3.4 แก้ไขข้อมูลทริป
export const updateTripService = async (tripId, userId, tripData) => {
  const { tripName, destination, startDate, endDate, tripDescription } = tripData;

  // ตรวจสอบก่อนว่าทริปนี้เป็นของผู้ใช้นี้จริงไหม
  const existingTrip = await prisma.trip.findFirst({
    where: {
      id: Number(tripId),
      userId: Number(userId),
    },
  });

  if (!existingTrip) return null;

  return await prisma.trip.update({
    where: {
      id: Number(tripId),
    },
    data: {
      ...(tripName && { tripName }),
      ...(destination && { destination }),
      ...(startDate !== undefined && { startDate: startDate ? new Date(startDate) : null }),
      ...(endDate !== undefined && { endDate: endDate ? new Date(endDate) : null }),
      ...(tripDescription !== undefined && { tripDescription }),
    },
  });
};

// 3.5 ลบทริป
export const deleteTripService = async (tripId, userId) => {
  const existingTrip = await prisma.trip.findFirst({
    where: {
      id: Number(tripId),
      userId: Number(userId),
    },
  });

  if (!existingTrip) return null;

  return await prisma.trip.delete({
    where: {
      id: Number(tripId),
    },
  });
};