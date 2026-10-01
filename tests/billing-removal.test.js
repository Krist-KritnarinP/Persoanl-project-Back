import test from "node:test";
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { billingCommand, memberHasBillingHistory } from "../src/billing/service.js";

const memberId = randomUUID();
const billId = randomUUID();
const member = { id: memberId, tripId: 1, name: "Guest", active: true, version: 1 };
const bill = { id: billId, tripId: 1, version: 1, voided: false, total: 100, data: { shares: { [memberId]: 100 }, payments: {}, debts: [] } };

function fakeDb({ members = [member], bills = [], settlements = [] } = {}) {
  const state = { members: [...members], bills: [...bills], settlements: [...settlements], events: [] };
  const tx = {
    $queryRaw: async () => [],
    trip: { findFirst: async () => ({ id: 1 }) },
    tripMember: {
      findMany: async () => state.members,
      delete: async ({ where }) => {
        const row = state.members.find((m) => m.id === where.id);
        state.members = state.members.filter((m) => m.id !== where.id);
        return row;
      },
    },
    splitBill: {
      findMany: async () => state.bills,
      delete: async ({ where }) => {
        const row = state.bills.find((b) => b.id === where.id);
        state.bills = state.bills.filter((b) => b.id !== where.id);
        return row;
      },
    },
    splitSettlement: { findMany: async () => state.settlements },
    billingEvent: {
      findUnique: async ({ where }) => state.events.find((e) => e.requestId === where.tripId_requestId.requestId),
      count: async () => state.events.length,
      create: async ({ data }) => { state.events.push(data); return data; },
    },
  };
  return { state, $transaction: async (callback) => callback(tx) };
}

test("unused billing member can be removed with an audit receipt and idempotent retry", async () => {
  const db = fakeDb();
  const command = { requestId: randomUUID(), action: "member.remove", id: memberId, version: 1 };
  const removed = await billingCommand(1, 1, command, db);
  assert.equal(removed.id, memberId);
  assert.equal(db.state.members.length, 0);
  assert.equal(db.state.events[0].action, "member.remove");
  assert.deepEqual(await billingCommand(1, 1, command, db), removed);
  assert.equal(db.state.events.length, 1);
});

test("bill snapshots and reversed repayments protect member history", async () => {
  assert.equal(memberHasBillingHistory(memberId, [{ ...bill, voided: true }], []), true);
  const db = fakeDb({ bills: [{ ...bill, voided: true }] });
  await assert.rejects(
    billingCommand(1, 1, { requestId: randomUUID(), action: "member.remove", id: memberId, version: 1 }, db),
    { status: 409, code: "MEMBER_HAS_BILLING_HISTORY" },
  );
  assert.equal(db.state.members.length, 1);
  assert.equal(db.state.events.length, 0);
  assert.equal(memberHasBillingHistory(memberId, [], [{ fromId: memberId, toId: randomUUID(), reversed: true }]), true);
});

test("unpaid bill can be removed, but repayment history blocks deletion", async () => {
  const db = fakeDb({ bills: [bill] });
  const command = { requestId: randomUUID(), action: "bill.remove", id: billId, version: 1 };
  const removed = await billingCommand(1, 1, command, db);
  assert.equal(removed.id, billId);
  assert.equal(db.state.bills.length, 0);
  assert.equal(db.state.events[0].action, "bill.remove");
  const repaid = fakeDb({ bills: [bill], settlements: [{ fromId: memberId, toId: randomUUID(), reversed: true, allocations: [{ billId, amount: 100 }] }] });
  await assert.rejects(billingCommand(1, 1, { ...command, requestId: randomUUID() }, repaid), {
    status: 409, code: "BILL_HAS_REPAYMENT_HISTORY",
  });
  assert.equal(repaid.state.bills.length, 1);
});
