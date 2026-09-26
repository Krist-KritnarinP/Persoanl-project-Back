export function validateConfig(env = process.env) {
  for (const key of ['DATABASE_URL', 'JWT_SECRET']) {
    if (!env[key]) throw new Error(`Missing required configuration: ${key}`);
  }
  if (env.NODE_ENV === 'production') {
    if (Buffer.byteLength(env.JWT_SECRET) < 32 || /change-me|placeholder/i.test(env.JWT_SECRET)) {
      throw new Error('Production JWT_SECRET must be a securely generated secret of at least 32 bytes');
    }
    if (!env.FRONTEND_URL?.startsWith('https://')) throw new Error('Production FRONTEND_URL must use HTTPS');
  }
}
