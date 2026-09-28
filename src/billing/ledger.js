import { reject, units } from "./money.js";
export function ledgerSummary(members, bills, settlements) {
  const rows = Object.fromEntries(
    members.map((m) => [
      m.id,
      { ...m, paid: 0, share: 0, sent: 0, received: 0, owed: 0, receivable: 0 },
    ]),
  );
  const debts = [];
  let total = 0;
  for (const bill of bills.filter((b) => !b.voided)) {
    total += bill.total;
    for (const [id, n] of Object.entries(bill.data.payments))
      rows[id].paid += n;
    for (const [id, n] of Object.entries(bill.data.shares)) rows[id].share += n;
    for (const d of bill.data.debts)
      debts.push({
        ...d,
        billId: bill.id,
        title: bill.title,
        remaining: d.amount,
      });
  }
  for (const s of settlements.filter((s) => !s.reversed)) {
    rows[s.fromId].sent += s.amount;
    rows[s.toId].received += s.amount;
    for (const allocation of s.allocations) {
      const debt = debts.find(
        (d) =>
          d.billId === allocation.billId &&
          d.fromId === s.fromId &&
          d.toId === s.toId,
      );
      if (!debt || allocation.amount > debt.remaining)
        reject("Inconsistent ledger", 409);
      debt.remaining -= allocation.amount;
    }
  }
  for (const d of debts) {
    rows[d.fromId].owed += d.remaining;
    rows[d.toId].receivable += d.remaining;
  }
  return { currency: "THB", total, members: Object.values(rows), debts };
}
export function allocateSettlement(input, summary) {
  const amount = units(input.amount);
  if (
    input.fromId === input.toId ||
    amount <= 0 ||
    new Set(input.billIds).size !== input.billIds.length
  )
    reject("Invalid settlement");
  const candidates = summary.debts.filter(
    (d) =>
      d.fromId === input.fromId &&
      d.toId === input.toId &&
      input.billIds.includes(d.billId) &&
      d.remaining > 0,
  );
  if (input.billIds.some((id) => !candidates.some((d) => d.billId === id)))
    reject("Bill does not have this outstanding debt");
  if (candidates.reduce((n, d) => n + d.remaining, 0) < amount)
    reject("Repayment exceeds outstanding amount");
  let left = amount;
  const allocations = [];
  for (const d of candidates) {
    const n = Math.min(left, d.remaining);
    if (n) allocations.push({ billId: d.billId, amount: n });
    left -= n;
  }
  return { amount, allocations };
}
