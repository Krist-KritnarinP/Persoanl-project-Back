import test from "node:test";
import assert from "node:assert/strict";
import { reserveAiQuota } from "../src/security/quotas.js";
test("only minute quota advertises a safe automatic retry delay", async () => {
  for (const minute of [true, false]) {
    const db = {
      $transaction: (fn) =>
        fn({
          $queryRaw: async () => {},
          aiUsage: {
            findUnique: async ({ where }) => ({
              count: minute
                ? where.key.startsWith("ai:minute:")
                  ? 2
                  : 0
                : 999999,
            }),
          },
        }),
    };
    await assert.rejects(
      reserveAiQuota(1, db, new Date("2026-09-27T12:00:15Z")),
      (e) =>
        e.status === 429 && e.retryAfterSeconds === (minute ? 45 : undefined),
    );
  }
});
