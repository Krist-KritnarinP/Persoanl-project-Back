import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import authRoute from "./routes/auth.route.js";
import UsersRoute from "./routes/users.route.js";
import TripsRoute from "./routes/trips.routes.js";
import DaysRoute from "./routes/days.routes.js";
import ActivitiesRoute from "./routes/activities.route.js";
import { pathNotfound } from "./middlewares/pathNotfound.middleware.js";
import errorHandler from "./middlewares/errorHandler.js";
import weatherRoutes from "./routes/weather.route.js";

const app = express();
app.set("trust proxy", 1);

app.use(helmet());

const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
app.use(cors({
  origin: [frontendUrl],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // allow cookies if needed
}));

app.use(express.json({ limit: "100kb" }));

// กัน brute-force ที่ auth + weather (เรียก AI มีค่าใช้จ่าย)
const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 100, standardHeaders: true, legacyHeaders: false });
const aiLimiter = rateLimit({ windowMs: 10 * 60 * 1000, limit: 30, standardHeaders: true, legacyHeaders: false });

app.get("/check", (req, res) => {
  res.send("Hello");
});

// main app routes 
app.use("/api/auth", authLimiter, authRoute);
app.use("/api/users", UsersRoute);
app.use("/api/trips", TripsRoute);
// DaysRoute อยู่ใต้ /api: POST /api/trips/:tripId/days, PUT/DELETE /api/days/:dayId
app.use("/api", DaysRoute);
app.use("/api/activities", ActivitiesRoute);
app.use("/api/weather", aiLimiter, weatherRoutes); // 👈 2. เพิ่ม Route สำหรับ Weather API (Gemini)
// error handling middlewares
app.use(errorHandler);
app.use(pathNotfound);

export default app;