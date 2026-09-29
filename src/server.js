import "dotenv/config";
import app from "./app.js";
import { validateConfig } from "./security/config.js";
import { prisma } from "./lib/prisma.js";
import { initMonitoring, flushMonitoring } from "./ops/monitoring.js";
import { cleanupExpiredLocationShares } from "./services/social.service.js";
validateConfig();
initMonitoring();
const locationCleanup = setInterval(() => cleanupExpiredLocationShares().catch(() => {}), 60_000);
locationCleanup.unref();
const server = app.listen(process.env.PORT || 8899, () =>
  console.log("API listening"),
);
for (const signal of ["SIGINT", "SIGTERM"])
  process.on(signal, () => {
    server.close(async () => {
      await flushMonitoring();
      await prisma.$disconnect();
      process.exit(0);
    });
    setTimeout(() => process.exit(1), 10000).unref();
  });
