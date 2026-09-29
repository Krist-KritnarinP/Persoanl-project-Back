import { prisma } from "../lib/prisma.js";
import { tripAccessWhere } from "./trip-access.js";

const ALLOWED_KINDS = ["WEATHER", "PLAN", "CHAT"];

// บันทึกข้อความตอบกลับจาก AI (trip owner หรือ accepted collaborator)
export const saveAiMessage = async ({
  userId,
  tripId,
  kind,
  model,
  prompt,
  content,
}) => {
  if (String(content ?? "").length > 64000)
    throw new Error("AI response exceeds storage limit");
  const safeKind = ALLOWED_KINDS.includes(kind) ? kind : "WEATHER";

  if (tripId) {
    const trip = await prisma.trip.findFirst({
      where: { id: Number(tripId), ...tripAccessWhere(userId) },
      select: { id: true },
    });
    if (!trip) {
      throw new Error("Trip not found or unauthorized");
    }
  }

  return await prisma.aiMessage.create({
    data: {
      userId: Number(userId),
      tripId: tripId ? Number(tripId) : null,
      kind: safeKind,
      model: model ? String(model).slice(0, 100) : null,
      prompt: prompt ? String(prompt).slice(0, 8000) : null,
      content: String(content ?? ""),
    },
  });
};

// ลบประวัติ AI 1 รายการ (ต้องเป็นของ user เอง)
export const deleteAiMessageService = async (messageId, userId) => {
  const msg = await prisma.aiMessage.findFirst({
    where: { id: Number(messageId), userId: Number(userId), kind: "WEATHER" },
    select: { id: true },
  });
  if (!msg) return null;
  return await prisma.aiMessage.delete({ where: { id: Number(messageId) } });
};

// ดึงประวัติ AI ของทริป (ใหม่สุดก่อน)
export const getAiHistoryService = async (tripId, userId, limit = 20) => {
  const trip = await prisma.trip.findFirst({
    where: { id: Number(tripId), ...tripAccessWhere(userId) },
    select: { id: true },
  });
  if (!trip) return null;

  return await prisma.aiMessage.findMany({
    where: { tripId: Number(tripId), userId: Number(userId), kind: "WEATHER" },
    orderBy: { createdAt: "desc" },
    take: Math.min(Math.max(Math.floor(Number(limit)) || 20, 1), 100),
  });
};
