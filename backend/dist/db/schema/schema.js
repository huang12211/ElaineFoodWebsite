"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users_recipe_reviews = exports.recipe_ingredient_measUnit = exports.measurementUnits = exports.ingredients = exports.recipes = exports.users = void 0;
const drizzle_orm_1 = require("drizzle-orm");
// import { real } from "drizzle-orm/mysql-core";
const sqlite_core_1 = require("drizzle-orm/sqlite-core");
//Create the tables in your relational database
exports.users = (0, sqlite_core_1.sqliteTable)('users', {
    // id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    id: (0, sqlite_core_1.integer)('id').primaryKey({ autoIncrement: true }),
    email: (0, sqlite_core_1.text)('email').notNull().unique(),
    textModifiers: (0, sqlite_core_1.text)('text_modifiers').notNull().default((0, drizzle_orm_1.sql) `CURRENT_TIMESTAMP`),
    intModifiers: (0, sqlite_core_1.integer)('int_modifiers', { mode: 'boolean' }).notNull().default(false),
});
exports.recipes = (0, sqlite_core_1.sqliteTable)('recipes', {
    //id: integer('id').primaryKey(),
    name: (0, sqlite_core_1.text)('name').primaryKey(),
    image_src: (0, sqlite_core_1.text)('image_src').notNull(),
    video: (0, sqlite_core_1.text)('video').notNull(),
    avg_rating: (0, sqlite_core_1.integer)('avg_rating'),
    numRatings: (0, sqlite_core_1.integer)('numRatings'),
    directions: (0, sqlite_core_1.text)('directions'),
    tags: (0, sqlite_core_1.text)('tags'),
});
exports.ingredients = (0, sqlite_core_1.sqliteTable)('ingredients', {
    ingr: (0, sqlite_core_1.text)('ingr').primaryKey(),
});
exports.measurementUnits = (0, sqlite_core_1.sqliteTable)('mesurementUnits', {
    meas_unit: (0, sqlite_core_1.text)('meas_units').primaryKey(),
});
exports.recipe_ingredient_measUnit = (0, sqlite_core_1.sqliteTable)('recipe_ingredient_measUnit', {
    id: (0, sqlite_core_1.integer)('id').primaryKey(),
    recipe_id: (0, sqlite_core_1.text)('recipe_id').references(() => exports.recipes.name),
    component: (0, sqlite_core_1.text)('component'),
    amount: (0, sqlite_core_1.text)('amount'),
    measUnit_id: (0, sqlite_core_1.text)('measUnit_id').references(() => exports.measurementUnits.meas_unit),
    ingredient_id: (0, sqlite_core_1.text)('ingredient_id').references(() => exports.ingredients.ingr),
});
// we also want a table that gives us users vs. ratings of each recipe.
//So that we can later use this information to generate a Recommendation system
exports.users_recipe_reviews = (0, sqlite_core_1.sqliteTable)('users_recipe_reviews', {
    user_id: (0, sqlite_core_1.integer)('user_id').references(() => exports.users.id),
    recipe_name: (0, sqlite_core_1.text)('recipe_name').references(() => exports.recipes.name),
    bookmarked: (0, sqlite_core_1.integer)('bookmarked', { mode: 'boolean' }).notNull().default(false),
    rating: (0, sqlite_core_1.integer)('rating'),
});
