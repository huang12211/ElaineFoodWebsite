import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { recipe_ingredient_measUnit, users_recipe_reviews } from '../../../db/schema/schema';
import { eq } from "drizzle-orm";

//Add your CRUD API below;
//Add the ability for a user to rate a recipe 
const getRatingsByRecipe = async (req: Request, res: Response) => {
    const { recipe_id } = req.params;
    try{
        const allRatingsByRecipe = await db.select().from(users_recipe_reviews).where(eq(users_recipe_reviews.recipe_id, Number(recipe_id)));
        return res.status(200).json({success: true, data: allRatingsByRecipe});
    } catch (error){
        return res.status(500).json({ success: false, data: null, message: "Unable to get Ratings for recipe"});
    } 
};

export default getRatingsByRecipe;