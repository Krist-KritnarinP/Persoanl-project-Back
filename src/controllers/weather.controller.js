import { buildWeatherPrompt } from "../services/weather-prompt.js";
import { prisma } from "../lib/prisma.js";
import { generateWeather } from "../services/model-fallback.js";
import { reserveAiQuota } from "../security/quotas.js";
import { GoogleGenAI } from "@google/genai";
import createError from "http-errors";
import { weatherSchema } from "../validations/schema.js";
import {
  saveAiMessage,
  getAiHistoryService,
  deleteAiMessageService,
} from "../services/ai.service.js";

// GET /api/weather/history/:tripId — ประวัติคำตอบ AI ของทริปนี้
export const getWeatherHistory = async (req, res, next) => {
  try {
    const { tripId } = req.params;
    const history = await getAiHistoryService(
      tripId,
      req.user.id,
      req.query.limit,
    );
    if (!history) {
      return res
        .status(404)
        .json({ message: "Trip not found or unauthorized" });
    }
    res
      .status(200)
      .json({ message: "Get AI history successfully", data: history });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/weather/history/:messageId — ลบประวัติ AI 1 รายการ
export const deleteWeatherHistory = async (req, res, next) => {
  try {
    const deleted = await deleteAiMessageService(
      req.params.messageId,
      req.user.id,
    );
    if (!deleted) {
      return res
        .status(404)
        .json({ message: "AI message not found or unauthorized" });
    }
    res.status(200).json({ message: "Delete AI message successfully" });
  } catch (error) {
    next(error);
  }
};

export const predictTripWeather = async (req, res, next) => {
  try {
    if (process.env.AI_ENABLED === "false")
      return next(createError(503, "AI temporarily disabled"));
    const parsed = weatherSchema.safeParse(req.body ?? {});
    if (!parsed.success) {
      return next(createError(400, "Invalid weather request payload"));
    }

    const { tripId, language } = parsed.data;
    const trip = await prisma.trip.findFirst({
      where: { id: tripId, userId: req.user.id },
      include: { days: { include: { activities: true } } },
    });
    if (!trip) return next(createError(404, "Trip not found"));
    const { prompt, maxOutputTokens } = buildWeatherPrompt(trip, language);
    const recent = await prisma.aiMessage.findFirst({
      where: {
        userId: req.user.id,
        tripId,
        kind: "WEATHER",
        createdAt: { gte: new Date(Date.now() - 6 * 3600000) },
      },
      orderBy: { createdAt: "desc" },
    });
    // Cache only when the owned itinerary matches the request used to generate it.
    const fingerprint = `weather:v3:${prompt}`;
    const { createHash } = await import("node:crypto");
    const cacheKey = createHash("sha256").update(fingerprint).digest("hex");
    const debugWeather =
      process.env.NODE_ENV !== "production" &&
      (process.env.NODE_ENV === "development" || process.env.npm_lifecycle_event === "dev");
    if (recent?.prompt === cacheKey) {
      if (debugWeather) console.log("[Weather cache] Reusing saved report; no AI request", { tripId, language });
      return res.json({
        success: true,
        prediction: recent.content,
        model: recent.model,
        messageId: recent.id,
        cached: true,
      });
    }

    if (!process.env.GEMINI_API_KEY)
      return next(createError(503, "Weather AI is not configured"));
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    if (debugWeather) {
      console.log("[Weather → AI]", { tripId, language, maxOutputTokens, promptCharacters: prompt.length });
      console.log(prompt);
    }
    const { response, model } = await generateWeather(ai, prompt, {
      reserve: () => reserveAiQuota(req.user.id),
      generationConfig: { maxOutputTokens },
    });

    if (
      response.candidates?.some(
        (candidate) => candidate.finishReason === "MAX_TOKENS",
      )
    )
      throw createError(502, "Weather response incomplete");
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
    if ([400, 413, 429, 404, 503].includes(error.status)) return next(error);
    next(
      createError(502, "Failed to get weather prediction, please try again"),
    );
  }
};
