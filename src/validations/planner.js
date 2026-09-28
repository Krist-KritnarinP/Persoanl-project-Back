import z from "zod";

const date = z
  .string()
  .regex(/^20\d{2}-\d{2}-\d{2}$/)
  .refine(
    (v) =>
      Number.isFinite(Date.parse(v)) &&
      new Date(v).toISOString().slice(0, 10) === v,
    "Invalid calendar date",
  );
export function tripDates(start, end) {
  const count = (Date.parse(end) - Date.parse(start)) / 86400000 + 1;
  if (!Number.isInteger(count) || count < 1) return [];
  return Array.from({ length: count }, (_, i) =>
    new Date(Date.parse(start) + i * 86400000).toISOString().slice(0, 10),
  );
}
export const plannerRequestSchema = z
  .object({
    language: z.enum(["th", "en", "zh", "ko"]).default("th"),
    requirements: z.string().trim().min(10).max(2000),
    startDate: date,
    endDate: date,
  })
  .strict()
  .refine(
    (v) => tripDates(v.startDate, v.endDate).length > 0,
    "End date must follow start date",
  );

const activity = z
  .object({
    activityType: z.enum([
      "ATTRACTION",
      "RESTAURANT",
      "TRANSPORT",
      "ACCOMMODATION",
    ]),
    locationName: z.string().trim().min(1).max(150),
    time: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/),
    price: z.number().finite().min(0).max(99999999.99).multipleOf(0.01),
    description: z.string().max(500),
  })
  .strict();
// No IDs, coordinates, ownership or executable tool calls can come from the model.
export const planSchema = z
  .object({
    tripName: z.string().trim().min(1).max(100),
    destination: z.string().trim().min(1).max(100),
    tripDescription: z.string().max(1000),
    assumptions: z.array(z.string().max(250)).max(6),
    days: z
      .array(
        z
          .object({
            date,
            description: z.string().max(300),
            activities: z.array(activity).max(4),
          })
          .strict(),
      )
      .min(1),
  })
  .strict();
export const confirmPlanSchema = z.object({ plan: planSchema }).strict();
export function validatePlanDates(plan, request) {
  const dates = tripDates(request.startDate, request.endDate);
  return (
    dates.length === plan.days.length &&
    plan.days.every((day, i) => day.date === dates[i])
  );
}

// Gemini receives the structural contract; all detailed bounds remain enforced by Zod.
// Regex/decimal and string bounds can exceed the provider's supported schema subset.
export const planJsonSchema = JSON.parse(
  JSON.stringify(z.toJSONSchema(planSchema), (key, value) =>
    [
      "$schema",
      "pattern",
      "multipleOf",
      "minLength",
      "maxLength",
      "minimum",
      "maximum",
      "minItems",
      "maxItems",
      "additionalProperties",
    ].includes(key)
      ? undefined
      : value,
  ),
);
