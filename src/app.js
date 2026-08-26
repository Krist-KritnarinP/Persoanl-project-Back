import express from "express";
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import UsersRoute from "./routes/users.route.js";
import TripsRoute from "./routes/trips.routes.js";
import DaysRoute from "./routes/days.routes.js";
import ActivitiesRoute from "./routes/activities.route.js";
import { pathNotfound } from "./middlewares/pathNotfound.middleware.js";
import errorHandler from "./middlewares/errorHandler.js";
import weatherRoutes from "./routes/weather.route.js";

const app = express();

app.use(cors({
  origin: ["http://localhost:5173"], 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // allow cookies if needed
}));

app.use(express.json());

app.get("/check", (req, res) => {
  res.send("Hello");
});

// main app routes 
app.use("/api/auth", authRoute);
app.use("/api/users", UsersRoute);
app.use("/api/trips", TripsRoute);
// app.use("/api/days", DaysRoute);
app.use("/api", DaysRoute);
app.use("/api/activities", ActivitiesRoute);
app.use("/api/weather", weatherRoutes); // 👈 2. เพิ่ม Route สำหรับ Weather API (Gemini)
// error handling middlewares
app.use(errorHandler);
app.use(pathNotfound);

export default app;