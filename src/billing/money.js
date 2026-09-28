import createError from "http-errors";
export const reject = (message = "Invalid billing input", status = 400) => {
  throw createError(status, message);
};
export function units(value) {
  if (typeof value !== "string" || !/^\d{1,7}(\.\d{1,2})?$/.test(value))
    reject("Use a positive decimal with at most two places");
  const [whole, fraction = ""] = value.split(".");
  return Number(whole) * 100 + Number(fraction.padEnd(2, "0"));
}
export const roundRatio = (amount, numerator, denominator) =>
  Number(
    (BigInt(amount) * BigInt(numerator) * 2n + BigInt(denominator)) /
      (2n * BigInt(denominator)),
  );
// Largest remainder; member ID breaks ties consistently, independent of input ordering.
export function distribute(total, weights) {
  const entries = Object.entries(weights).sort(([a], [b]) =>
    a.localeCompare(b),
  );
  const sum = entries.reduce((n, [, w]) => n + w, 0);
  if (!entries.length || sum <= 0) reject("Select participants");
  const rows = entries.map(([id, w]) => ({
    id,
    value: Number((BigInt(total) * BigInt(w)) / BigInt(sum)),
    remainder: (BigInt(total) * BigInt(w)) % BigInt(sum),
  }));
  let left = total - rows.reduce((n, r) => n + r.value, 0);
  const order = [...rows].sort((a, b) =>
    a.remainder === b.remainder
      ? a.id.localeCompare(b.id)
      : a.remainder > b.remainder
        ? -1
        : 1,
  );
  for (let i = 0; i < left; i++) order[i].value++;
  return Object.fromEntries(rows.map((r) => [r.id, r.value]));
}
export function split(total, spec, members, proportional) {
  if (spec.mode === "proportional") {
    if (!proportional) reject("No proportional base");
    return distribute(total, proportional);
  }
  const entries = spec.parts;
  if (
    !entries?.length ||
    new Set(entries.map((p) => p.memberId)).size !== entries.length
  )
    reject("Duplicate or missing participant");
  const weights = {};
  for (const part of entries) {
    if (!members.has(part.memberId)) reject("Member not in this trip");
    weights[part.memberId] = spec.mode === "equal" ? 1 : units(part.value);
  }
  const sum = Object.values(weights).reduce((a, b) => a + b, 0);
  if (spec.mode === "amount") {
    if (sum !== total) reject("Shares must equal the amount");
    return weights;
  }
  if (spec.mode === "percent" && sum !== 10000)
    reject("Percentages must total 100");
  return distribute(total, weights);
}
