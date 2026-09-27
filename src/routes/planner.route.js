import express from "express";
import rateLimit from "express-rate-limit";
import authCheck from "../middlewares/auth.middleware.js";
import { validateBody, validateIds } from "../validations/schema.js";
import {
  plannerRequestSchema,
  confirmPlanSchema,
} from "../validations/planner.js";
import { draftPlan, confirmPlan } from "../services/planner.service.js";

const router = express.Router();
router.use(authCheck);
router.use(
  rateLimit({
    windowMs: 60000,
    limit: 15,
    standardHeaders: true,
    legacyHeaders: false,
  }),
);
router.param("draftId", validateIds);
router.post(
  "/draft",
  validateBody(plannerRequestSchema),
  async (req, res, next) => {
    try {
      res.json({ data: await draftPlan(req.user.id, req.body) });
    } catch (error) {
      next(error);
    }
  },
);
router.post(
  "/:draftId/confirm",
  validateBody(confirmPlanSchema),
  async (req, res, next) => {
    try {
      res.json({
        data: await confirmPlan(
          req.user.id,
          Number(req.params.draftId),
          req.body.plan,
        ),
      });
    } catch (error) {
      next(error);
    }
  },
);
export default router;
