"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../../db/db");
const schema_1 = require("../../../db/schema/schema");
const drizzle_orm_1 = require("drizzle-orm");
//Add your CRUD API below; 
const getIngredientsForRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //read the url after the /recipes/ to get the name of the recipe. 
    let nameOfRecipe = req.params.recipeId.toString().toLowerCase().trim();
    let regex = new RegExp("-", 'g');
    nameOfRecipe = nameOfRecipe.replace(regex, ' ');
    try {
        const query = (0, drizzle_orm_1.sql) `lower(${schema_1.recipe_ingredient_measUnit.recipe_id}) like lower(${nameOfRecipe})`;
        // const readableQuery = db
        //     .select()
        //     .from(recipe_ingredient_measUnit)
        //     .where(query);
        // console.log('SQL where query is: ', readableQuery);
        const executeQuery = db_1.db
            .select()
            .from(schema_1.recipe_ingredient_measUnit)
            .where(query);
        const recipeIngredients = yield executeQuery;
        console.log('recipeIngredients', recipeIngredients);
        if (recipeIngredients == null || recipeIngredients === undefined || recipeIngredients.length == 0) {
            return res.status(500).json({ success: false, data: null, message: `Unable to find recipe with that name: ${nameOfRecipe}` });
        }
        else {
            return res.status(200).json({ success: true, data: recipeIngredients });
        }
    }
    catch (error) {
        return res.status(500).json({ success: false, data: null, message: `Unable to find recipe with that name: ${nameOfRecipe}` });
    }
});
exports.default = getIngredientsForRecipe;
