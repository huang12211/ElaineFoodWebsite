import { sql } from "drizzle-orm";
import { real } from "drizzle-orm/mysql-core";
import { text, integer, sqliteTable, uniqueIndex} from "drizzle-orm/sqlite-core";
import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

//Create the tables in your relational database
export const users = sqliteTable('users', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  textModifiers: text('text_modifiers').notNull().default(sql`CURRENT_TIMESTAMP`),
  intModifiers: integer('int_modifiers', { mode: 'boolean' }).notNull().default(false),
});

export type User = typeof users.$inferSelect // return type when queried
export type InsertUser = typeof users.$inferInsert // insert type

export const recipes = sqliteTable('recipes', {
    id: integer('id').primaryKey(),
    name: text('name').notNull(),
    video: text('video').notNull(),
    rating: integer('rating'),
    numRatings: integer('numRatings'),
    directions: text('directions'),
  });

export const ingredients = sqliteTable('ingredients', {
  id: integer('id').primaryKey(),
  label: text('name').notNull(),
});

export const measurementUnits = sqliteTable('mesurementUnits', {
  id: integer('id').primaryKey(),
  label: text('label').notNull(),
});

export const recipe_ingredient_measUnit = sqliteTable('recipe_ingredient_measUnit', {
  id: integer('id').primaryKey(),
  recipe_id: integer('recipe_id').references(() => recipes.id),
  amount: integer('amount'),
  measUnit_id: integer('measUnit_id').references(() => measurementUnits.id), 
  ingredient_id: integer('ingredient_id').references(() => ingredients.id),
});





// //Let's mock the database to make sure it is all working
const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite);

// const result: User[] = db.select().from(users).all();

// const insertUser = (data: InsertUser) => {
//   return db.insert(users).values(data).run()
// }