import { z } from "zod";
import {
  inviteCollaborator,
  leaveTrip,
  listCollaborators,
  listInvitations,
  removeCollaborator,
  respondToInvitation,
} from "../services/collaboration.service.js";

const invitationInput = z.object({
  email: z.string().trim().email().max(100).transform((v) => v.toLowerCase()),
  role: z.enum(["viewer", "editor"]),
}).strict();
const responseInput = z.object({ accepted: z.boolean() }).strict();

const handle = (work) => async (req, res, next) => {
  try {
    const data = await work(req);
    res.json({ data });
  } catch (error) {
    next(error);
  }
};

export const collaborators = handle((req) =>
  listCollaborators(req.params.tripId, req.user.id),
);
export const invite = handle((req) => {
  const { email, role } = invitationInput.parse(req.body);
  return inviteCollaborator(req.params.tripId, req.user.id, email, role);
});
export const remove = handle(async (req) => {
  await removeCollaborator(req.params.tripId, req.user.id, req.params.userId);
  return { removed: true };
});
export const invitations = handle((req) => listInvitations(req.user.id));
export const respond = handle((req) => {
  const { accepted } = responseInput.parse(req.body);
  return respondToInvitation(req.params.tripId, req.user.id, accepted);
});
export const leave = handle(async (req) => {
  await leaveTrip(req.params.tripId, req.user.id);
  return { left: true };
});
