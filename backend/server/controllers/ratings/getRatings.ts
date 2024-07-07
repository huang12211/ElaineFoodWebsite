import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { users_recipe_reviews } from '../../../db/schema/schema';

//Add your CRUD API below;
//Add the ability for a user to rate a recipe 
const getRatings = async (req: Request, res: Response) => {
    try{
        const allRatings = await db.select().from(users_recipe_reviews);
        return res.status(200).json({success: true, data: allRatings});
    } catch (error){
        return res.status(500).json({ success: false, data: null, message: "Unable to get all ratings"});
    } 
};

export default getRatings;