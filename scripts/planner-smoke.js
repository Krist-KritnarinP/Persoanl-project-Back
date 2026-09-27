// Run only against a disposable local database; never against the user's demo data.
import "dotenv/config";
import assert from "node:assert/strict";
import { prisma } from "../src/lib/prisma.js";
import { confirmPlan, draftPlan } from "../src/services/planner.service.js";
import {
  getAiHistoryService,
  deleteAiMessageService,
} from "../src/services/ai.service.js";
const target = new URL(process.env.DATABASE_URL);
if (
  !["localhost", "127.0.0.1"].includes(target.hostname) ||
  !target.pathname.endsWith("_test")
)
  throw Error("Requires disposable loopback *_test database");
const request = {
  requirements: "เชียงใหม่ 1 วัน",
  startDate: "2026-12-10",
  endDate: "2026-12-10",
};
const plan = {
  tripName: "Smoke draft",
  destination: "เชียงใหม่",
  tripDescription: "ทดสอบ",
  assumptions: ["1 คน"],
  days: [
    {
      date: request.startDate,
      description: "เที่ยว",
      activities: [
        {
          activityType: "ATTRACTION",
          locationName: "วัดพระสิงห์ เชียงใหม่",
          time: "09:30",
          price: 100,
          description: "เดิน",
        },
      ],
    },
  ],
};
let user;
try {
  user = await prisma.user.create({
    data: {
      username: "PlannerSmoke",
      email: `planner-${Date.now()}@example.invalid`,
      password: "not-a-real-password",
    },
  });
  if (process.argv.includes("--live-ai")) {
    try {
      const generated = await draftPlan(user.id, request);
      assert.equal(generated.plan.days.length, 1);
      assert.ok(generated.plan.days[0].activities.length > 0);
      assert.equal(await prisma.trip.count({ where: { userId: user.id } }), 0);
      const cached = await draftPlan(user.id, request);
      assert.equal(cached.draftId, generated.draftId);
      assert.equal(cached.cached, true);
      console.log(
        "PASS live Gemini: valid draft and cache, no trip until confirmation.",
      );
    } catch (error) {
      console.log(
        `LIVE GEMINI CHECK FAILED: status ${error.status || "unknown"}; providerStatus ${error.cause?.status || "unknown"}, type ${error.cause?.name || "unknown"}; provider details withheld.`,
      );
      process.exitCode = 1;
    }
  }
  const draft = await prisma.aiMessage.create({
    data: {
      userId: user.id,
      kind: "PLAN",
      content: JSON.stringify({ request, plan }),
    },
  });
  assert.equal(await prisma.trip.count({ where: { userId: user.id } }), 0);
  await assert.rejects(confirmPlan(user.id + 1, draft.id, plan), {
    status: 404,
  });
  const invalid = structuredClone(plan);
  invalid.days[0].date = "2026-12-11";
  await assert.rejects(confirmPlan(user.id, draft.id, invalid), {
    status: 400,
  });
  // Force failure after nested creation to verify real PostgreSQL rollback.
  await assert.rejects(
    confirmPlan(user.id, draft.id, plan, (_, work) =>
      prisma.$transaction(async (tx) => {
        await work(tx);
        throw Error("simulated transaction failure");
      }),
    ),
    /simulated/,
  );
  assert.equal(await prisma.trip.count({ where: { userId: user.id } }), 0);
  assert.equal(
    (await prisma.aiMessage.findUnique({ where: { id: draft.id } })).tripId,
    null,
  );
  const results = await Promise.all(
    Array.from({ length: 5 }, () => confirmPlan(user.id, draft.id, plan)),
  );
  assert.equal(new Set(results.map((r) => r.id)).size, 1);
  assert.equal(results.filter((r) => !r.replayed).length, 1);
  assert.equal(await prisma.trip.count({ where: { userId: user.id } }), 1);
  const trip = await prisma.trip.findUnique({
    where: { id: results[0].id },
    include: { days: { include: { activities: true } } },
  });
  assert.equal(
    trip.days[0].activities[0].activityTime.toISOString(),
    "1970-01-01T09:30:00.000Z",
  );
  assert.equal(trip.days[0].activities[0].latitude, null);
  assert.deepEqual(await getAiHistoryService(trip.id, user.id), []);
  assert.equal(await deleteAiMessageService(draft.id, user.id), null);
  console.log(
    "PASS planner: ownership, dates, rollback, five concurrent confirmations create one trip, wall time, no AI coordinates, weather isolation. Persistence checks do not call the provider.",
  );
} finally {
  if (user) await prisma.user.delete({ where: { id: user.id } });
  await prisma.$disconnect();
}
