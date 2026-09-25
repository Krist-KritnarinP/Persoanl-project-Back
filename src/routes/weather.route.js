import express from "express";
import { predictTripWeather, getWeatherHistory } from "../controllers/weather.controller.js";
import authCheck from "../middlewares/auth.middleware.js";

const weatherRoutes = express.Router();

// 🔑 POST /api/weather/predict-weather
weatherRoutes.post("/predict-weather", authCheck, predictTripWeather);

// ประวัติคำตอบ AI ของทริป: GET /api/weather/history/:tripId
weatherRoutes.get("/history/:tripId", authCheck, getWeatherHistory);

export default weatherRoutes;