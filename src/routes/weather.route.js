import express from "express";
import { predictTripWeather } from "../controllers/weather.controller.js";
import authCheck from "../middlewares/auth.middleware.js";

const weatherRoutes = express.Router();

// 🔑 POST /api/weather/predict-weather
weatherRoutes.post("/predict-weather", authCheck, predictTripWeather);

export default weatherRoutes;