export function validateConfig(env = process.env) {
  for (const key of ['DATABASE_URL', 'JWT_SECRET']) {
    if (!env[key]) throw new Error(`Missing required configuration: ${key}`);
  }
  for (const key of ['AI_USER_DAILY_LIMIT', 'AI_GLOBAL_DAILY_LIMIT']) {
    if (env[key] && (!Number.isSafeInteger(Number(env[key])) || Number(env[key]) < 1)) throw new Error(`Invalid ${key}`);
  }
  if (!['lax','strict','none'].includes(env.REFRESH_COOKIE_SAME_SITE || 'lax')) throw new Error('Invalid refresh cookie SameSite');
  if (env.REFRESH_COOKIE_SAME_SITE === 'none' && env.NODE_ENV !== 'production') throw new Error('SameSite=None requires production HTTPS');
  if (env.TRUST_PROXY_HOPS && (!Number.isInteger(Number(env.TRUST_PROXY_HOPS)) || Number(env.TRUST_PROXY_HOPS) < 0)) throw new Error('Invalid TRUST_PROXY_HOPS');
  if (env.NODE_ENV === 'production') {
    if (Buffer.byteLength(env.JWT_SECRET) < 32 || /change-me|placeholder/i.test(env.JWT_SECRET)) {
      throw new Error('Production JWT_SECRET must be a securely generated secret of at least 32 bytes');
    }
    let origin;
    try { origin = new URL(env.FRONTEND_URL); } catch { throw new Error('Production FRONTEND_URL must be an HTTPS origin'); }
    if (origin.protocol !== 'https:' || origin.origin !== env.FRONTEND_URL) throw new Error('Production FRONTEND_URL must be an HTTPS origin without path or trailing slash');
    if (!['staging','production'].includes(env.APP_ENV)) throw new Error('Production runtime needs APP_ENV=staging or production');
    if (env.AI_ENABLED !== 'false' && (!env.GEMINI_MODEL || /latest|preview|experimental/i.test(env.GEMINI_MODEL))) throw new Error('Set an explicit stable GEMINI_MODEL or disable AI');
    if (env.GEMINI_FALLBACK_MODEL && /latest|preview|experimental/i.test(env.GEMINI_FALLBACK_MODEL)) throw new Error('Fallback model must be explicitly pinned');
  }
  const mailKeys = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SMTP_FROM'];
  const configuredMailKeys = mailKeys.filter(key => env[key]);
  if (configuredMailKeys.length && configuredMailKeys.length !== mailKeys.length) {
    throw new Error('Configure all SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM values together');
  }
  if (env.SMTP_PORT && (!Number.isInteger(Number(env.SMTP_PORT)) || Number(env.SMTP_PORT) < 1 || Number(env.SMTP_PORT) > 65535)) {
    throw new Error('Invalid SMTP_PORT');
  }
}
