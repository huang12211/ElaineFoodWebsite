import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { users_recipe_reviews } from '../../../db/schema/schema';

//Add your CRUD API below;
//Add the ability for a user to rate a recipe 
const createRating = async (req: Request, res: Response) => {
    const {user_id, recipe_id, rating}: {user_id: number; recipe_id: number; rating: number} = req.body;

    if (!user_id){
        return res.status(400).json({success: false, data: null, message: "User ID is required"});
    }
    
    if (!recipe_id){
        return res.status(400).json({success: false, data: null, message: "Recipe ID is required"});
    }
    
    try{
        await db.insert(users_recipe_reviews).values({user_id: user_id, recipe_id: recipe_id, rating: rating});
        return res.status(201).json({success: true, data: {user_id, recipe_id, rating}, message: "Added Successfully"});
    } catch (error){
        return res.status(500).json({ success: false, data: null, message: "Unable to add"});
    } 
};

export default createRating;