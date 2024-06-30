import type { Config } from "drizzle-kit";
export default {
    schema: "./backend/db/schema/schema.ts",
    out: "./backend/db/drizzle",
    driver: 'better-sqlite',
    dbCredentials: {
        url:'./sqlite.db',
    },
} satisfies Config;