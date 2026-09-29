import { withCreationLimit, enforceLimit } from "../security/quotas.js";
import { prisma } from "../lib/prisma.js";
import { tripAccessWhere } from "./trip-access.js";

const ALLOWED_ACTIVITY_TYPES = [
  "ACCOMMODATION",
  "TRANSPORT",
  "RESTAURANT",
  "ATTRACTION",
];

// 5.1 สร้างกิจกรรมใหม่
export const createActivityService = async (userId, activityData) => {
  return withCreationLimit(userId, async (tx) => {
    const {
      dayId,
      day_id,
      activityType,
      activity_type,
      locationName,
      location_name,
      activityDate,
      activity_date,
      activityTime,
      activity_time,
      price,
      description,
      status,
      latitude,
      longitude,
    } = activityData;
    const targetDayId = Number(dayId || day_id);
    const targetLocation = locationName || location_name;
    const rawType = (activityType || activity_type)?.toUpperCase();

    if (!targetDayId) throw new Error("dayId is required");
    if (!targetLocation) throw new Error("locationName is required");

    // Validate Enum ActivityType
    if (rawType && !ALLOWED_ACTIVITY_TYPES.includes(rawType)) {
      throw new Error(
        `Invalid activityType. Allowed values: ${ALLOWED_ACTIVITY_TYPES.join(", ")}`,
      );
    }

    // Check Day ownership
    const day = await tx.day.findFirst({
      where: {
        id: targetDayId,
        trip: tripAccessWhere(userId, "editor"),
      },
    });

    if (!day) throw new Error("Day not found or unauthorized");

    const inputDate = activityDate || activity_date;
    const inputTime = activityTime || activity_time;
    const lat =
      latitude !== undefined && latitude !== "" && latitude !== null
        ? Number(latitude)
        : null;
    const lng =
      longitude !== undefined && longitude !== "" && longitude !== null
        ? Number(longitude)
        : null;

    enforceLimit(
      await tx.activity.count({ where: { dayId: targetDayId } }),
      100,
    );
    return await tx.activity.create({
      data: {
        dayId: targetDayId,
        activityType: rawType || null,
        locationName: targetLocation,
        activityDate: inputDate ? new Date(inputDate) : null,
        activityTime: inputTime ? new Date(inputTime) : null,
        price: price !== undefined ? price : 0.0,
        description: description || null,
        status: status || "planned",
        latitude: lat !== null && !isNaN(lat) ? lat : null,
        longitude: lng !== null && !isNaN(lng) ? lng : null,
      },
    });
  });
};

// 5.2 แก้ไขกิจกรรม
export const updateActivityService = async (activityId, userId, updateData) => {
  const {
    activityType,
    activity_type,
    locationName,
    location_name,
    activityDate,
    activity_date,
    activityTime,
    activity_time,
    price,
    description,
    status,
    latitude,
    longitude,
  } = updateData;

  // Check Activity
  const activity = await prisma.activity.findFirst({
    where: {
      id: Number(activityId),
      day: { trip: tripAccessWhere(userId, "editor") },
    },
  });

  if (!activity) return null;

  const rawType = (activityType || activity_type)?.toUpperCase();
  if (rawType && !ALLOWED_ACTIVITY_TYPES.includes(rawType)) {
    throw new Error(
      `Invalid activityType. Allowed values: ${ALLOWED_ACTIVITY_TYPES.join(", ")}`,
    );
  }

  const dataToUpdate = {};
  const locationVal = locationName || location_name;
  const dateVal = activityDate || activity_date;
  const timeVal = activityTime || activity_time;

  if (rawType !== undefined) dataToUpdate.activityType = rawType;
  if (locationVal !== undefined) dataToUpdate.locationName = locationVal;
  if (dateVal !== undefined)
    dataToUpdate.activityDate = dateVal ? new Date(dateVal) : null;
  if (timeVal !== undefined)
    dataToUpdate.activityTime = timeVal ? new Date(timeVal) : null;
  if (price !== undefined) dataToUpdate.price = price;
  if (description !== undefined) dataToUpdate.description = description;
  if (status !== undefined) dataToUpdate.status = status;
  if (latitude !== undefined) {
    const v = latitude === "" || latitude === null ? null : Number(latitude);
    dataToUpdate.latitude = v !== null && !isNaN(v) ? v : null;
  }
  if (longitude !== undefined) {
    const v = longitude === "" || longitude === null ? null : Number(longitude);
    dataToUpdate.longitude = v !== null && !isNaN(v) ? v : null;
  }

  return await prisma.activity.update({
    where: { id: Number(activityId) },
    data: dataToUpdate,
  });
};

// 5.3 ลบกิจกรรม
export const deleteActivityService = async (activityId, userId) => {
  const activity = await prisma.activity.findFirst({
    where: {
      id: Number(activityId),
      day: { trip: tripAccessWhere(userId, "editor") },
    },
  });

  if (!activity) return null;

  return await prisma.activity.delete({
    where: { id: Number(activityId) },
  });
};
