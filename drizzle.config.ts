import type { Config } from "drizzle-kit";
export default {
  schema: "./db/schema/schema.ts",
  out: "./db/drizzle",
  driver: 'better-sqlite',
} satisfies Config;