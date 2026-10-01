import { createHash } from "node:crypto";
import { prisma } from "../lib/prisma.js";
import { commandSchema } from "./schema.js";
import { calculateBill } from "./calculate.js";
import { allocateSettlement, ledgerSummary } from "./ledger.js";
import { reject } from "./money.js";
import { requireTripAccess } from "../services/trip-access.js";
export function memberHasBillingHistory(memberId, bills, settlements) {
  return bills.some((bill) => JSON.stringify(bill.data).includes(memberId)) ||
    settlements.some((settlement) =>
      settlement.fromId === memberId || settlement.toId === memberId
    );
}
async function snapshot(tx, tripId) {
  const members = await tx.tripMember.findMany({
    where: { tripId },
    orderBy: { id: "asc" },
  });
  const bills = await tx.splitBill.findMany({
    where: { tripId },
    orderBy: [{ createdAt: "asc" }, { id: "asc" }],
  });
  const settlements = await tx.splitSettlement.findMany({
    where: { tripId },
    orderBy: [{ createdAt: "asc" }, { id: "asc" }],
  });
  return {
    members,
    bills,
    settlements,
    summary: ledgerSummary(members, bills, settlements),
  };
}
// Serialize reads and mutations on the same trip for a consistent ledger snapshot.
export async function billingRead(tripId, userId, db = prisma) {
  return db.$transaction(async (tx) => {
    await tx.$queryRaw`SELECT pg_advisory_xact_lock(914209, ${tripId}::integer)::text`;
    await requireTripAccess(tx, tripId, userId);
    const data = await snapshot(tx, tripId);
    const history = await tx.billingEvent.findMany({
      where: { tripId },
      orderBy: { createdAt: "desc" },
      take: 100,
      select: {
        id: true,
        action: true,
        createdAt: true,
        before: true,
        result: true,
      },
    });
    return { ...data, history };
  });
}
export async function billingPreview(tripId, userId, input, db = prisma) {
  await requireTripAccess(db, tripId, userId);
  const members = await db.tripMember.findMany({
    where: { tripId, active: true },
    select: { id: true },
  });
  return calculateBill(
    input,
    members.map((m) => m.id),
    { preview: true },
  );
}
export async function billingCommand(tripId, userId, raw, db = prisma) {
  const parsed = commandSchema.safeParse(raw);
  if (!parsed.success) reject("Invalid billing command");
  const c = parsed.data;
  const fingerprint = createHash("sha256")
    .update(JSON.stringify(c))
    .digest("hex");
  return db.$transaction(
    async (tx) => {
      await tx.$queryRaw`SELECT pg_advisory_xact_lock(914209, ${tripId}::integer)::text`;
      await requireTripAccess(tx, tripId, userId, "editor");
      const receipt = await tx.billingEvent.findUnique({
        where: { tripId_requestId: { tripId, requestId: c.requestId } },
      });
      if (receipt) {
        if (receipt.fingerprint !== fingerprint)
          reject("Request ID already used", 409);
        return receipt.result;
      }
      if ((await tx.billingEvent.count({ where: { tripId } })) >= 5000)
        reject("Ledger event limit reached", 429);
      const data = await snapshot(tx, tripId);
      let result,
        before = null;
      const current = (rows) => {
        const row = rows.find((r) => r.id === c.id);
        if (!row) reject("Record not found", 404);
        if (row.version !== c.version)
          reject("Record changed; reload first", 409);
        return row;
      };
      if (c.action === "member.add") {
        if (!c.member || data.members.length >= 100)
          reject("Invalid member or member limit");
        result = await tx.tripMember.create({ data: { tripId, ...c.member } });
      } else if (c.action === "member.update") {
        if (!c.member) reject();
        before = current(data.members);
        result = await tx.tripMember.update({
          where: { id: before.id },
          data: { ...c.member, version: { increment: 1 } },
        });
      } else if (c.action === "member.remove") {
        before = current(data.members);
        if (memberHasBillingHistory(before.id, data.bills, data.settlements)) {
          const error = new Error("Member has billing history");
          error.status = 409;
          error.code = "MEMBER_HAS_BILLING_HISTORY";
          throw error;
        }
        result = await tx.tripMember.delete({ where: { id: before.id } });
      } else if (c.action === "bill.save" || c.action === "bill.void" || c.action === "bill.remove") {
        if (c.id) {
          before = current(data.bills);
          if (before.voided && c.action !== "bill.remove") reject("Bill is void", 409);
          if (c.action === "bill.remove" && data.settlements.some(
            (s) => s.allocations.some((a) => a.billId === c.id),
          )) {
            const error = new Error("Bill has repayment history");
            error.status = 409;
            error.code = "BILL_HAS_REPAYMENT_HISTORY";
            throw error;
          }
          if (
            c.action !== "bill.remove" &&
            data.settlements.some(
              (s) =>
                !s.reversed && s.allocations.some((a) => a.billId === c.id),
            )
          )
            reject("Reverse repayments before changing this bill", 409);
        } else if (c.action !== "bill.save") reject();
        if (c.action === "bill.remove")
          result = await tx.splitBill.delete({ where: { id: c.id } });
        else if (c.action === "bill.void")
          result = await tx.splitBill.update({
            where: { id: c.id },
            data: { voided: true, version: { increment: 1 } },
          });
        else {
          if (!c.bill) reject();
          const calculated = calculateBill(
            c.bill,
            data.members.filter((m) => m.active).map((m) => m.id),
          );
          if (
            c.bill.activityId &&
            !(await tx.activity.findFirst({
              where: { id: c.bill.activityId, day: { tripId } },
              select: { id: true },
            }))
          )
            reject("Activity not in this trip");
          const values = {
            title: c.bill.title,
            date: c.bill.date,
            activityId: c.bill.activityId,
            total: calculated.total,
            data: calculated,
          };
          if (before)
            result = await tx.splitBill.update({
              where: { id: before.id },
              data: { ...values, version: { increment: 1 } },
            });
          else {
            if (data.bills.length >= 500) reject("Bill limit reached", 429);
            result = await tx.splitBill.create({ data: { tripId, ...values } });
          }
        }
      } else if (c.action === "settlement.add") {
        if (
          !c.settlement ||
          !data.members.some((m) => m.id === c.settlement.fromId) ||
          !data.members.some((m) => m.id === c.settlement.toId)
        )
          reject("Invalid settlement members");
        const allocated = allocateSettlement(c.settlement, data.summary);
        result = await tx.splitSettlement.create({
          data: {
            tripId,
            fromId: c.settlement.fromId,
            toId: c.settlement.toId,
            date: c.settlement.date,
            ...allocated,
          },
        });
      } else {
        before = current(data.settlements);
        if (before.reversed) reject("Already reversed", 409);
        result = await tx.splitSettlement.update({
          where: { id: before.id },
          data: { reversed: true, version: { increment: 1 } },
        });
      }
      // Store JSON-safe snapshots as an immutable audit record and idempotency receipt.
      const json = (value) => JSON.parse(JSON.stringify(value));
      await tx.billingEvent.create({
        data: {
          tripId,
          actorId: userId,
          requestId: c.requestId,
          fingerprint,
          action: c.action,
          ...(before ? { before: json(before) } : {}),
          result: json(result),
        },
      });
      return result;
    },
    { timeout: 15000 },
  );
}
