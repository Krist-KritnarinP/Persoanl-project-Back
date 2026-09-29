import test from "node:test";
import assert from "node:assert/strict";
import {
  summarizeTravel,
  readTravelOverview,
} from "../src/services/travel-overview.js";
test("overview totals decimal prices, excludes invalid coordinates and private fields", () => {
  const result = summarizeTravel({
    id: 2,
    shareToken: "secret",
    userId: 9,
    days: [
      {
        dayDate: "2026-01-01",
        activities: [
          {
            id: 1,
            price: "0.10",
            latitude: 0,
            longitude: 0,
            description: "private",
          },
          { id: 2, price: "0.20", latitude: null, longitude: null },
          { id: 3, price: "20.50", latitude: 91, longitude: 0 },
        ],
      },
    ],
  });
  assert.equal(result.totalCost, 20.8);
  assert.equal(result.points.length, 1);
  assert.equal(result.startDate, "2026-01-01");
  assert.doesNotMatch(JSON.stringify(result), /secret|private|userId/);
});
test("overview query scopes to authenticated owner with bounded pagination", async () => {
  let query;
  const db = {
    trip: {
      findMany: async (q) => {
        query = q;
        return [];
      },
    },
  };
  assert.deepEqual(await readTravelOverview(db, 7, 2), {
    data: [],
    nextPage: null,
  });
  assert.ok(query.where.OR.some((entry) => entry.userId === 7));
  assert.ok(query.where.OR.some((entry) => entry.collaborators?.some?.userId === 7));
  assert.equal(query.take, 20);
  assert.equal(query.skip, 20);
  assert.equal(query.select.shareToken, undefined);
});
