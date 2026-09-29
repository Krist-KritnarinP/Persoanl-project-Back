import createError from "http-errors";
import { prisma } from "../lib/prisma.js";

const asId = (value) => Number(value);
const pair = (a, b) => [Math.min(asId(a), asId(b)), Math.max(asId(a), asId(b))];

export async function listFriends(userId) {
  return prisma.$queryRaw`
    SELECT f.user_low AS "userLow", f.user_high AS "userHigh", f.requested_by AS "requestedBy", f.status,
      f.created_at AS "createdAt", u.user_id AS id, u.username
    FROM social_friendships f
    JOIN users u ON u.user_id = CASE WHEN f.user_low = ${asId(userId)} THEN f.user_high ELSE f.user_low END
    WHERE f.user_low = ${asId(userId)} OR f.user_high = ${asId(userId)}
    ORDER BY f.status, f.created_at DESC`;
}

export async function requestFriend(userId, email) {
  const users = await prisma.$queryRaw`SELECT user_id AS id FROM users WHERE lower(email) = lower(${email}) LIMIT 1`;
  if (!users.length) throw createError(404, "Account not found");
  const friendId = users[0].id;
  if (friendId === asId(userId)) throw createError(400, "Cannot add yourself");
  const [low, high] = pair(userId, friendId);
  const existing = await prisma.$queryRaw`SELECT status, requested_by AS "requestedBy" FROM social_friendships WHERE user_low=${low} AND user_high=${high}`;
  if (existing[0]?.status === "accepted") throw createError(409, "Already friends");
  if (existing[0]) throw createError(409, "Friend request already exists");
  await prisma.$transaction(async (tx) => {
    await tx.$executeRaw`INSERT INTO social_friendships (user_low,user_high,requested_by) VALUES (${low},${high},${asId(userId)})`;
    await tx.$executeRaw`INSERT INTO notifications (user_id,actor_id,type,entity_type,entity_id,payload) VALUES (${asId(friendId)},${asId(userId)},'friend_request','friendship',${`${low}:${high}`},'{}'::jsonb)`;
  });
  return { requested: true };
}

export async function acceptFriend(userId, friendId) {
  const [low, high] = pair(userId, friendId);
  const result = await prisma.$transaction(async (tx) => {
    const updated = await tx.$executeRaw`UPDATE social_friendships SET status='accepted',updated_at=now() WHERE user_low=${low} AND user_high=${high} AND status='pending' AND requested_by<>${asId(userId)}`;
    if (updated) await tx.$executeRaw`UPDATE notifications SET read_at=COALESCE(read_at,now()),payload=jsonb_set(payload,'{accepted}','true'::jsonb,true) WHERE user_id=${asId(userId)} AND actor_id=${asId(friendId)} AND type='friend_request'`;
    return updated;
  });
  if (!result) throw createError(404, "Incoming friend request not found");
  return { accepted: true };
}

export async function removeFriend(userId, friendId) {
  const [low, high] = pair(userId, friendId);
  await prisma.$executeRaw`DELETE FROM social_friendships WHERE user_low=${low} AND user_high=${high}`;
  return { removed: true };
}

export async function createConversation(userId, name, memberIds) {
  const ids = [...new Set(memberIds.map(asId).filter((id) => id !== asId(userId)))];
  if (!ids.length || ids.length > 29) throw createError(400, "Choose 1 to 29 friends");
  for (const friendId of ids) {
    const [low, high] = pair(userId, friendId);
    const friendship = await prisma.$queryRaw`SELECT 1 FROM social_friendships WHERE user_low=${low} AND user_high=${high} AND status='accepted'`;
    if (!friendship.length) throw createError(403, "All participants must be accepted friends");
  }
  if (!name && ids.length === 1) {
    const existing = await prisma.$queryRaw`
      SELECT c.id FROM chat_conversations c
      WHERE c.name IS NULL
        AND EXISTS (SELECT 1 FROM chat_members a WHERE a.conversation_id=c.id AND a.user_id=${asId(userId)})
        AND EXISTS (SELECT 1 FROM chat_members b WHERE b.conversation_id=c.id AND b.user_id=${ids[0]})
        AND (SELECT count(*) FROM chat_members m WHERE m.conversation_id=c.id)=2
      LIMIT 1`;
    if (existing.length) return { id: existing[0].id, name: null };
  }
  return prisma.$transaction(async (tx) => {
    const rows = await tx.$queryRaw`INSERT INTO chat_conversations (name,created_by) VALUES (${name || null},${asId(userId)}) RETURNING id`;
    const conversationId = rows[0].id;
    await tx.$executeRaw`INSERT INTO chat_members (conversation_id,user_id) VALUES (${conversationId},${asId(userId)})`;
    for (const id of ids) await tx.$executeRaw`INSERT INTO chat_members (conversation_id,user_id) VALUES (${conversationId},${id})`;
    return { id: conversationId, name: name || null };
  });
}

async function requireMember(conversationId, userId, db = prisma) {
  const rows = await db.$queryRaw`SELECT 1 FROM chat_members WHERE conversation_id=${asId(conversationId)} AND user_id=${asId(userId)}`;
  if (!rows.length) throw createError(404, "Conversation not found");
}

export async function listConversations(userId) {
  return prisma.$queryRaw`
    SELECT c.id, c.name, c.created_at AS "createdAt",
      (SELECT json_agg(json_build_object('id',u.user_id,'username',u.username) ORDER BY u.username)
       FROM chat_members m JOIN users u ON u.user_id=m.user_id WHERE m.conversation_id=c.id AND m.user_id<>${asId(userId)}) AS participants,
      (SELECT json_build_object('id',msg.id::text,'kind',msg.kind,'body',msg.body,'createdAt',msg.created_at,'senderId',msg.sender_id,'senderName',sender.username)
       FROM chat_messages msg LEFT JOIN users sender ON sender.user_id=msg.sender_id
       WHERE msg.conversation_id=c.id ORDER BY msg.id DESC LIMIT 1) AS "lastMessage"
    FROM chat_members mine JOIN chat_conversations c ON c.id=mine.conversation_id
    WHERE mine.user_id=${asId(userId)}
    ORDER BY COALESCE((SELECT max(msg.created_at) FROM chat_messages msg WHERE msg.conversation_id=c.id),c.created_at) DESC`;
}

export async function listNotifications(userId) {
  const rows = await prisma.$queryRaw`
    SELECT n.id::text AS id,n.type,n.entity_type AS "entityType",n.entity_id AS "entityId",
      n.payload,n.created_at AS "createdAt",n.read_at AS "readAt",
      n.actor_id AS "actorId",u.username AS "actorName"
    FROM notifications n LEFT JOIN users u ON u.user_id=n.actor_id
    WHERE n.user_id=${asId(userId)}
    ORDER BY n.created_at DESC,n.id DESC LIMIT 100`;
  const count = await countUnreadNotifications(userId);
  return { items: rows, unreadCount: count };
}

export async function countUnreadNotifications(userId) {
  const rows = await prisma.$queryRaw`SELECT count(*)::int AS count FROM notifications WHERE user_id=${asId(userId)} AND read_at IS NULL`;
  return rows[0]?.count || 0;
}

export async function markNotificationRead(userId, notificationId) {
  const rows = await prisma.$queryRaw`UPDATE notifications SET read_at=COALESCE(read_at,now()) WHERE id=${asId(notificationId)} AND user_id=${asId(userId)} RETURNING id::text AS id`;
  if (!rows.length) throw createError(404,"Notification not found");
  return { read: true };
}

export async function markConversationNotificationsRead(userId, conversationId) {
  await requireMember(conversationId,userId);
  const result = await prisma.$executeRaw`UPDATE notifications SET read_at=COALESCE(read_at,now()) WHERE user_id=${asId(userId)} AND type='new_message' AND entity_id=${String(conversationId)} AND read_at IS NULL`;
  return { read: true, count: result };
}

export async function markAllNotificationsRead(userId) {
  const result = await prisma.$executeRaw`UPDATE notifications SET read_at=COALESCE(read_at,now()) WHERE user_id=${asId(userId)} AND read_at IS NULL`;
  return { read: true, count: result };
}

export async function listMessages(conversationId, userId, after = "0") {
  await requireMember(conversationId, userId);
  if (!/^\d+$/.test(String(after))) throw createError(400, "Invalid cursor");
  const cursor = BigInt(after);
  const rows = cursor === 0n
    ? await prisma.$queryRaw`SELECT m.id::text AS id,m.kind,m.body,m.created_at AS "createdAt",m.sender_id AS "senderId",u.username AS "senderName" FROM (SELECT * FROM chat_messages WHERE conversation_id=${asId(conversationId)} ORDER BY id DESC LIMIT 100) m LEFT JOIN users u ON u.user_id=m.sender_id ORDER BY m.id`
    : await prisma.$queryRaw`SELECT m.id::text AS id,m.kind,m.body,m.created_at AS "createdAt",m.sender_id AS "senderId",u.username AS "senderName" FROM chat_messages m LEFT JOIN users u ON u.user_id=m.sender_id WHERE m.conversation_id=${asId(conversationId)} AND m.id>${cursor} ORDER BY m.id ASC LIMIT 100`;
  return rows;
}

export async function sendMessage(conversationId, userId, body, kind = "text") {
  await requireMember(conversationId, userId);
  const message = body.trim();
  if (!message || message.length > 2000) throw createError(400, "Message must contain 1 to 2000 characters");
  return prisma.$transaction(async (tx) => {
    const rows = await tx.$queryRaw`INSERT INTO chat_messages (conversation_id,sender_id,kind,body) VALUES (${asId(conversationId)},${asId(userId)},${kind},${message}) RETURNING id::text AS id,kind,body,created_at AS "createdAt",sender_id AS "senderId"`;
    await tx.$executeRaw`
      INSERT INTO notifications (user_id,actor_id,type,entity_type,entity_id,payload)
      SELECT m.user_id,${asId(userId)},'new_message','conversation',${String(conversationId)},
        jsonb_build_object('conversationId',${String(conversationId)},'messageId',${rows[0].id},'excerpt',left(${message},160))
      FROM chat_members m WHERE m.conversation_id=${asId(conversationId)} AND m.user_id<>${asId(userId)}`;
    return rows[0];
  });
}

export async function requestLocation(conversationId, userId) {
  await requireMember(conversationId, userId);
  return sendMessage(conversationId,userId,"Location sharing requested. Sharing requires the recipient's approval.","location_request");
}

const durations = new Set([5, 15, 60, 480, 1440]);
export async function startLocationShare(conversationId, userId, minutes) {
  await requireMember(conversationId,userId);
  if (!durations.has(minutes)) throw createError(400,"Choose a supported sharing duration");
  const rows = await prisma.$queryRaw`INSERT INTO location_shares (conversation_id,user_id,expires_at) VALUES (${asId(conversationId)},${asId(userId)},now()+(${minutes} * interval '1 minute')) ON CONFLICT (conversation_id,user_id) DO UPDATE SET expires_at=EXCLUDED.expires_at,created_at=now() RETURNING expires_at AS "expiresAt"`;
  return rows[0];
}

export async function getOwnLocationShare(conversationId,userId) {
  await requireMember(conversationId,userId);
  const rows=await prisma.$queryRaw`SELECT expires_at AS "expiresAt" FROM location_shares WHERE conversation_id=${asId(conversationId)} AND user_id=${asId(userId)} AND expires_at>now()`;
  return rows[0] || null;
}

export async function updateLocation(conversationId,userId,latitude,longitude,accuracy) {
  const rows = await prisma.$queryRaw`SELECT 1 FROM location_shares WHERE conversation_id=${asId(conversationId)} AND user_id=${asId(userId)} AND expires_at>now()`;
  if (!rows.length) throw createError(403,"Location sharing is not active");
  await prisma.$executeRaw`INSERT INTO live_locations (conversation_id,user_id,latitude,longitude,accuracy,updated_at) VALUES (${asId(conversationId)},${asId(userId)},${latitude},${longitude},${accuracy ?? null},now()) ON CONFLICT (conversation_id,user_id) DO UPDATE SET latitude=EXCLUDED.latitude,longitude=EXCLUDED.longitude,accuracy=EXCLUDED.accuracy,updated_at=now()`;
  return { updated: true };
}

export async function stopLocationShare(conversationId,userId) {
  await requireMember(conversationId,userId);
  await prisma.$executeRaw`DELETE FROM location_shares WHERE conversation_id=${asId(conversationId)} AND user_id=${asId(userId)}`;
  return { stopped: true };
}

export async function getSharedLocations(conversationId,userId) {
  await requireMember(conversationId,userId);
  await prisma.$executeRaw`DELETE FROM location_shares WHERE expires_at<=now()`;
  return prisma.$queryRaw`
    SELECT l.user_id AS "userId",u.username,l.latitude,l.longitude,l.accuracy,l.updated_at AS "updatedAt",s.expires_at AS "expiresAt"
    FROM live_locations l JOIN location_shares s USING (conversation_id,user_id) JOIN users u ON u.user_id=l.user_id
    JOIN chat_members mine ON mine.conversation_id=l.conversation_id AND mine.user_id=${asId(userId)}
    WHERE l.conversation_id=${asId(conversationId)} AND s.expires_at>now() AND l.updated_at>now()-interval '2 minutes'`;
}

export async function cleanupExpiredLocationShares() {
  return prisma.$executeRaw`DELETE FROM location_shares WHERE expires_at<=now()`;
}

export async function leaveConversation(conversationId,userId) {
  const result = await prisma.$executeRaw`DELETE FROM chat_members WHERE conversation_id=${asId(conversationId)} AND user_id=${asId(userId)}`;
  if (!result) throw createError(404,"Conversation not found");
  return { left: true };
}
