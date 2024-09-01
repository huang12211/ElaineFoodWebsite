import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { recipes } from '../../../db/schema/schema';
import { sql } from 'drizzle-orm';



//Add your CRUD API below; 
const getRecipesByTag = async (req: Request, res: Response) => {
 
    var tagList = req.query.tag?.toString().toLowerCase().trim().split(',');
    console.log("tagList: ", tagList);


    
    if (tagList == null){
        return res.status(500).json({ success: false, data: null, message: "Tag list is empty"});
    }

    try{
        tagList[0] = tagList[0].trim();
        tagList[0] = '%' + tagList[0] + '%';
        console.log(`element 0 of tagList is: ${tagList[0]}`);
        const query = sql`lower(${recipes.tags}) like ${tagList[0]}`;
        for (let i = 1; i< tagList.length; i++){
            tagList[i] = tagList[i].trim();
            tagList[i] = '%' + tagList[i] + '%';
            console.log(`element ${i} of keywordList is: ${tagList[i]}`);
            query.append(sql` and lower(${recipes.tags}) like ${tagList[i]}`);
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
        return res.status(500).json({ success: false, data: null, message: "Unable to get recipes with those tags"});
    } 
};

export default getRecipesByTag;