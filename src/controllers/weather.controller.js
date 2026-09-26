import { prisma } from "../lib/prisma.js";
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

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// หมายเหตุ: ห้าม retry 429 (โควต้าหมด — retry ยิ่งเผาโควต้าเปล่า)
const isRetryable = (err) => {
  const code = err?.status || err?.code;
  return code === 500 || code === 502 || code === 503;
};
const isQuotaError = (err) => {
  const code = err?.status || err?.code;
  return code === 429 || String(err?.message || "").includes("quota");
};

// โมเดลที่ใช้งานได้จริง (ทดสอบแล้ว): gemini-3.8-flash
// รุ่น 1.5/2.x-flash ถูก Google ปลดแล้ว (404) — อย่าเปลี่ยนกลับโดยไม่เทส
const DEFAULT_MODEL = "gemini-3.8-flash";

async function generateWithRetry(ai, model, contents, tries = 1) {
  let lastErr;
  for (let i = 1; i <= tries; i++) {
    try {
      return await ai.models.generateContent({ model, contents, config: { maxOutputTokens: 1500, httpOptions: { timeout: 25000 } } });
    } catch (err) {
      lastErr = err;
      if (!isRetryable(err) || i === tries) throw err;
      await sleep(1500 * i); // backoff กัน spike 429/503
    }
  }
  throw lastErr;
}

export const predictTripWeather = async (req, res, next) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return next(createError(503, "Weather AI is not configured (missing GEMINI_API_KEY)"));
    }
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
    await reserveAiQuota(req.user.id);

    const targetLocation = sanitize(location || "ไม่ระบุสถานที่", 200) || "ไม่ระบุสถานที่";
    const start = sanitize(startDate || "ไม่ระบุวันเริ่มต้น", 50) || "ไม่ระบุวันเริ่มต้น";
    const end = sanitize(endDate || "ไม่ระบุวันสิ้นสุด", 50) || "ไม่ระบุวันสิ้นสุด";
    const acts = Array.isArray(activities) && activities.length > 0
      ? JSON.stringify(activities.slice(0, 50))
      : "ไม่มีกิจกรรมระบุไว้";

    // รายวันแบบ "Day N (วันที่): ที่1, ที่2" ให้ AI สรุปอากาศรายที่ได้ตรงจุด
    const dayLines = (trip.days || []).map((day) => {
      const places = (day.activities || []).map((a) => a.locationName).filter(Boolean);
      const d = day.dayDate ? new Date(day.dayDate).toISOString().slice(0, 10) : "ไม่ระบุวันที่";
      return `- Day ${day.dayCount} (${d}): ${places.length ? places.join(", ") : "ไม่มีกิจกรรม"}`;
    }).join("\n");

    const prompt = `
      คุณคือผู้ช่วยวิเคราะห์สภาพอากาศสำหรับทริปท่องเที่ยว ตอบเป็นภาษาไทยเท่านั้น
      แบ่งคำตอบเป็น 2 ส่วน คั่นด้วยบรรทัด ---DETAILS--- เป๊ะๆ เพียงบรรทัดเดียว (ห้ามขาด ห้ามเกิน):
      ส่วนที่ 1 — สรุปไฮไลต์ภาพรวมทั้งทริป ไม่เกิน 6 บรรทัด (อากาศเด่นๆ ของทริปนี้คืออะไร)
      ---DETAILS---
      ส่วนที่ 2 — รายละเอียดรายวัน: ทุกวันให้ขึ้นต้นด้วย "Day N (วันที่)" แล้วลิสต์สถานที่ที่จะไปในวันนั้นทีละที่ แต่ละที่สรุปสั้นๆ บรรทัดเดียวว่าเช้า/กลางวัน/เย็นเจออากาศแบบไหน สถานที่ย่อยเอาแค่ไฮไลต์ ห้ามแนะนำการแต่งตัวหรือกิจกรรมเพิ่ม
      ข้อมูลทริป:
      - จุดหมายหลัก: ${targetLocation}
      - ช่วงวันที่: ${start} ถึง ${end}
      - รายวัน:
      ${dayLines || "- ไม่มีข้อมูลรายวัน"}
      - รายการกิจกรรม/เวลา (อ้างอิง): ${acts}
    `;

    // Log ข้อมูลที่ส่งออกไปหา AI (ดูใน terminal ของ backend — ไม่มี API key อยู่ในนี้)
    console.log("[AI weather] outgoing:", JSON.stringify({
      model: process.env.GEMINI_MODEL || DEFAULT_MODEL,
      tripId, location: targetLocation, start, end,
      days: (trip.days || []).length,
      activities: Array.isArray(activities) ? activities.length : 0,
      promptChars: prompt.length,
    }));

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const model = process.env.GEMINI_MODEL || DEFAULT_MODEL;
    let response;
    try {
      response = await generateWithRetry(ai, model, prompt);
    } catch (err) {
      const msg = String(err?.message || "");
      if (msg.includes("404") || msg.includes("no longer available")) {
        console.error("Gemini model retired:", model);
        return next(createError(502, `AI model ${model} is retired, please update GEMINI_MODEL`));
      }
      if (isQuotaError(err)) {
        console.error("Gemini quota exceeded");
        return next(createError(429, "AI ใช้งานครบโควต้าฟรีแล้ว กรุณารอโควต้ารีเซ็ตหรืออัปเกรดแพ็กเกจแล้วลองใหม่"));
      }
      throw err;
    }

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
