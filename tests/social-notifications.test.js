import test from "node:test";
import assert from "node:assert/strict";
import { prisma } from "../src/lib/prisma.js";
import { sendMessage, requestFriend, markConversationNotificationsRead } from "../src/services/social.service.js";

const sqlText = (strings) => strings.join("?");

test("sending a chat message creates per-recipient inbox notifications atomically", async () => {
  const original = { query: prisma.$queryRaw, transaction: prisma.$transaction };
  const writes = [];
  const tx = {
    $queryRaw: async (strings) => {
      assert.match(sqlText(strings), /INSERT INTO chat_messages/);
      return [{ id: "91", kind: "text", body: "Hello", senderId: 1 }];
    },
    $executeRaw: async (strings, ...values) => { writes.push({ sql: sqlText(strings), values }); return 2; },
  };
  prisma.$queryRaw = async (strings) => {
    assert.match(sqlText(strings), /FROM chat_members/);
    return [{ 1: 1 }];
  };
  prisma.$transaction = async (callback) => callback(tx);
  try {
    const saved = await sendMessage(4, 1, " Hello ");
    assert.equal(saved.id, "91");
    assert.equal(writes.length, 1);
    assert.match(writes[0].sql, /INSERT INTO notifications/);
    assert.match(writes[0].sql, /'new_message'/);
    assert.ok(writes[0].values.includes("4"));
    assert.ok(writes[0].values.includes("91"));
  } finally {
    prisma.$queryRaw = original.query;
    prisma.$transaction = original.transaction;
  }
});

test("sending a friend request records a notification for the recipient", async () => {
  const original = { query: prisma.$queryRaw, transaction: prisma.$transaction };
  const writes = [];
  const tx = { $executeRaw: async (strings, ...values) => { writes.push({ sql: sqlText(strings), values }); return 1; } };
  prisma.$queryRaw = async (strings) => {
    const sql = sqlText(strings);
    if (sql.includes("FROM users")) return [{ id: 2 }];
    if (sql.includes("FROM social_friendships")) return [];
    throw new Error("Unexpected query");
  };
  prisma.$transaction = async (callback) => callback(tx);
  try {
    assert.deepEqual(await requestFriend(1, "friend@example.com"), { requested: true });
    assert.equal(writes.length, 2);
    assert.match(writes[1].sql, /INSERT INTO notifications/);
    assert.match(writes[1].sql, /'friend_request'/);
    assert.ok(writes[1].values.includes(2));
  } finally {
    prisma.$queryRaw = original.query;
    prisma.$transaction = original.transaction;
  }
});

test("reading a conversation notification verifies membership before updating rows", async () => {
  const original = { query: prisma.$queryRaw, execute: prisma.$executeRaw };
  let update;
  prisma.$queryRaw = async (strings) => {
    assert.match(sqlText(strings), /FROM chat_members/);
    return [{ 1: 1 }];
  };
  prisma.$executeRaw = async (strings, ...values) => { update = { sql: sqlText(strings), values }; return 3; };
  try {
    assert.deepEqual(await markConversationNotificationsRead(5, 4), { read: true, count: 3 });
    assert.match(update.sql, /UPDATE notifications/);
    assert.match(update.sql, /'new_message'/);
    assert.ok(update.values.includes(5));
  } finally {
    prisma.$queryRaw = original.query;
    prisma.$executeRaw = original.execute;
  }
});
