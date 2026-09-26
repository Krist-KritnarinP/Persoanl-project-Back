import { prisma } from "../lib/prisma.js";
import { generateWeather } from "../services/model-fallback.js";
import { reserveAiQuota } from "../security/quotas.js";
import { GoogleGenAI } from "@google/genai";
import createError from "http-errors";
import { weatherSchema } from "../validations/schema.js";
import { saveAiMessage, getAiHistoryService, deleteAiMessageService } from "../services/ai.service.js";

// GET /api/weather/history/:tripId — ประวัติคำตอบ AI ของทริปนี้
export const getWeatherHistory = async (req, res, next) => {
  try {
    const { tripId } = req.params;
    const history = await getAiHistoryService(tripId, req.user.id, req.query.limit);
    if (!history) {
      return res.status(404).json({ message: "Trip not found or unauthorized" });
    }
    res.status(200).json({ message: "Get AI history successfully", data: history });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/weather/history/:messageId — ลบประวัติ AI 1 รายการ
export const deleteWeatherHistory = async (req, res, next) => {
  try {
    const deleted = await deleteAiMessageService(req.params.messageId, req.user.id);
    if (!deleted) {
      return res.status(404).json({ message: "AI message not found or unauthorized" });
    }
    res.status(200).json({ message: "Delete AI message successfully" });
  } catch (error) {
    next(error);
  }
};

const sanitize = (v, max = 200) =>
  String(v ?? "").replace(/[\r\n]+/g, " ").slice(0, max);

export const predictTripWeather = async (req, res, next) => {
  try {
    if (process.env.AI_ENABLED === "false") return next(createError(503, "AI temporarily disabled"));
    const parsed = weatherSchema.safeParse(req.body ?? {});
    if (!parsed.success) {
      return next(createError(400, "Invalid weather request payload"));
    }

    const { tripId } = parsed.data;
    const trip = await prisma.trip.findFirst({ where: { id: tripId, userId: req.user.id }, include: { days: { include: { activities: true } } } });
    if (!trip) return next(createError(404, "Trip not found"));
    // Build the prompt from owned DB data; request text cannot substitute another trip.
    const { destination: location, startDate, endDate } = trip;
    const activities = trip.days.flatMap(day => day.activities.map(a => ({ date: day.dayDate, location: a.locationName, time: a.activityTime, type: a.activityType })));
    const recent = await prisma.aiMessage.findFirst({ where: { userId: req.user.id, tripId, kind: 'WEATHER', createdAt: { gte: new Date(Date.now() - 6 * 3600000) } }, orderBy: { createdAt: 'desc' } });
    // Cache only when the owned itinerary matches the request used to generate it.
    const fingerprint = JSON.stringify([location, startDate, endDate, activities]);
    const { createHash } = await import('node:crypto');
    const cacheKey = createHash('sha256').update(fingerprint).digest('hex');
    if (recent?.prompt === cacheKey) return res.json({ success: true, prediction: recent.content, model: recent.model, messageId: recent.id, cached: true });

    const targetLocation = sanitize(location || "ไม่ระบุสถานที่", 200) || "ไม่ระบุสถานที่";

    // ฟอร์แมตประหยัด token: วันที่แบบ MM-DD, เวลาแบบ HH:MM, ที่นอนต่อท้าย (นอน)
    // ตัวอย่าง: "D2 10-18: TG954(00:05), FI319(13:50), Muli(นอน), Hallgrimskirkja(18:00)"
    const fmtD = (v) => {
      if (!v) return "";
      const d = new Date(v);
      return isNaN(d.getTime()) ? "" : d.toISOString().slice(5, 10);
    };
    const fmtT = (v) => {
      if (!v) return "";
      if (typeof v === "string" && /^\d{2}:\d{2}/.test(v)) return v.slice(0, 5);
      const d = new Date(v); // Prisma ส่ง Time กลับมาเป็น Date object
      return isNaN(d.getTime()) ? "" : d.toISOString().slice(11, 16);
    };
    const dayLines = (trip.days || []).map((day) => {
      const places = (day.activities || []).map((a) => {
        const name = (a.locationName || "").trim();
        if (!name) return "";
        const tm = fmtT(a.activityTime);
        const night = a.activityType === "ACCOMMODATION" ? "(นอน)" : "";
        return tm ? `${name}(${tm})${night}` : `${name}${night}`;
      }).filter(Boolean);
      return `D${day.dayCount} ${fmtD(day.dayDate) || "?"}: ${places.length ? places.join(", ") : "-"}`;
    }).join("\n");
    const range = `${fmtD(startDate) || "?"}→${fmtD(endDate) || "?"}`;

    // หมายเหตุ: ตัด JSON กิจกรรมดิบทั้งก้อนทิ้ง (ซ้ำกับรายวัน ประหยัด ~65%) —
    // ไฮไลต์ปิดท้ายให้ AI เลือกเองตามทริป (แสงเหนือ/พายุ/ฝน แล้วแต่ทริปนั้น)
    const prompt = `พยากรณ์อากาศทริป "${targetLocation}" ${range} ตอบภาษาไทย แบ่ง 2 ส่วนคั่นด้วยบรรทัด ---DETAILS--- เป๊ะๆ บรรทัดเดียว:
ส่วนที่ 1 — ไฮไลต์ ≤4 บรรทัด ปิดท้ายด้วย ★ + ปัจจัยอากาศที่กระทบแผนทริปนี้มากสุด 1 อย่าง
---DETAILS---
ส่วนที่ 2 — รายวันขึ้นต้น "DN: " ทุกวัน แต่ละที่ 1 บรรทัดว่าเช้า/กลางวัน/เย็นเจออะไร ที่ย่อยสั้นๆ ห้ามแนะนำเพิ่ม
${dayLines || "- ไม่มีข้อมูลรายวัน"}`;

    if (!process.env.GEMINI_API_KEY) return next(createError(503, "Weather AI is not configured"));
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const { response, model } = await generateWeather(ai, prompt, {
      reserve: () => reserveAiQuota(req.user.id),
    });

    const prediction = response.text;

    // เก็บประวัติคำตอบ AI (ถ้ามี tripId และเป็นทริปของ user)
    let messageId = null;
    if (tripId && req.user?.id) {
      try {
        const saved = await saveAiMessage({
          userId: Number(req.user.id),
          tripId: Number(tripId),
          kind: "WEATHER",
          model,
          prompt: cacheKey,
          content: prediction || "",
        });
        messageId = saved?.id ?? null;
      } catch (e) {
        console.error("Save AI message failed");
      }
    }

    res.status(200).json({
      success: true,
      model,
      prediction,
      messageId,
    });
  } catch (error) {
    console.error("Gemini request failed");
    if (error.status === 429 || error.status === 404 || error.status === 503) return next(error);
    next(createError(502, "Failed to get weather prediction, please try again"));
  }
};
