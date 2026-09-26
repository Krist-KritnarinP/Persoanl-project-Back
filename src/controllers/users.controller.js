import bcrypt from 'bcrypt';
import createError from 'http-errors';
import { prisma } from '../lib/prisma.js';
import { profileSchema } from '../validations/schema.js';
export function getMe(req, res) {
  const { id, username, email } = req.user;
  res.json({ id, username, email });
}
export async function editMe(req, res, next) {
  try {
    const { username, password, currentPassword } = profileSchema.parse(req.body);
    const data = {};
    if (username !== undefined) data.username = username;
    if (password !== undefined) {
      if (!currentPassword || !await bcrypt.compare(currentPassword, req.user.password)) {
        throw createError(400, 'Current password is incorrect');
      }
      data.password = await bcrypt.hash(password, 12);
      data.tokenVersion = { increment: 1 };
    }
    // Conditional update prevents an old credential check winning a concurrent password change.
    const result = await prisma.user.updateMany({ where: { id: req.user.id, tokenVersion: req.user.tokenVersion }, data });
    if (!result.count) throw createError(401, 'Session expired, please sign in again');
    res.json({ message: password ? 'Password updated. Please sign in again.' : 'Profile updated',
      reauthenticate: Boolean(password), user: { id: req.user.id, username: username ?? req.user.username, email: req.user.email } });
  } catch (error) { next(error); }
}
export async function logout(req, res, next) {
  try {
    await prisma.user.updateMany({ where: { id: req.user.id, tokenVersion: req.user.tokenVersion }, data: { tokenVersion: { increment: 1 } } });
    res.sendStatus(204);
  } catch (error) { next(error); }
}
