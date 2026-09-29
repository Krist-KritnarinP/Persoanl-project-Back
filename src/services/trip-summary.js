/**
 * Add display dates and day count to an authorized trip response.
 * Explicit trip dates win; fallback follows the existing day order, not a new date sort.
 * Does not mutate the Prisma result or strip any response fields.
 */
export function summarizeTrip(trip) {
  const days = trip.days;
  const totalDays = days.length;
  const startDate = trip.startDate ?? (totalDays > 0 ? days[0].dayDate : null);
  const endDate =
    trip.endDate ?? (totalDays > 0 ? days[totalDays - 1].dayDate : null);
  return { ...trip, startDate, endDate, totalDays };
}
