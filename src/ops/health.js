import { prisma } from '../lib/prisma.js';

export function healthHandlers(db = prisma) {
  let lastCheck = 0, healthy = false, pending;
  const check = async () => {
    if (Date.now() - lastCheck < 5000) return healthy;
    if (!pending) pending = (async () => {
      try { await db.$queryRaw`SELECT 1`; healthy = true; }
      catch { healthy = false; }
      finally { lastCheck = Date.now(); pending = undefined; }
      return healthy;
    })();
    return pending;
  };
  return {
    live: (_req, res) => res.json({ status: 'ok' }),
    ready: async (_req, res) => {
      let timer;
      const ok = await Promise.race([check(), new Promise(resolve => { timer = setTimeout(() => resolve(false), 2000); })]);
      clearTimeout(timer);
      res.status(ok ? 200 : 503).json({ status: ok ? 'ready' : 'unavailable' });
    },
  };
}
