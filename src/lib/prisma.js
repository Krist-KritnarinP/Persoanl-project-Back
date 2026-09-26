import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

if (!process.env.DATABASE_URL) {
  console.warn("[prisma] WARNING: DATABASE_URL is not set");
}

const adapter = new PrismaPg({
  connectionTimeoutMillis: 5000,
  query_timeout: 10000,
  max: 10,
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

export { prisma };
