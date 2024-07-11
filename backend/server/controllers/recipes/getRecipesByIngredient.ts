import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { recipe_ingredient_measUnit } from '../../../db/schema/schema';
import { sql, eq, inArray, and, count } from 'drizzle-orm';

//Add your CRUD API below;
//Add the ability for a user to rate a recipe 
const getRecipesByIngredient = async (req: Request, res: Response) => {
 
    var ingrList = req.query.ingredient?.toString().toLowerCase().trim().split(',');
    // console.log("ingrList: ", ingrList);
    
    if (ingrList == null){
        return res.status(500).json({ success: false, data: null, message: "Ingredient list is empty"});
    }

    try{
        const recipeResults = await db
            .select({field1: recipe_ingredient_measUnit.recipe_id,
                count: sql<number>`count(${recipe_ingredient_measUnit.recipe_id})`})
            .from(recipe_ingredient_measUnit)
            .where(inArray(sql`lower(${recipe_ingredient_measUnit.ingredient_id})`, ingrList))
            .groupBy(recipe_ingredient_measUnit.recipe_id)
            .having(({ count }) => eq(count, ingrList?.length));
        // console.log("recipeResults are: ", recipeResults);
            // .having({count: sql<number>`count(${recipe_ingredient_measUnit.recipe_id})`});
            // .having(({sql<number>`cast(count(${recipe_ingredient_measUnit.recipe_id}) as int)`}) => eq(count, ingrList.length));
        return res.status(200).json({success: true, data: recipeResults});
    } catch (error){
        return res.status(500).json({ success: false, data: null, message: "Unable to get recipes with those ingredients"});
    } 
};

export default getRecipesByIngredient;