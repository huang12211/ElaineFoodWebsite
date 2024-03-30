import { sql } from "drizzle-orm";
import { text, integer, sqliteTable, uniqueIndex} from "drizzle-orm/sqlite-core";

export const users = sqliteTable('users', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  textModifiers: text('text_modifiers').notNull().default(sql`CURRENT_TIMESTAMP`),
  intModifiers: integer('int_modifiers', { mode: 'boolean' }).notNull().default(false),
});

export const recipes = sqliteTable('recipes', {
    id: integer('id').primaryKey(),
    name: text('name').notNull(),
    description: text('description'),
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