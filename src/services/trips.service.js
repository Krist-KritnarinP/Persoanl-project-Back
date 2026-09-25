import { prisma } from "../lib/prisma.js";
import crypto from "crypto";

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

  // คำนวณ totalDays จาก Day; เก็บ startDate/endDate ที่ user กรอกเป็นหลัก
  // ใช้ dayDate เป็น fallback เฉพาะกรณี trip ยังไม่มีวันที่
  return trips.map((trip) => {
    const days = trip.days;
    const totalDays = days.length;

    const startDate = trip.startDate ?? (totalDays > 0 ? days[0].dayDate : null);
    const endDate = trip.endDate ?? (totalDays > 0 ? days[totalDays - 1].dayDate : null);

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
  // เก็บวันที่ของ trip เป็นหลัก, fallback ไป dayDate เฉพาะตอน trip ไม่มีวันที่
  const startDate = trip.startDate ?? (totalDays > 0 ? days[0].dayDate : null);
  const endDate = trip.endDate ?? (totalDays > 0 ? days[totalDays - 1].dayDate : null);

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

// 3.5 เปิดแชร์ลิงก์ดูได้อย่างเดียว (คืน token เดิมถ้ามีอยู่แล้ว)
export const createShareService = async (tripId, userId) => {
  const existingTrip = await prisma.trip.findFirst({
    where: { id: Number(tripId), userId: Number(userId) },
    select: { id: true, shareToken: true },
  });
  if (!existingTrip) return null;
  if (existingTrip.shareToken) return existingTrip;

  return await prisma.trip.update({
    where: { id: Number(tripId) },
    data: { shareToken: crypto.randomBytes(32).toString("base64url") },
    select: { id: true, shareToken: true },
  });
};

// 3.6 ปิดแชร์ลิงก์
export const revokeShareService = async (tripId, userId) => {
  const existingTrip = await prisma.trip.findFirst({
    where: { id: Number(tripId), userId: Number(userId) },
    select: { id: true },
  });
  if (!existingTrip) return null;
  return await prisma.trip.update({
    where: { id: Number(tripId) },
    data: { shareToken: null },
    select: { id: true },
  });
};

// 3.7 ดึงทริปผ่าน shareToken (public — ไม่ต้อง auth, ไม่คืนข้อมูล user)
export const getSharedTripService = async (token) => {
  if (!token || typeof token !== "string" || token.length > 64) return null;
  const trip = await prisma.trip.findUnique({
    where: { shareToken: token },
    select: {
      id: true,
      tripName: true,
      destination: true,
      startDate: true,
      endDate: true,
      tripDescription: true,
      user: { select: { username: true } },
      days: {
        orderBy: { dayCount: "asc" },
        select: {
          id: true,
          dayCount: true,
          dayDate: true,
          description: true,
          activities: {
            orderBy: [{ activityDate: "asc" }, { activityTime: "asc" }],
            select: {
              id: true,
              activityType: true,
              locationName: true,
              activityDate: true,
              activityTime: true,
              price: true,
              description: true,
              status: true,
            },
          },
        },
      },
    },
  });
  if (!trip) return null;
  const days = trip.days;
  const totalDays = days.length;
  return {
    ...trip,
    sharedBy: trip.user?.username || null,
    user: undefined,
    startDate: trip.startDate ?? (totalDays > 0 ? days[0].dayDate : null),
    endDate: trip.endDate ?? (totalDays > 0 ? days[totalDays - 1].dayDate : null),
    totalDays,
  };
};
// 3.8 ลบทริป
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