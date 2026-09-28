import { Router } from "express";
import {
  billingRead,
  billingPreview,
  billingCommand,
} from "../billing/service.js";
const router = Router({ mergeParams: true });
router.get("/", async (req, res, next) => {
  try {
    res.json({
      data: await billingRead(Number(req.params.tripId), req.user.id),
    });
  } catch (e) {
    next(e);
  }
});
router.post("/preview", async (req, res, next) => {
  try {
    res.json({
      data: await billingPreview(
        Number(req.params.tripId),
        req.user.id,
        req.body,
      ),
    });
  } catch (e) {
    next(e);
  }
});
router.post("/", async (req, res, next) => {
  try {
    res.json({
      data: await billingCommand(
        Number(req.params.tripId),
        req.user.id,
        req.body,
      ),
    });
  } catch (e) {
    next(e);
  }
});
export default router;
