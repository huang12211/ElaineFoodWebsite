import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { recipes } from '../../../db/schema/schema';

//Add your CRUD API below;
//Add the ability for a user to rate a recipe 
const getRecipes = async (req: Request, res: Response) => {
    try{
        const allRecipes = await db.select({field1: recipes.name}).from(recipes);
        // console.log(allRecipes);
        return res.status(200).json({success: true, data: allRecipes});
    } catch (error){
        return res.status(500).json({ success: false, data: error, message: "Unable to get all recipes"});
    } 
};

export default getRecipes;