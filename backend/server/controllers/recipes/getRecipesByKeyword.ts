import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { recipes } from '../../../db/schema/schema';
import { sql } from 'drizzle-orm';



//Add your CRUD API below; 
const getRecipesByKeyword = async (req: Request, res: Response) => {
 
    var keywordList = req.query.keyword?.toString().toLowerCase().trim().split(',');
    console.log("keywordList: ", keywordList);


    
    if (keywordList == null || keywordList.length == 0){
        return res.status(500).json({ success: false, data: null, message: "Keyword list is empty"});
    }

    try{
        keywordList[0] = keywordList[0].trim();
        keywordList[0] = '%' + keywordList[0] + '%';
        console.log(`element 0 of keywordList is: ${keywordList[0]}`);
        const query = sql`lower(${recipes.name}) like ${keywordList[0]}`;
        for (let i = 1; i< keywordList.length; i++){
            keywordList[i] = keywordList[i].trim();
            keywordList[i] = '%' + keywordList[i] + '%';
            console.log(`element ${i} of keywordList is: ${keywordList[i]}`);
            query.append(sql` and lower(${recipes.name}) like ${keywordList[i]}`);
        }

        
        const readableQuery = db
            .select({recipe: recipes.name, recipe_img: recipes.image_src})
            .from(recipes)
            .where(query)
            .toSQL();
        console.log('SQL where query is: ', readableQuery);

        const executeQuery = db
            .select({recipe: recipes.name, recipe_img: recipes.image_src})
            .from(recipes)
            .where(query);
        const recipeResults = await executeQuery; 

        return res.status(200).json({success: true, data: recipeResults});
    } catch (error){
        return res.status(500).json({ success: false, data: null, message: "Unable to get recipes with those keywords"});
    } 
};

export default getRecipesByKeyword;