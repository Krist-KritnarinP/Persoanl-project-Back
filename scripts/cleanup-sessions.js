import 'dotenv/config';
import { prisma } from '../src/lib/prisma.js';
try {
  const result = await prisma.refreshSession.deleteMany({ where: { expiresAt: { lte: new Date() } } });
  const resets = await prisma.passwordResetToken.deleteMany({ where: { expiresAt: { lte: new Date() } } });
  console.log(`Expired refresh sessions removed: ${result.count}; reset tokens: ${resets.count}`);
} catch {
  console.error('Session cleanup failed'); process.exitCode = 1;
} finally { await prisma.$disconnect(); }
