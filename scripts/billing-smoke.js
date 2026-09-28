// Creates isolated test accounts/trips and always deletes them. Never edits demo trips.
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { prisma } from "../src/lib/prisma.js";
import { billingCommand, billingRead } from "../src/billing/service.js";
import { getSharedTripService } from "../src/services/trips.service.js";
import { readTravelOverview } from "../src/services/travel-overview.js";
const users = [];
let trip;
try {
  for (let i = 0; i < 2; i++)
    users.push(
      await prisma.user.create({
        data: {
          username: "BillingSmoke",
          email: `billing-${randomUUID()}@example.invalid`,
          password: randomUUID(),
        },
      }),
    );
  trip = await prisma.trip.create({
    data: {
      userId: users[0].id,
      tripName: "Temporary billing smoke",
      shareToken: randomUUID().replaceAll("-", ""),
    },
  });
  const send = (payload) =>
    billingCommand(trip.id, users[0].id, {
      requestId: randomUUID(),
      ...payload,
    });
  const [a, b, c] = await Promise.all(
    ["A", "B", "C"].map((name) =>
      send({ action: "member.add", member: { name, active: true } }),
    ),
  );
  await assert.rejects(
    () => billingRead(trip.id, users[1].id),
    (e) => e.status === 404,
  );
  const bill = {
    title: "Dinner",
    date: "2026-09-28",
    lines: [
      {
        name: "Food",
        amount: "900",
        split: {
          mode: "equal",
          parts: [a, b, c].map((m) => ({ memberId: m.id })),
        },
      },
    ],
    charges: [],
    payments: [{ memberId: a.id, amount: "900" }],
  };
  const requestId = randomUUID();
  const [first, repeat] = await Promise.all([
    send({ action: "bill.save", bill, requestId }),
    send({ action: "bill.save", bill, requestId }),
  ]);
  assert.equal(first.id, repeat.id);
  assert.equal(await prisma.splitBill.count({ where: { tripId: trip.id } }), 1);
  await assert.rejects(
    () =>
      send({
        action: "bill.save",
        bill: { ...bill, title: "Different" },
        requestId,
      }),
    (e) => e.status === 409,
  );
  const settlement = {
    fromId: b.id,
    toId: a.id,
    amount: "200",
    date: "2026-09-28",
    billIds: [first.id],
  };
  const races = await Promise.allSettled([
    send({ action: "settlement.add", settlement }),
    send({ action: "settlement.add", settlement }),
  ]);
  assert.equal(races.filter((r) => r.status === "fulfilled").length, 1);
  assert.equal(races.filter((r) => r.status === "rejected").length, 1);
  let state = await billingRead(trip.id, users[0].id);
  assert.equal(state.summary.total, 90000);
  assert.equal(state.summary.members.find((m) => m.id === b.id).owed, 10000);
  assert.equal(state.summary.members.find((m) => m.id === c.id).owed, 30000);
  await assert.rejects(
    () => send({ action: "bill.save", id: first.id, version: 1, bill }),
    (e) => e.status === 409,
  );
  const paid = state.settlements[0];
  await send({
    action: "settlement.reverse",
    id: paid.id,
    version: paid.version,
  });
  const edits = await Promise.allSettled([
    send({
      action: "bill.save",
      id: first.id,
      version: 1,
      bill: { ...bill, title: "Edit one" },
    }),
    send({
      action: "bill.save",
      id: first.id,
      version: 1,
      bill: { ...bill, title: "Edit two" },
    }),
  ]);
  assert.equal(edits.filter((r) => r.status === "fulfilled").length, 1);
  const foreignTrip = await prisma.trip.create({
    data: {
      userId: users[1].id,
      tripName: "Other owner",
      days: {
        create: {
          dayCount: 1,
          activities: { create: { locationName: "Private" } },
        },
      },
    },
    include: { days: { include: { activities: true } } },
  });
  await assert.rejects(
    () =>
      send({
        action: "bill.save",
        bill: { ...bill, activityId: foreignTrip.days[0].activities[0].id },
      }),
    (e) => e.status === 400,
  );
  const overview = await readTravelOverview(prisma, users[0].id, 1);
  assert.equal(overview.data[0].billing.total, 90000);
  const shared = await getSharedTripService(trip.shareToken);
  assert.equal(shared.bills, undefined);
  assert.equal(shared.members, undefined);
  assert.equal(shared.settlements, undefined);
  state = await billingRead(trip.id, users[0].id);
  assert.ok(state.history.some((e) => e.action === "settlement.reverse"));
  console.log(
    "Billing DB smoke passed: exact totals, idempotency, concurrent repayments/edits, ownership, cross-trip activity, reversal, overview and public privacy.",
  );
} finally {
  for (const user of users)
    await prisma.user.delete({ where: { id: user.id } });
  await prisma.$disconnect();
}
