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
const isRetryable = (err) => {
  const code = err?.status || err?.code;
  return code === 429 || code === 500 || code === 502 || code === 503;
};

// โมเดลที่ใช้งานได้จริง (ทดสอบแล้ว): gemini-3.8-flash
// รุ่น 1.5/2.x-flash ถูก Google ปลดแล้ว (404) — อย่าเปลี่ยนกลับโดยไม่เทส
const DEFAULT_MODEL = "gemini-3.8-flash";

async function generateWithRetry(ai, model, contents, tries = 3) {
  let lastErr;
  for (let i = 1; i <= tries; i++) {
    try {
      return await ai.models.generateContent({ model, contents });
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

    const { location, startDate, endDate, activities, tripId } = parsed.data;

    const targetLocation = sanitize(location || "ไม่ระบุสถานที่", 200) || "ไม่ระบุสถานที่";
    const start = sanitize(startDate || "ไม่ระบุวันเริ่มต้น", 50) || "ไม่ระบุวันเริ่มต้น";
    const end = sanitize(endDate || "ไม่ระบุวันสิ้นสุด", 50) || "ไม่ระบุวันสิ้นสุด";
    const acts = Array.isArray(activities) && activities.length > 0
      ? JSON.stringify(activities.slice(0, 50))
      : "ไม่มีกิจกรรมระบุไว้";

    const prompt = `
      ช่วยประเมินสภาพอากาศและพยากรณ์อากาศล่วงหน้าสำหรับทริปท่องเที่ยว:
      - สถานที่: ${targetLocation}
      - ช่วงวันที่: ${start} ถึง ${end}
      - รายการกิจกรรม/เวลา: ${acts}

      พยากรณ์เฉพาะสภาพอากาศที่คาดว่าจะเจอในแต่ละช่วงเวลาของวันของแต่ละสถานที่เท่านั้น สรุปเป็นช่วงวัน เช้ากลางวันและเย็น ไม่ต้องใส่คำแนะนำอะไรเพิ่มแค่สรุปสภาพอากาศเท่านั้น
      
    `;

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
          prompt: prompt.slice(0, 2000),
          content: prediction || "",
        });
        messageId = saved?.id ?? null;
      } catch (e) {
        console.error("Save AI message failed:", e?.message || e);
      }
    }

    res.status(200).json({
      success: true,
      model,
      prediction,
      messageId,
    });
  } catch (error) {
    console.error("Gemini Weather Error:", error?.message || error);
    next(createError(502, "Failed to get weather prediction, please try again"));
  }
};
