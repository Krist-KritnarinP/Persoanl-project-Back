import { Router } from "express";
import authCheck from "../middlewares/auth.middleware.js";
import { validateIds } from "../validations/schema.js";
import {
  collaborators,
  invite,
  invitations,
  leave,
  remove,
  respond,
} from "../controllers/collaboration.controller.js";

const router = Router();
router.use(authCheck);
router.get("/invitations", invitations);
router.put("/invitations/:tripId", validateIds, respond);
router.get("/trips/:tripId/collaborators", validateIds, collaborators);
router.post("/trips/:tripId/collaborators", validateIds, invite);
router.delete("/trips/:tripId/collaborators/:userId", validateIds, remove);
router.delete("/trips/:tripId/membership", validateIds, leave);
export default router;
