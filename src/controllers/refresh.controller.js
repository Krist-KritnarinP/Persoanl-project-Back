import createError from 'http-errors';
import { rotateRefreshSession, readRefreshCookie, setRefreshCookie, clearRefreshCookie } from '../security/refresh-session.js';
import { createToken } from '../utilities/jwt.js';
export async function refresh(req, res, next) {
  try {
    const session = await rotateRefreshSession(readRefreshCookie(req));
    if (!session) { clearRefreshCookie(res); return next(createError(401, 'Session expired')); }
    const { id, username, email } = session.user;
    setRefreshCookie(res, session.token, session.expiresAt);
    res.json({ token: await createToken(session.user), user: { id, username, email } });
  } catch (error) { next(error); }
}
