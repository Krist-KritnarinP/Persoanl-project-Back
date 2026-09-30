import { manualWeatherWrite } from "./manual-weather.js";
import { withCreationLimit, enforceLimit } from "../security/quotas.js";
import { prisma } from "../lib/prisma.js";
import { tripAccessWhere } from "./trip-access.js";

// 4.1 สร้างวันใหม่ (Create Day)
export const createDayService = async (userId, dayData) => {
  return withCreationLimit(userId, async (tx) => {
    const { tripId, trip_id, dayDate, day_date, daydate, description } =
      dayData;

    const targetTripId = Number(tripId || trip_id);

    if (!targetTripId) {
      throw new Error("tripId is required");
    }

    // 1. ตรวจสอบสิทธิ์ทริป และดึงวันล่าสุด (Day ล่าสุด) ของทริปนี้มาดู
    const trip = await tx.trip.findFirst({
      where: {
        id: targetTripId,
        ...tripAccessWhere(userId, "editor"),
      },
      include: {
        days: {
          orderBy: { dayCount: "desc" },
          take: 1,
        },
      },
    });

    if (!trip) {
      throw new Error("Trip not found or unauthorized");
    }

    const lastDay = trip.days[0];
    let nextDayCount = 1;
    let nextDayDate = null;

    const inputDate = dayDate || day_date || daydate;

    if (!lastDay) {
      // กรณีเป็น Day 1 -> ผู้ใช้ต้องระบุวันเริ่มต้นทริปเอง
      if (!inputDate) {
        throw new Error("dayDate is required for Day 1");
      }
      nextDayCount = 1;
      nextDayDate = new Date(inputDate);
    } else {
      // กรณีเป็น Day 2 ขึ้นไป -> Auto-increment dayCount และบวกวันที่เพิ่ม +1 วันจากวันล่าสุด
      nextDayCount = lastDay.dayCount + 1;

      if (lastDay.dayDate) {
        const prevDate = new Date(lastDay.dayDate);
        prevDate.setDate(prevDate.getDate() + 1);
        nextDayDate = prevDate;
      } else {
        nextDayDate = inputDate ? new Date(inputDate) : new Date();
      }
    }

    // 2. บันทึกข้อมูล Day ใหม่ลง Database
    enforceLimit(await tx.day.count({ where: { tripId: targetTripId } }), 60);
    return await tx.day.create({
      data: {
        ...manualWeatherWrite(dayData),
        tripId: targetTripId,
        dayCount: nextDayCount,
        dayDate: nextDayDate,
        description: description || `Day ${nextDayCount}`,
      },
    });
  });
};

// 4.2 แก้ไขข้อมูลวัน (Update Day)
export const updateDayService = async (dayId, userId, updateData) => {
  const { dayCount, day_count, dayDate, day_date, description } = updateData;

  // 1. ตรวจสอบว่า Day นี้อยู่ใน Trip ของผู้ใช้คนนี้จริงไหม
  const day = await prisma.day.findFirst({
    where: {
      id: Number(dayId),
      trip: {
        ...tripAccessWhere(userId, "editor"),
      },
    },
  });

  if (!day) return null;

  // 2. จัดเตรียมข้อมูลที่จะแก้ไข
  const dataToUpdate = manualWeatherWrite(updateData);
  const countVal = dayCount ?? day_count;
  const dateVal = dayDate || day_date;

  if (countVal !== undefined) dataToUpdate.dayCount = Number(countVal);
  if (dateVal !== undefined)
    dataToUpdate.dayDate = dateVal ? new Date(dateVal) : null;
  if (description !== undefined) dataToUpdate.description = description;

  return await prisma.day.update({
    where: { id: Number(dayId) },
    data: dataToUpdate,
  });
};

// 4.3 ลบวัน (Delete Day)
export const deleteDayService = async (dayId, userId) => {
  // 1. ตรวจสอบว่า Day นี้อยู่ใน Trip ของผู้ใช้คนนี้จริงไหม
  const day = await prisma.day.findFirst({
    where: {
      id: Number(dayId),
      trip: {
        ...tripAccessWhere(userId, "editor"),
      },
    },
  });

  if (!day) return null;

  // 2. สั่งลบข้อมูล
  return await prisma.day.delete({
    where: { id: Number(dayId) },
  });
};
