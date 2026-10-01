# Trip billing — implemented 2026-09-29

## Entry and scope
Open an owned trip → ค่าใช้จ่าย / หารบิล → `/trips/:tripId/billing`.
THB only, managed by the trip owner and accepted trip editors. Named participants do not need accounts and gain no access rights. Accepted viewers can read the ledger but cannot change it. This records expenses and repayments; it does not transfer money or verify bank slips. No AI calls.

## User flow
1. Add member names; rename/archive/restore. Members with no bill or repayment history can be removed; archive members who have history to keep old amounts and audit records intact.
2. Add a standalone bill or import an activity's name/date/price as editable defaults.
3. Add item lines; select participants per line. Split equally, exact amounts, percentages totaling 100, or weighted shares.
4. Optionally add service charge, VAT and tip. Choose amount/rate, calculation base and participants for each charge. Proportional allocation follows net item shares.
5. Choose one or several payers. Preview first; a sole payer can be assigned the full preview total. Recalculate after edits, then confirm.
6. Select debtor, creditor and one or several outstanding bills. Repay fully or partially. Review selected/remaining amount and confirm.
7. Reverse an incorrect repayment before changing or voiding affected bill amounts. Bills with no repayment history can be removed, including voided bills; bills with any repayment history remain for audit. Changes preserve audit events and old calculation snapshots.

## Calculation semantics
- Inputs use decimal strings with at most 2 decimal places. Server calculates in integer satang; rational products/division use BigInt.
- Largest-remainder allocation distributes leftover satang deterministically, with member ID as tie-breaker.
- Payments sum = shares sum = bill total. Duplicate participants/payers, unknown members, invalid dates, incorrect totals and overpayments are rejected.
- Service percentage base: net items. VAT base: net items or items + service. Tip base: before charges or after service/VAT.
- Included service/tip use an explicit amount; included percentages for these two are intentionally disabled. Included VAT supports amount or rate. Included charges are extracted before distributing net line amounts, never added twice.
- Exact line splits refer to net line amounts after included charges have been extracted. Percent/weight/equal are often easier with inclusive receipts.
- Optional receipt total must match; the service never silently changes it. Positive item value required; zero/negative bills and advance repayments are not supported.
- Rate ceiling 100%; maximum total 1,000,000,000 satang (10,000,000 THB). Max 100 members, 50 lines/bill, 500 historical bills and 5,000 mutation events/trip. Limits fail explicitly, not silently truncate.
- Per bill, net payer/share balances map deterministically to debtor→creditor obligations. Different bills/pairs are not silently offset or shuffled. Selecting all chooses all outstanding bills in the chosen direction, not a bank-wide net settlement.
- Repayment allocations identify the actual bills and amounts cleared. A later bill can create new debt for someone previously settled. Other members' debt is unaffected.
- Activity.price remains the old budget/recorded price. Confirmed bills and outstanding debt are separate fields in Travel Overview. Repayments do not increase trip expenses.

## Code map
- `src/billing/schema.js`: strict input allowlists/date/decimal validation.
- `money.js`: decimal parsing, rational rounding, equal/exact/percent/weighted allocation.
- `calculate.js`: line and charge breakdown, payments, shares and per-bill obligations. Preview permits incomplete payer totals; saving does not.
- `ledger.js`: bills + non-reversed repayment allocations → member totals and outstanding debts.
- `service.js`: owner checks, per-trip transaction lock, version checks, immutable application-level audit events and idempotency receipts.
- `src/routes/billing.routes.js`: mounted under authenticated `/:tripId/billing` in TripsRoute before generic detail route.
- Front `TripBilling.jsx`: workspace, members, filtering, bill/repayment history. `BillForm.jsx`: editable bill and server preview; `SplitEditor.jsx`: participant controls. Existing trip/account/session logic is reused.

API:
- GET `/api/trips/:tripId/billing`: owned ledger, balances and latest 100 audit events.
- POST `.../preview`: server calculation, no database mutation.
- POST `.../billing`: `requestId` UUID plus action: `member.add`, `member.update`, `member.remove`, `bill.save`, `bill.void`, `bill.remove`, `settlement.add`, `settlement.reverse`. `member.remove` requires ID/version; any reference in a bill snapshot (including voided bills) or repayment (including reversed repayments) returns 409 `MEMBER_HAS_BILLING_HISTORY`. `bill.remove` requires ID/version and rejects any repayment allocation, including reversed ones, with 409 `BILL_HAS_REPAYMENT_HISTORY`.
- Updates require ID and version. A reused requestId with the same parsed payload returns the original result; a different payload conflicts.

## Storage and privacy
New additive tables: trip_members, split_bills, split_settlements, billing_events. Bills store validated JSON calculation snapshots (input/line shares/charges/payers/debts), not arbitrary client totals. Repayment allocations and before/after audit snapshots preserve traceability.
All ledger reads and writes use the same per-trip PostgreSQL advisory transaction lock. Every operation checks authenticated ownership; member/activity/bill/settlement references are validated within the owned trip. Existing shared-trip response remains whitelisted and contains no billing data.
Account export includes owner billing records; account/trip deletion cascades to billing tables. Runtime role grants and RLS follow the existing backend-only database access pattern; no browser DB access is introduced.

## Setup / handoff checklist
- [x] Applied `npm run migrate:billing` to the currently configured database. Additive transaction only; existing trips unchanged. An initial SQL syntax error rolled back fully before corrected migration succeeded.
- [x] Regenerated the tracked Prisma client with `npx prisma generate`.
- [ ] On a DIFFERENT database/environment, run `npm run migrate:billing` with the configured migration credentials, then generate Prisma and restart API. Never paste secrets into frontend code.
- [ ] Restart an already running API if it has not picked up the new generated client/routes; refresh the frontend.
- [ ] User acceptance: add real group members and their first bill; no demo bills were seeded automatically.

## Verification
- API existing 35 tests + 5 billing tests passed (39 full-suite run before adding the fifth targeted test; all 5 billing tests then passed).
- Front 13 unit tests, production build passed; lint no errors, 8 warnings (7 existing + asynchronous billing-load effect warning).
- Browser billing flow desktop/mobile passed: activity import, charge preview, payer total, confirm, partial repayment, lock/reversal, 4 languages and no horizontal overflow. Sidebar tests also passed after brand/width changes.
- `node scripts/billing-smoke.js` passed against the configured DB using temporary accounts/trips that were deleted afterward: duplicate requests, concurrent overpayment and edit conflicts, cross-owner/cross-trip rejection, reversal, overview and public privacy.
- Browser tests use mocked HTTP responses; calculation/storage correctness is covered separately by pure tests and the real-DB smoke. No real bank/AI calls.
- Source diff checks pass excluding generated Prisma files, whose standard generator output contains trailing whitespace; do not manually refactor generated files.
