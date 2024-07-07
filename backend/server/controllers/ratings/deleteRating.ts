import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { users_recipe_reviews } from '../../../db/schema/schema';
import { eq, and } from 'drizzle-orm';

//Add your CRUD API below;
//Add the ability for a user to delete a rating for a recipe
const deleteRating = async (req: Request, res: Response) => {
    const user_id = req.params.userId;
    const recipe_id = req.params.recipeId;

    try{
        await db.delete(users_recipe_reviews).where(and(
            eq(users_recipe_reviews.user_id, Number(user_id)),
            eq(users_recipe_reviews.recipe_id, Number(recipe_id))
        ))
        return res.status(200).json({success: true, message: "Rating Deleted Successfully"});
    } catch (error){
        return res.status(500).json({ success: false, data: null, message: "Unable to delete rating"});
    } 
};

export default deleteRating;