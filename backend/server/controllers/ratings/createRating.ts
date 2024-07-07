import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { users_recipe_reviews } from '../../../db/schema/schema';

//Add your CRUD API below;
//Add the ability for a user to rate a recipe 
const createRating = async (req: Request, res: Response) => {
    const {user_id, recipe_name, rating} = req.body;

    if (!user_id){
        return res.status(400).json({success: false, data: null, message: "User ID is required"});
    }
    
    if (!recipe_name){
        return res.status(400).json({success: false, data: null, message: "Recipe Name is required"});
    }
    
    try{
        await db.insert(users_recipe_reviews).values({user_id: user_id, recipe_name: recipe_name, rating: rating});
        return res.status(201).json({success: true, data: {user_id, recipe_name, rating}, message: "Added Successfully"});
    } catch (error){
        return res.status(500).json({ success: false, data: null, message: "Unable to add"});
    } 
};

export default createRating;