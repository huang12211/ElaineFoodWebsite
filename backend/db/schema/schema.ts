import { sql } from "drizzle-orm";
// import { real } from "drizzle-orm/mysql-core";
import { text, integer, sqliteTable, uniqueIndex} from "drizzle-orm/sqlite-core";
import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

//Create the tables in your relational database
export const users = sqliteTable('users', {
  // id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  textModifiers: text('text_modifiers').notNull().default(sql`CURRENT_TIMESTAMP`),
  intModifiers: integer('int_modifiers', { mode: 'boolean' }).notNull().default(false),
});

export type User = typeof users.$inferSelect // return type when queried
export type InsertUser = typeof users.$inferInsert // insert type

export const recipes = sqliteTable('recipes', {
    //id: integer('id').primaryKey(),
    name: text('name').primaryKey(),
    video: text('video').notNull(),
    avg_rating: integer('avg_rating'),
    numRatings: integer('numRatings'),
    directions: text('directions'),
    tags: text('tags'),
  });

export type Recipe = typeof recipes.$inferSelect
export type InsertRecipe = typeof recipes.$inferInsert

export const ingredients = sqliteTable('ingredients', {
  ingr: text('ingr').primaryKey(),
});

export type Ingredients = typeof recipes.$inferSelect
export type InsertIngredient = typeof recipes.$inferInsert

export const measurementUnits = sqliteTable('mesurementUnits', {
  meas_unit: text('meas_units').primaryKey(),
});

export type MeasurementUnits = typeof measurementUnits.$inferSelect
export type InsertMeasurement = typeof measurementUnits.$inferInsert

export const recipe_ingredient_measUnit = sqliteTable('recipe_ingredient_measUnit', {
  id: integer('id').primaryKey(),
  recipe_id: text('recipe_id').references(() => recipes.name), 
  component: text('component'),
  amount: text('amount'),
  measUnit_id: text('measUnit_id').references(() => measurementUnits.meas_unit), 
  ingredient_id: text('ingredient_id').references(() => ingredients.ingr),
});


// we also want a table that gives us users vs. ratings of each recipe.
//So that we can later use this information to generate a Recommendation system
export const users_recipe_reviews = sqliteTable('users_recipe_reviews', {
  user_id: integer('user_id').references(() => users.id),
  recipe_name: text('recipe_name').references(() => recipes.name),
  rating: integer('rating'),
});