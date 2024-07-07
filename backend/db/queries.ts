import { db } from './db';
import { users, recipes, ingredients, measurementUnits, recipe_ingredient_measUnit, InsertUser } from './schema/schema';

export async function createUser(data: InsertUser) {
  await db.insert(users).values(data);
}

