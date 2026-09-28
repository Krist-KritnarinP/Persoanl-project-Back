import { z } from "zod";
const id = z.string().uuid();
const decimal = z.string().regex(/^\d{1,7}(\.\d{1,2})?$/);
const date = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/)
  .refine((v) => {
    const d = new Date(v);
    return Number.isFinite(d.getTime()) && d.toISOString().slice(0, 10) === v;
  });
const part = z.object({ memberId: id, value: decimal.optional() }).strict();
export const splitSchema = z
  .object({
    mode: z.enum(["equal", "amount", "percent", "weight", "proportional"]),
    parts: z.array(part).max(100).default([]),
  })
  .strict();
const charge = z
  .object({
    kind: z.enum(["service", "vat", "tip"]),
    type: z.enum(["amount", "percent"]),
    value: decimal,
    included: z.boolean(),
    base: z.enum(["items", "itemsService", "beforeCharges", "afterCharges"]),
    split: splitSchema,
  })
  .strict();
export const billSchema = z
  .object({
    title: z.string().trim().min(1).max(150),
    date,
    activityId: z.number().int().positive().nullable().default(null),
    lines: z
      .array(
        z
          .object({
            name: z.string().trim().min(1).max(150),
            amount: decimal,
            split: splitSchema,
          })
          .strict(),
      )
      .min(1)
      .max(50),
    charges: z.array(charge).max(3),
    payments: z
      .array(z.object({ memberId: id, amount: decimal }).strict())
      .min(1)
      .max(100),
    receiptTotal: decimal.optional(),
  })
  .strict();
export const commandSchema = z
  .object({
    requestId: id,
    action: z.enum([
      "member.add",
      "member.update",
      "bill.save",
      "bill.void",
      "settlement.add",
      "settlement.reverse",
    ]),
    id: id.optional(),
    version: z.number().int().positive().optional(),
    member: z
      .object({
        name: z.string().trim().min(1).max(80),
        active: z.boolean().default(true),
      })
      .strict()
      .optional(),
    bill: billSchema.optional(),
    settlement: z
      .object({
        fromId: id,
        toId: id,
        amount: decimal,
        date,
        billIds: z.array(id).min(1).max(200),
      })
      .strict()
      .optional(),
  })
  .strict();
