import { billSchema } from "./schema.js";
import { reject, units, roundRatio, distribute, split } from "./money.js";
const sum = (values) => Object.values(values).reduce((a, b) => a + b, 0);
export function calculateBill(input, memberIds, { preview = false } = {}) {
  const parsed = billSchema.safeParse(input);
  if (!parsed.success) reject("Invalid bill");
  const bill = parsed.data,
    members = new Set(memberIds);
  const charges = Object.fromEntries(bill.charges.map((c) => [c.kind, c]));
  if (Object.keys(charges).length !== bill.charges.length)
    reject("Duplicate charge");
  for (const c of bill.charges) {
    if (c.type === "percent" && units(c.value) > 10000)
      reject("Rate must not exceed 100%");
    if (c.included && c.type === "percent" && c.kind !== "vat")
      reject("Included service/tip must use amount");
    if (c.kind === "vat" && !["items", "itemsService"].includes(c.base))
      reject("Invalid VAT base");
    if (c.kind === "service" && c.base !== "items")
      reject("Invalid service base");
    if (c.kind === "tip" && !["beforeCharges", "afterCharges"].includes(c.base))
      reject("Invalid tip base");
  }
  const gross = bill.lines.reduce((n, l) => n + units(l.amount), 0);
  const includedFixed = bill.charges
    .filter((c) => c.included && c.type === "amount")
    .reduce((n, c) => n + units(c.value), 0);
  let itemBase = gross - includedFixed;
  if (itemBase < 0) reject("Included charges exceed receipt");
  const vat = charges.vat,
    service = charges.service;
  let includedVat = 0;
  if (vat?.included && vat.type === "percent") {
    const rate = units(vat.value);
    // Solve G=B+VAT(B+service), including a percentage service added outside G.
    const serviceRate =
      vat.base === "itemsService" &&
      service &&
      !service.included &&
      service.type === "percent"
        ? units(service.value)
        : 0;
    const serviceFixed =
      vat.base === "itemsService" && service && service.type === "amount"
        ? units(service.value)
        : 0;
    const denominator = 100000000 + rate * (10000 + serviceRate);
    const numerator =
      BigInt(itemBase) * 100000000n -
      BigInt(serviceFixed) * BigInt(rate) * 10000n;
    if (numerator < 0n) reject("Invalid included VAT base");
    const net = Number(
      (numerator * 2n + BigInt(denominator)) / (2n * BigInt(denominator)),
    );
    includedVat = itemBase - net;
    itemBase = net;
  }
  // Allocate the net item base back to lines before applying their participant splits.
  const lineTotals = distribute(
    itemBase,
    Object.fromEntries(bill.lines.map((l, i) => [String(i), units(l.amount)])),
  );
  const shares = {};
  const add = (allocation) => {
    for (const [id, n] of Object.entries(allocation))
      shares[id] = (shares[id] || 0) + n;
  };
  const lines = bill.lines.map((line, i) => {
    if (line.split.mode === "proportional") reject("Choose an item split");
    const allocation = split(lineTotals[i], line.split, members);
    add(allocation);
    return { ...line, total: lineTotals[i], shares: allocation };
  });
  const baseShares = { ...shares };
  const results = [];
  let serviceAmount = 0,
    vatAmount = 0;
  for (const kind of ["service", "vat", "tip"]) {
    const c = charges[kind];
    if (!c) continue;
    const base =
      kind === "service"
        ? itemBase
        : kind === "vat"
          ? itemBase + (c.base === "itemsService" ? serviceAmount : 0)
          : itemBase +
            (c.base === "afterCharges" ? serviceAmount + vatAmount : 0);
    const amount =
      c.type === "amount"
        ? units(c.value)
        : c.included
          ? includedVat
          : roundRatio(base, units(c.value), 10000);
    if (kind === "service") serviceAmount = amount;
    if (kind === "vat") vatAmount = amount;
    const allocation = split(amount, c.split, members, baseShares);
    add(allocation);
    results.push({ ...c, baseAmount: base, total: amount, shares: allocation });
  }
  const total = sum(shares);
  if (total <= 0 || total > 1000000000)
    reject("Bill total outside supported range");
  if (bill.receiptTotal !== undefined && units(bill.receiptTotal) !== total)
    reject("Receipt total does not match");
  const payments = {};
  for (const p of bill.payments) {
    if (!members.has(p.memberId) || payments[p.memberId] !== undefined)
      reject("Invalid payer");
    payments[p.memberId] = units(p.amount);
  }
  if (!preview && sum(payments) !== total)
    reject("Payments must equal bill total");
  const balances = (
    sum(payments) === total
      ? [...new Set([...Object.keys(shares), ...Object.keys(payments)])]
      : []
  )
    .sort()
    .map((id) => ({ id, amount: (payments[id] || 0) - (shares[id] || 0) }));
  const creditors = balances.filter((b) => b.amount > 0),
    debtors = balances.filter((b) => b.amount < 0);
  const debts = [];
  for (const debtor of debtors)
    for (const creditor of creditors) {
      const amount = Math.min(-debtor.amount, creditor.amount);
      if (amount <= 0) continue;
      debts.push({ fromId: debtor.id, toId: creditor.id, amount });
      debtor.amount += amount;
      creditor.amount -= amount;
    }
  return {
    input: bill,
    lines,
    charges: results,
    total,
    shares,
    payments,
    paymentTotal: sum(payments),
    debts,
  };
}
