import rateLimit from "express-rate-limit";
import { nearbySearchSchema, nearbyAddSchema } from "../validations/nearby.js";
import { searchNearby, addNearby } from "../controllers/nearby.controller.js";
import {
  validateBody,
  validateIds,
  activityCreateSchema,
  activityUpdateSchema,
} from "../validations/schema.js";
import express from "express";

import {
  createActivity,
  updateActivity,
  deleteActivity,
} from "../controllers/activities.controller.js";
import authCheck from "../middlewares/auth.middleware.js";

const ActivitiesRoute = express.Router();
for (const name of ["tripId", "dayId", "activityId", "messageId"])
  ActivitiesRoute.param(name, validateIds);

ActivitiesRoute.post("/:activityId/nearby", authCheck, rateLimit({windowMs:60000,limit:12,standardHeaders:true,legacyHeaders:false}), validateBody(nearbySearchSchema), searchNearby);
ActivitiesRoute.post("/:activityId/nearby/add", authCheck, validateBody(nearbyAddSchema), addNearby);

// [ปุ่ม + เพิ่มกิจกรรม] เพิ่มกิจกรรมในวันนั้น -> POST /activities
ActivitiesRoute.post(
  "/",
  authCheck,
  validateBody(activityCreateSchema),
  createActivity,
);

// แก้ไขรายละเอียดกิจกรรม -> PUT /activities/:activityId
ActivitiesRoute.put(
  "/:activityId",
  authCheck,
  validateBody(activityUpdateSchema),
  updateActivity,
);

// ลบกิจกรรม -> DELETE /activities/:activityId
ActivitiesRoute.delete("/:activityId", authCheck, deleteActivity);

export default ActivitiesRoute;
