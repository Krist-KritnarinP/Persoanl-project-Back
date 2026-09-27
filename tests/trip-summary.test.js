import test from 'node:test';
import assert from 'node:assert/strict';
import { summarizeTrip } from '../src/services/trip-summary.js';

test('trip responses preserve explicit dates and source fields without mutating the input', () => {
  const days = Object.freeze([{ dayDate: '2026-10-02' }, { dayDate: '2026-10-03' }]);
  const trip = Object.freeze({ id: 4, tripName: 'Original', startDate: '2026-10-01', endDate: '2026-10-06', days, extra: 'preserved' });
  assert.deepEqual(summarizeTrip(trip), { ...trip, totalDays: 2 });
  assert.equal(summarizeTrip(trip).days, days);
  assert.equal(Object.hasOwn(trip, 'totalDays'), false);
});
test('fallback follows the supplied day order and keeps legacy null/empty semantics', () => {
  assert.deepEqual(summarizeTrip({ days: [] }), { days: [], startDate: null, endDate: null, totalDays: 0 });
  const days = [{ dayDate: '2026-10-03' }, { dayDate: null }, { dayDate: '2026-10-01' }];
  const response = summarizeTrip({ days, startDate: null, endDate: null });
  assert.equal(response.startDate, '2026-10-03');
  assert.equal(response.endDate, '2026-10-01');
  assert.equal(summarizeTrip({ days, startDate: '', endDate: '' }).startDate, '');
});
