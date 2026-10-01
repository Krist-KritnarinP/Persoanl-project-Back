import z from "zod";
import { idSchema } from "./schema.js";
export const nearbySearchSchema = z.object({
  radiusKm: z.number().int().min(1).max(5),
  category: z.enum(["restaurant", "attraction", "park", "hotel"]),
  limit: z.number().int().min(1).max(5).default(5),
  language: z.enum(["th", "en", "zh", "ko"]).default("th"),
  latitude: z.number().finite().min(-90).max(90).optional(),
  longitude: z.number().finite().min(-180).max(180).optional(),
}).strict().refine(v => (v.latitude === undefined) === (v.longitude === undefined), "Coordinates must be supplied together");
export const nearbyAddSchema = z.object({
  dayId: idSchema,
  placement: z.enum(["end", "before", "after"]).default("end"),
  anchorActivityId: idSchema.nullable().default(null),
  place: z.object({
    name: z.string().trim().min(1).max(150),
    latitude: z.number().finite().min(-90).max(90),
    longitude: z.number().finite().min(-180).max(180),
    category: z.enum(["restaurant", "attraction", "park", "hotel"]),
  }).strict(),
}).strict().refine(v => v.placement === "end" ? v.anchorActivityId === null : v.anchorActivityId !== null, "Choose an insertion activity");
