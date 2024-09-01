// import { Request, Response } from 'express';
// import { db } from '../../../db/db';
// import { recipes, recipe_ingredient_measUnit } from '../../../db/schema/schema';
// import { sql } from 'drizzle-orm';



// //Add your CRUD API below; 
// const getRecipesByKeyword = async (req: Request, res: Response) => {
 
//     var keywordList = req.query.keyword?.toString().toLowerCase().trim().split(',');
//     var tagList = req.query.tag?.toString().toLowerCase().trim().split(',');
//     var ingrList = req.query.ingredient?.toString().toLowerCase().trim().split(',');
//     console.log("keywordList: ", keywordList);


    
//     if (keywordList == null || keywordList.length == 0){
//         return res.status(500).json({ success: false, data: null, message: "Keyword list is empty"});
//     }
//     if (tagList == null || tagList.length == 0){
//         return res.status(500).json({success: false, data: null, message: "Tag List is empty"});
//     }
//     if (ingrList == null || ingrList.length == 0){
//         return res.status(500).json({success: false, data: null, message: "Ingredient list is empty"});
//     }

//     try{
//         if (keywordList != null && keywordList.length != 0){
//             keywordList[0] = keywordList[0].trim();
//             keywordList[0] = '%' + keywordList[0] + '%';
//             console.log(`element 0 of keywordList is: ${keywordList[0]}`);
//             let query = sql`lower(${recipes.name}) like ${keywordList[0]}`;
//             for (let i = 1; i< keywordList.length; i++){
//                 keywordList[i] = keywordList[i].trim();
//                 keywordList[i] = '%' + keywordList[i] + '%';
//                 console.log(`element ${i} of keywordList is: ${keywordList[i]}`);
//                 query.append(sql` and lower(${recipes.name}) like ${keywordList[i]}`);
//             }
//         }
//         if (tagList != null && tagList.length != 0){
//             if(keywordList == null || keywordList.length == 0){
//                 tagList[0] = tagList[0].trim();
//                 tagList[0] = '%' + tagList[0] + '%';
//                 console.log(`element 0 of tagList : ${tagList[0]}`);
//                 let query = sql`lower(${recipes.tags}) like ${tagList[0]}`;
//                 for (let i = 1; i< tagList.length; i++){
//                     tagList[i] = tagList[i].trim();
//                     tagList[i] = '%' + tagList[i] + '%';
//                     console.log(`element ${i} of tagList is: ${tagList[i]}`);
//                     query.append(sql` and lower(${recipes.tags}) like ${tagList[i]}`);
//                 }
//             }
//             else{
//                 for (let i = 0; i< tagList.length; i++){
//                     tagList[i] = tagList[i].trim();
//                     tagList[i] = '%' + tagList[i] + '%';
//                     console.log(`element ${i} of tagList is: ${tagList[i]}`);
//                     query.append(sql` and lower(${recipes.tags}) like ${tagList[i]}`);
//                 }
//             }
//         }
//         if (ingrList != null || ingrList.length != 0){
//             if(keywordList == null || keywordList.length == 0){
//                 if (tagList == null || tagList.length == 0){
//                     ingrList[0] = ingrList[0].trim();
//                     ingrList[0] = '%' + ingrList[0] + '%';
//                     console.log(`element 0 of ingrList : ${ingrList[0]}`);
//                     let query = sql`lower(${recipe_ingredient_measUnit.recipe_id}) like ${tagList[0]}`;
//                     for (let i = 1; i< tagList.length; i++){
//                         tagList[i] = tagList[i].trim();
//                         tagList[i] = '%' + tagList[i] + '%';
//                         console.log(`element ${i} of tagList is: ${tagList[i]}`);
//                         query.append(sql` and lower(${recipes.tags}) like ${tagList[i]}`);
//                     }
//                 }
//             }
//         }


        
//         const readableQuery = db
//             .select({recipe: recipes.name, recipe_img: recipes.image_src})
//             .from(recipes)
//             .where(query)
//             .toSQL();
//         console.log('SQL where query is: ', readableQuery);

//         const executeQuery = db
//             .select({recipe: recipes.name, recipe_img: recipes.image_src})
//             .from(recipes)
//             .where(query);
//         const recipeResults = await executeQuery; 

//         return res.status(200).json({success: true, data: recipeResults});
//     } catch (error){
//         return res.status(500).json({ success: false, data: null, message: "Unable to get recipes with those keywords"});
//     } 
// };

// export default getRecipesByKeyword;