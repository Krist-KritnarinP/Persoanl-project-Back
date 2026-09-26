import { validateBody, validateIds, activityCreateSchema, activityUpdateSchema } from "../validations/schema.js";
import express from "express";

import {
  createActivity,
  updateActivity,
  deleteActivity,
} from "../controllers/activities.controller.js";
import authCheck from "../middlewares/auth.middleware.js";

const ActivitiesRoute = express.Router();
for (const name of ["tripId", "dayId", "activityId", "messageId"]) ActivitiesRoute.param(name, validateIds);

// [ปุ่ม + เพิ่มกิจกรรม] เพิ่มกิจกรรมในวันนั้น -> POST /activities
ActivitiesRoute.post("/", authCheck, validateBody(activityCreateSchema), createActivity);

// แก้ไขรายละเอียดกิจกรรม -> PUT /activities/:activityId
ActivitiesRoute.put("/:activityId", authCheck, validateBody(activityUpdateSchema), updateActivity);

// ลบกิจกรรม -> DELETE /activities/:activityId
ActivitiesRoute.delete("/:activityId", authCheck, deleteActivity);

export default ActivitiesRoute;