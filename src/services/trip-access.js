import createError from "http-errors";

export function tripAccessWhere(userId, role) {
  return {
    OR: [
      { userId: Number(userId) },
      {
        collaborators: {
          some: {
            userId: Number(userId),
            status: "accepted",
            ...(role ? { role } : {}),
          },
        },
      },
    ],
  };
}

export async function requireTripAccess(db, tripId, userId, role) {
  const trip = await db.trip.findFirst({
    where: { id: Number(tripId), ...tripAccessWhere(userId, role) },
    select: { id: true },
  });
  if (!trip) throw createError(404, "Trip not found");
  return trip;
}

export async function requireTripOwner(db, tripId, userId) {
  const trip = await db.trip.findFirst({
    where: { id: Number(tripId), userId: Number(userId) },
    select: { id: true },
  });
  if (!trip) throw createError(404, "Trip not found");
  return trip;
}
