import test from "node:test";
import assert from "node:assert/strict";
import {
  plannerRequestSchema,
  planSchema,
  validatePlanDates,
} from "../src/validations/planner.js";
import {
  parseGeneratedPlan,
  planTripData,
  confirmPlan,
} from "../src/services/planner.service.js";

const request = {
  requirements: "เที่ยวเชียงใหม่ ชอบคาเฟ่",
  startDate: "2026-12-10",
  endDate: "2026-12-10",
};
const fixture = () => ({
  tripName: "เชียงใหม่",
  destination: "เชียงใหม่",
  tripDescription: "พักผ่อน",
  assumptions: ["1 คน"],
  days: [
    {
      date: request.startDate,
      description: "เที่ยวในเมือง",
      activities: [
        {
          activityType: "ATTRACTION",
          locationName: "วัดพระสิงห์ เชียงใหม่",
          time: "09:30",
          price: 20.5,
          description: "เดินเที่ยว",
        },
      ],
    },
  ],
});

test("planner accepts real dates only, ordered ranges and at most seven days", () => {
  assert.ok(plannerRequestSchema.safeParse(request).success);
  for (const dates of [
    { startDate: "2026-02-30", endDate: "2026-03-01" },
    { endDate: "2026-12-09" },
    { endDate: "2026-12-17" },
  ])
    assert.equal(
      plannerRequestSchema.safeParse({ ...request, ...dates }).success,
      false,
    );
});
test("provider output must be complete JSON and match each selected date", () => {
  assert.deepEqual(
    parseGeneratedPlan(JSON.stringify(fixture()), request),
    fixture(),
  );
  for (const text of [
    "not json",
    JSON.stringify({ ...fixture(), days: [] }),
    JSON.stringify({
      ...fixture(),
      days: [{ ...fixture().days[0], date: "2026-12-11" }],
    }),
  ])
    assert.throws(() => parseGeneratedPlan(text, request), { status: 502 });
});
test("no injected ownership, coordinates, invalid times or prices enter a draft", () => {
  for (const patch of [
    { latitude: 1 },
    { userId: 2 },
    { time: "25:00" },
    { price: -1 },
    { price: 1.001 },
  ]) {
    const plan = fixture();
    Object.assign(plan.days[0].activities[0], patch);
    assert.equal(planSchema.safeParse(plan).success, false);
  }
  assert.equal(
    validatePlanDates(fixture(), { ...request, endDate: "2026-12-11" }),
    false,
  );
});
test("nested creation preserves UTC wall time and leaves geocoding to the existing map", () => {
  const data = planTripData(2, request, fixture());
  assert.equal(data.userId, 2);
  const activity = data.days.create[0].activities.create[0];
  assert.equal(activity.activityTime.toISOString(), "1970-01-01T09:30:00.000Z");
  assert.equal(activity.latitude, undefined);
  assert.match(data.tripDescription, /ประมาณการ/);
});
test("confirmation refuses other owners and returns an existing receipt without another insert", async () => {
  await assert.rejects(
    confirmPlan(2, 1, fixture(), (_, work) =>
      work({
        aiMessage: {
          findFirst: async ({ where }) => {
            assert.equal(where.userId, 2);
            return null;
          },
        },
      }),
    ),
    { status: 404 },
  );
  const result = await confirmPlan(1, 1, fixture(), (_, work) =>
    work({ aiMessage: { findFirst: async () => ({ tripId: 88 }) } }),
  );
  assert.deepEqual(result, { id: 88, replayed: true });
});
