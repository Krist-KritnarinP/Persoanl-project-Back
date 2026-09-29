import createError from "http-errors";
import * as social from "../services/social.service.js";

const run = (fn) => async (req, res, next) => {
  try { res.json({ data: await fn(req) }); } catch (error) { next(error); }
};
const int = (value) => Number.isInteger(Number(value)) && Number(value) > 0;
const coord = (value,min,max) => typeof value === "number" && Number.isFinite(value) && value>=min && value<=max;

export const friends = run((req) => social.listFriends(req.user.id));
export const addFriend = run((req) => {
  const email = req.body?.email;
  if (typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email) || email.length>100) throw createError(400,"Valid email required");
  return social.requestFriend(req.user.id,email.trim());
});
export const acceptFriend = run((req) => social.acceptFriend(req.user.id,req.params.friendId));
export const removeFriend = run((req) => social.removeFriend(req.user.id,req.params.friendId));
export const conversations = run((req) => social.listConversations(req.user.id));
export const createConversation = run((req) => {
  const { name, memberIds } = req.body || {};
  if (!Array.isArray(memberIds) || memberIds.length<1 || memberIds.length>29 || memberIds.some((id)=>!int(id))) throw createError(400,"Choose friends for the conversation");
  if (name!==undefined && (typeof name!=="string" || name.trim().length>100)) throw createError(400,"Invalid group name");
  return social.createConversation(req.user.id,name?.trim(),memberIds);
});
export const messages = run((req) => social.listMessages(req.params.conversationId,req.user.id,req.query.after || "0"));
export const sendMessage = run((req) => {
  if (typeof req.body?.body!=="string") throw createError(400,"Message required");
  return social.sendMessage(req.params.conversationId,req.user.id,req.body.body);
});
export const requestLocation = run((req) => social.requestLocation(req.params.conversationId,req.user.id));
export const startLocation = run((req) => social.startLocationShare(req.params.conversationId,req.user.id,Number(req.body?.minutes)));
export const ownLocationShare = run((req) => social.getOwnLocationShare(req.params.conversationId,req.user.id));
export const updateLocation = run((req) => {
  const { latitude, longitude, accuracy } = req.body || {};
  if (!coord(latitude,-90,90) || !coord(longitude,-180,180) || (accuracy!=null && (!coord(accuracy,0,100000)))) throw createError(400,"Invalid location coordinates");
  return social.updateLocation(req.params.conversationId,req.user.id,Number(latitude),Number(longitude),accuracy==null?null:Number(accuracy));
});
export const locations = run((req) => social.getSharedLocations(req.params.conversationId,req.user.id));
export const stopLocation = run((req) => social.stopLocationShare(req.params.conversationId,req.user.id));
export const leaveConversation = run((req) => social.leaveConversation(req.params.conversationId,req.user.id));
