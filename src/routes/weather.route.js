import { validateBody, validateIds } from "../validations/schema.js";
import express from "express";
import {
  predictTripWeather,
  getWeatherHistory,
  deleteWeatherHistory,
} from "../controllers/weather.controller.js";
import authCheck from "../middlewares/auth.middleware.js";

const weatherRoutes = express.Router();
for (const name of ["tripId", "dayId", "activityId", "messageId"])
  weatherRoutes.param(name, validateIds);

// 🔑 POST /api/weather/predict-weather
weatherRoutes.post("/predict-weather", authCheck, predictTripWeather);

// ประวัติคำตอบ AI ของทริป: GET /api/weather/history/:tripId
weatherRoutes.get("/history/:tripId", authCheck, getWeatherHistory);

// ลบประวัติ 1 รายการ: DELETE /api/weather/history/:messageId
weatherRoutes.delete("/history/:messageId", authCheck, deleteWeatherHistory);

export default weatherRoutes;
