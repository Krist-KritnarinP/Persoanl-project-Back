import express from "express";

import {
  createActivity,
  updateActivity,
  deleteActivity,
} from "../controllers/activities.controller.js";
import authCheck from "../middlewares/auth.middleware.js";

const ActivitiesRoute = express.Router();

// [ปุ่ม + เพิ่มกิจกรรม] เพิ่มกิจกรรมในวันนั้น -> POST /activities
ActivitiesRoute.post("/", authCheck, createActivity);

// แก้ไขรายละเอียดกิจกรรม -> PUT /activities/:activityId
ActivitiesRoute.put("/:activityId", authCheck, updateActivity);

// ลบกิจกรรม -> DELETE /activities/:activityId
ActivitiesRoute.delete("/:activityId", authCheck, deleteActivity);

export default ActivitiesRoute;