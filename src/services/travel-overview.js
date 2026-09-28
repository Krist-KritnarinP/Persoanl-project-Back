// Compact read model: never expose account data, share tokens or activity notes.
export function summarizeTravel(trip) {
  const days = trip.days || [];
  let cents = 0;
  let activityCount = 0;
  const points = [];
  for (const day of days) {
    for (const activity of day.activities || []) {
      activityCount++;
      const amount = Number(activity.price);
      if (Number.isFinite(amount) && amount > 0)
        cents += Math.round(amount * 100);
      const { latitude: lat, longitude: lng } = activity;
      if (
        Number.isFinite(lat) &&
        Math.abs(lat) <= 90 &&
        Number.isFinite(lng) &&
        Math.abs(lng) <= 180
      ) {
        points.push({
          id: activity.id,
          name: activity.locationName,
          lat,
          lng,
          date: activity.activityDate ?? day.dayDate,
        });
      }
    }
  }
  return {
    id: trip.id,
    tripName: trip.tripName,
    destination: trip.destination,
    startDate: trip.startDate ?? days[0]?.dayDate ?? null,
    endDate: trip.endDate ?? days.at(-1)?.dayDate ?? trip.startDate ?? null,
    totalCost: cents / 100,
    activityCount,
    points,
  };
}

export async function readTravelOverview(db, userId, page) {
  const trips = await db.trip.findMany({
    where: { userId: Number(userId) },
    take: 20,
    skip: (page - 1) * 20,
    orderBy: { id: "asc" },
    select: {
      id: true,
      tripName: true,
      destination: true,
      startDate: true,
      endDate: true,
      days: {
        orderBy: { dayCount: "asc" },
        select: {
          dayDate: true,
          activities: {
            select: {
              id: true,
              locationName: true,
              activityDate: true,
              price: true,
              latitude: true,
              longitude: true,
            },
          },
        },
      },
    },
  });
  return {
    data: trips.map(summarizeTravel),
    nextPage: trips.length === 20 ? page + 1 : null,
  };
}
