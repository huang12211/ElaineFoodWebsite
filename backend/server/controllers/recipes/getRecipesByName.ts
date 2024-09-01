import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { recipes } from '../../../db/schema/schema';
import { sql } from 'drizzle-orm';



//Add your CRUD API below; 
const getRecipesByName = async (req: Request, res: Response) => {
    console.log("You're in the getRecipesByName function")

    var recipeList = req.query.recipeName?.toString().toLowerCase().trim().split(',');
    console.log("recipeList: ", recipeList);


    
    if (recipeList == null || recipeList.length == 0){
        return res.status(500).json({ success: false, data: null, message: "Recipe list is empty"});
    }

    try{
        recipeList[0] = recipeList[0].trim();
        recipeList[0] = '%' + recipeList[0] + '%';
        console.log(`element 0 of recipeList is: ${recipeList[0]}`);

        const query = sql`lower(name) like ${recipeList[0]}`;
        for (let i = 1; i< recipeList.length; i++){
            recipeList[i] = recipeList[i].trim();
            recipeList[i] = '%' + recipeList[i] + '%';
            console.log(`element ${i} of recipeList is: ${recipeList[i]}`);
            query.append(sql` or lower(name) like ${recipeList[i]}`);
        }

        
        const readableQuery = db
            .select()
            .from(recipes)
            .where(query)
            .toSQL();
        console.log('SQL where query is: ', readableQuery);

        const executeQuery = db
            .select()
            .from(recipes)
            .where(query);
        const recipeResults = await executeQuery; 

        return res.status(200).json({success: true, data: recipeResults, message:"Final List of Recipes that should be Recipe Cards"});
    } catch (error){
        return res.status(500).json({ success: false, data: null, message: "Unable to get recipes with those recipe names"});
    } 
};

export default getRecipesByName;