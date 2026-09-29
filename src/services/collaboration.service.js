import createError from "http-errors";
import { prisma } from "../lib/prisma.js";
import { requireTripOwner } from "./trip-access.js";

const collaboratorSelect = {
  userId: true,
  role: true,
  status: true,
  createdAt: true,
  user: { select: { username: true, email: true } },
};

export async function listCollaborators(tripId, actorId, db = prisma) {
  await requireTripOwner(db, tripId, actorId);
  return db.tripCollaborator.findMany({
    where: { tripId: Number(tripId) },
    orderBy: [{ status: "asc" }, { createdAt: "asc" }],
    select: collaboratorSelect,
  });
}

export async function inviteCollaborator(tripId, actorId, email, role, db = prisma) {
  await requireTripOwner(db, tripId, actorId);
  const user = await db.user.findUnique({
    where: { email },
    select: { id: true },
  });
  if (!user) throw createError(404, "Account not found");
  if (user.id === Number(actorId)) throw createError(400, "Owner is already a trip member");

  const current = await db.tripCollaborator.findUnique({
    where: { tripId_userId: { tripId: Number(tripId), userId: user.id } },
  });
  if (current?.status === "accepted")
    throw createError(409, "User already joined this trip");
  if (!current && (await db.tripCollaborator.count({ where: { tripId: Number(tripId) } })) >= 100)
    throw createError(429, "Trip collaborator limit reached");

  return db.tripCollaborator.upsert({
    where: { tripId_userId: { tripId: Number(tripId), userId: user.id } },
    create: { tripId: Number(tripId), userId: user.id, role, status: "pending" },
    update: { role, status: "pending", updatedAt: new Date() },
    select: collaboratorSelect,
  });
}

export async function removeCollaborator(tripId, actorId, userId, db = prisma) {
  await requireTripOwner(db, tripId, actorId);
  const result = await db.tripCollaborator.deleteMany({
    where: { tripId: Number(tripId), userId: Number(userId) },
  });
  if (!result.count) throw createError(404, "Collaborator not found");
}

export async function listInvitations(userId, db = prisma) {
  return db.tripCollaborator.findMany({
    where: { userId: Number(userId), status: "pending" },
    orderBy: { createdAt: "desc" },
    select: {
      tripId: true,
      role: true,
      createdAt: true,
      trip: {
        select: {
          tripName: true,
          destination: true,
          user: { select: { username: true } },
        },
      },
    },
  });
}

export async function respondToInvitation(tripId, userId, accepted, db = prisma) {
  const result = await db.tripCollaborator.updateMany({
    where: { tripId: Number(tripId), userId: Number(userId), status: "pending" },
    data: { status: accepted ? "accepted" : "declined" },
  });
  if (!result.count) throw createError(404, "Invitation not found");
  return { tripId: Number(tripId), status: accepted ? "accepted" : "declined" };
}

export async function leaveTrip(tripId, userId, db = prisma) {
  const result = await db.tripCollaborator.deleteMany({
    where: { tripId: Number(tripId), userId: Number(userId), status: "accepted" },
  });
  if (!result.count) throw createError(404, "Trip membership not found");
}
