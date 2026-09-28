import { prisma } from "../lib/prisma.js";
import { readTravelOverview } from "../services/travel-overview.js";
export async function getTravelOverview(req, res, next) {
  try {
    const page = Number(req.query.page || 1);
    if (!Number.isInteger(page) || page < 1 || page > 1000)
      return res.status(400).json({ message: "Invalid page" });
    res.json(await readTravelOverview(prisma, req.user.id, page));
  } catch (error) {
    next(error);
  }
}
