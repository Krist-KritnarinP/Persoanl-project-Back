import 'dotenv/config';
import app from './app.js';
import { validateConfig } from './security/config.js';
import { prisma } from './lib/prisma.js';
validateConfig();
const server = app.listen(process.env.PORT || 8899, () => console.log('API listening'));
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => {
  server.close(async () => { await prisma.$disconnect(); process.exit(0); });
  setTimeout(() => process.exit(1), 10000).unref();
});
