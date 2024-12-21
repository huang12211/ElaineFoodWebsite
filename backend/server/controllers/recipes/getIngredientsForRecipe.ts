import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { recipe_ingredient_measUnit } from '../../../db/schema/schema';
import { sql } from 'drizzle-orm';



//Add your CRUD API below; 
const getIngredientsForRecipe = async (req: Request, res: Response) => {
    
    //read the url after the /recipes/ to get the name of the recipe. 
    let nameOfRecipe = req.params.recipeId.toString().toLowerCase().trim();
    let regex = new RegExp("-", 'g');
    nameOfRecipe = nameOfRecipe.replace(regex,' ');



    try{
        const query = sql`lower(${recipe_ingredient_measUnit.recipe_id}) like lower(${nameOfRecipe})`;
        
        // const readableQuery = db
        //     .select()
        //     .from(recipe_ingredient_measUnit)
        //     .where(query);
        // console.log('SQL where query is: ', readableQuery);

        const executeQuery = db
            .select()
            .from(recipe_ingredient_measUnit)
            .where(query);
        const recipeIngredients = await executeQuery; 
        console.log('recipeIngredients', recipeIngredients);

        if (recipeIngredients == null || recipeIngredients === undefined || recipeIngredients.length == 0){
            return res.status(500).json({ success: false, data: null, message: `Unable to find recipe with that name: ${nameOfRecipe}`});
        }
        else{
            return res.status(200).json({success: true, data: recipeIngredients});
        }
        
    } catch (error){
        return res.status(500).json({ success: false, data: null, message: `Unable to find recipe with that name: ${nameOfRecipe}`});
    } 
};

export default getIngredientsForRecipe;