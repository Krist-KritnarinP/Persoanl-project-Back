import "dotenv/config";
import { prisma } from "../src/lib/prisma.js";

async function resetAiQuota() {
  try {
    const deleted = await prisma.aiUsage.deleteMany({});
    console.log(`Successfully reset AI quota counters (${deleted.count} records cleared).`);
  } catch (error) {
    console.error("Failed to reset AI quota:", error);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

resetAiQuota();
