import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { users_recipe_reviews } from '../../../db/schema/schema';
import { eq } from "drizzle-orm";

//Add your CRUD API below;
//Add the ability for a user to rate a recipe 
const getRatingsByUser = async (req: Request, res: Response) => {
    const { user_id } = req.params;
    try{
        const allRatingsByUser = await db.select().from(users_recipe_reviews).where(eq(users_recipe_reviews.user_id, Number(user_id)));
        return res.status(200).json({success: true, data: allRatingsByUser});
    } catch (error){
        return res.status(500).json({ success: false, data: null, message: "Unable to get Ratings for user"});
    } 
};

export default getRatingsByUser;