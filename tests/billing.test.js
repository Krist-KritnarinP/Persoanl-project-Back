import test from "node:test";
import assert from "node:assert/strict";
import { calculateBill } from "../src/billing/calculate.js";
import { distribute } from "../src/billing/money.js";
import { ledgerSummary, allocateSettlement } from "../src/billing/ledger.js";
const a = "00000000-0000-4000-8000-000000000001",
  b = "00000000-0000-4000-8000-000000000002",
  c = "00000000-0000-4000-8000-000000000003";
const members = [a, b, c].map((id) => ({ id }));
const equal = (ids = [a, b]) => ({
  mode: "equal",
  parts: ids.map((memberId) => ({ memberId })),
});
const bill = (amount = "1000", payments = [{ memberId: a, amount }]) => ({
  title: "Meal",
  date: "2026-09-28",
  lines: [{ name: "Food", amount, split: equal() }],
  charges: [],
  payments,
});
test("service + VAT + personal tip conserve satang; partial repayment does not change expense", () => {
  const input = bill("1000", [{ memberId: a, amount: "1227" }]);
  input.charges = [
    {
      kind: "service",
      type: "percent",
      value: "10",
      included: false,
      base: "items",
      split: equal(),
    },
    {
      kind: "vat",
      type: "percent",
      value: "7",
      included: false,
      base: "itemsService",
      split: equal(),
    },
    {
      kind: "tip",
      type: "amount",
      value: "50",
      included: false,
      base: "afterCharges",
      split: equal([a]),
    },
  ];
  const data = calculateBill(input, [a, b]);
  assert.equal(data.total, 122700);
  assert.deepEqual(data.shares, { [a]: 63850, [b]: 58850 });
  const saved = { id: "bill1", data, total: data.total };
  let summary = ledgerSummary(members, [saved], []);
  const allocated = allocateSettlement(
    { fromId: b, toId: a, amount: "200", billIds: ["bill1"] },
    summary,
  );
  summary = ledgerSummary(
    members,
    [saved],
    [{ fromId: b, toId: a, ...allocated }],
  );
  assert.equal(summary.total, 122700);
  assert.equal(summary.debts[0].remaining, 38850);
  assert.throws(() =>
    allocateSettlement(
      { fromId: b, toId: a, amount: "400", billIds: ["bill1"] },
      summary,
    ),
  );
});
test("included VAT/service/tip are extracted once; invalid compound inputs are rejected", () => {
  const input = bill("1070");
  input.charges = [
    {
      kind: "vat",
      type: "percent",
      value: "7",
      included: true,
      base: "items",
      split: equal(),
    },
  ];
  let data = calculateBill(input, [a, b]);
  assert.equal(data.total, 107000);
  assert.equal(data.charges[0].total, 7000);
  assert.equal(data.lines[0].total, 100000);
  const combined = bill("1277");
  combined.charges = [
    {
      kind: "service",
      type: "amount",
      value: "100",
      included: true,
      base: "items",
      split: equal(),
    },
    {
      kind: "vat",
      type: "percent",
      value: "7",
      included: true,
      base: "itemsService",
      split: equal(),
    },
    {
      kind: "tip",
      type: "amount",
      value: "100",
      included: true,
      base: "afterCharges",
      split: equal([a]),
    },
  ];
  data = calculateBill(combined, [a, b]);
  assert.equal(data.total, 127700);
  assert.equal(data.lines[0].total, 100000);
  assert.equal(data.charges[1].total, 7700);
  combined.charges[0].type = "percent";
  assert.throws(() => calculateBill(combined, [a, b]));
});
test("split modes and multiple payers preserve rounding and reject unknown members/incorrect sums", () => {
  assert.deepEqual(distribute(10000, { [c]: 1, [b]: 1, [a]: 1 }), {
    [a]: 3334,
    [b]: 3333,
    [c]: 3333,
  });
  for (const mode of ["amount", "percent", "weight"]) {
    const input = bill("100", [
      { memberId: a, amount: "60" },
      { memberId: b, amount: "40" },
    ]);
    input.lines[0].split = {
      mode,
      parts: [
        { memberId: a, value: mode === "weight" ? "3" : "75" },
        { memberId: b, value: mode === "weight" ? "1" : "25" },
      ],
    };
    const data = calculateBill(input, [a, b]);
    assert.equal(data.shares[a], 7500);
    assert.equal(data.debts[0].amount, 1500);
  }
  assert.throws(() => calculateBill(bill(), [a]));
  assert.throws(() =>
    calculateBill(bill("100", [{ memberId: a, amount: "99" }]), [a, b]),
  );
  assert.throws(() => calculateBill({ ...bill(), date: "2026-02-30" }, [a, b]));
});
test("settling B never clears C; new bills and reversal retain history", () => {
  const first = bill("900");
  first.lines[0].split = equal([a, b, c]);
  const data = calculateBill(first, [a, b, c]);
  const saved = { id: "one", data, total: data.total };
  const payment = {
    fromId: b,
    toId: a,
    amount: 30000,
    allocations: [{ billId: "one", amount: 30000 }],
  };
  const next = calculateBill(bill("120"), [a, b]);
  let state = ledgerSummary(
    members,
    [saved, { id: "two", data: next, total: next.total }],
    [payment],
  );
  assert.equal(state.members.find((m) => m.id === b).owed, 6000);
  assert.equal(state.members.find((m) => m.id === c).owed, 30000);
  state = ledgerSummary(members, [saved], [{ ...payment, reversed: true }]);
  assert.equal(state.members.find((m) => m.id === b).owed, 30000);
});

test('item participants, proportional charges and receipt checks do not charge excluded people', () => {
 const input = bill('300', [{memberId:a,amount:'330'}]);
 input.lines = [
  {name:'Food',amount:'200',split:equal([a,b])},
  {name:'Drink',amount:'100',split:equal([b])},
 ];
 input.charges = [{kind:'service',type:'percent',value:'10',included:false,base:'items',split:{mode:'proportional',parts:[]}}];
 input.receiptTotal='330';
 const data=calculateBill(input,[a,b,c]);
 assert.deepEqual(data.shares,{[a]:11000,[b]:22000});
 assert.equal(data.shares[c],undefined);
 assert.throws(()=>calculateBill({...input,receiptTotal:'331'},[a,b,c]));
 const bad=structuredClone(input);bad.lines[0].split=equal([a,a]);
 assert.throws(()=>calculateBill(bad,[a,b,c]));
});
