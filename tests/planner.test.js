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
  draftPlan,
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

test("planner accepts real dates only, ordered ranges without a seven-day cap", () => {
  assert.ok(plannerRequestSchema.safeParse(request).success);
  assert.ok(
    plannerRequestSchema.safeParse({ ...request, endDate: "2027-12-10" })
      .success,
  );
  for (const dates of [
    { startDate: "2026-02-30", endDate: "2026-03-01" },
    { endDate: "2026-12-09" },
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

test("long drafts resume after a quota failure, preserve days and report successful tokens", async () => {
  const oldKey = process.env.GEMINI_API_KEY;
  process.env.GEMINI_API_KEY = "test-only-key";
  let stored = null,
    calls = 0;
  const db = {
    aiMessage: {
      findFirst: async () => stored,
      create: async ({ data }) => (stored = { id: 81, ...data }),
      update: async ({ data }) => (stored = { ...stored, ...data }),
    },
  };
  const longRequest = { ...request, endDate: "2026-12-18" };
  const deps = {
    db,
    transact: (_, fn) => fn(db),
    reserve: async () => {},
    generate: async () => {
      calls++;
      if (calls === 2) throw Object.assign(new Error("quota"), { status: 429 });
      const dates = calls === 1 ? [10, 11, 12, 13, 14, 15, 16] : [17, 18];
      return {
        model: "stub",
        response: {
          text: JSON.stringify({
            ...fixture(),
            days: dates.map((d) => ({
              ...fixture().days[0],
              date: `2026-12-${d}`,
            })),
          }),
          usageMetadata: { totalTokenCount: 100 },
        },
      };
    },
  };
  try {
    const partial = await draftPlan(1, longRequest, deps);
    assert.equal(partial.complete, false);
    assert.equal(partial.plan.days.length, 7);
    await assert.rejects(draftPlan(1, longRequest, deps), { status: 429 });
    assert.equal(JSON.parse(stored.content).plan.days.length, 7);
    const full = await draftPlan(1, longRequest, deps);
    assert.equal(full.complete, true);
    assert.equal(full.plan.days.length, 9);
    assert.equal(full.tokens, 200);
    assert.equal(full.draftId, partial.draftId);
    assert.ok(validatePlanDates(full.plan, longRequest));
    const cached = await draftPlan(1, longRequest, deps);
    assert.equal(cached.cached, true);
    assert.equal(calls, 3);
  } finally {
    if (oldKey === undefined) delete process.env.GEMINI_API_KEY;
    else process.env.GEMINI_API_KEY = oldKey;
  }
});

test("language is validated and saved estimate labels follow the requested language", () => {
  assert.equal(plannerRequestSchema.parse(request).language, "th");
  assert.equal(
    plannerRequestSchema.safeParse({ ...request, language: "unknown" }).success,
    false,
  );
  for (const language of ["en", "zh", "ko"]) {
    const data = planTripData(1, { ...request, language }, fixture());
    assert.equal(/[ก-๙]/.test(data.tripDescription.split("\n")[1]), false);
  }
});

test("draft caches and provider prompts are separated by requested language", async () => {
  const oldKey = process.env.GEMINI_API_KEY;
  process.env.GEMINI_API_KEY = "test-only-key";
  const records = new Map(),
    prompts = [];
  const db = {
    aiMessage: {
      findFirst: async ({ where }) => records.get(where.prompt) || null,
      create: async ({ data }) => {
        const row = { id: records.size + 1, ...data };
        records.set(data.prompt, row);
        return row;
      },
    },
  };
  const deps = {
    db,
    transact: (_, fn) => fn(db),
    reserve: async () => {},
    generate: async (_ai, prompt) => {
      prompts.push(prompt);
      return { model: "stub", response: { text: JSON.stringify(fixture()) } };
    },
  };
  try {
    const english = await draftPlan(1, { ...request, language: "en" }, deps);
    const korean = await draftPlan(1, { ...request, language: "ko" }, deps);
    assert.notEqual(english.draftId, korean.draftId);
    assert.match(prompts[0], /draft in English/);
    assert.match(prompts[1], /draft in Korean/);
    assert.equal(
      (await draftPlan(1, { ...request, language: "en" }, deps)).cached,
      true,
    );
    assert.equal(prompts.length, 2);
  } finally {
    if (oldKey === undefined) delete process.env.GEMINI_API_KEY;
    else process.env.GEMINI_API_KEY = oldKey;
  }
});
