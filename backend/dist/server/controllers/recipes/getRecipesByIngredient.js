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
//Add the ability for a user to rate a recipe 
const getRecipesByIngredient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    var ingrList = (_a = req.query.ingredient) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase().trim().split(',');
    // console.log("ingrList: ", ingrList);
    if (ingrList == null) {
        return res.status(500).json({ success: false, data: null, message: "Ingredient list is empty" });
    }
    try {
        const readableQuery = db_1.db
            .select({ recipe: schema_1.recipe_ingredient_measUnit.recipe_id,
            count: (0, drizzle_orm_1.sql) `count(${schema_1.recipe_ingredient_measUnit.recipe_id})` })
            .from(schema_1.recipe_ingredient_measUnit)
            .where((0, drizzle_orm_1.inArray)((0, drizzle_orm_1.sql) `lower(${schema_1.recipe_ingredient_measUnit.ingredient_id})`, ingrList))
            .groupBy(schema_1.recipe_ingredient_measUnit.recipe_id)
            .having(({ count }) => (0, drizzle_orm_1.eq)(count, ingrList === null || ingrList === void 0 ? void 0 : ingrList.length))
            .toSQL();
        console.log('SQL where query is: ', readableQuery);
        const recipeResults = yield db_1.db
            .select({ recipe: schema_1.recipe_ingredient_measUnit.recipe_id,
            count: (0, drizzle_orm_1.sql) `count(${schema_1.recipe_ingredient_measUnit.recipe_id})` })
            .from(schema_1.recipe_ingredient_measUnit)
            .where((0, drizzle_orm_1.inArray)((0, drizzle_orm_1.sql) `lower(${schema_1.recipe_ingredient_measUnit.ingredient_id})`, ingrList))
            .groupBy(schema_1.recipe_ingredient_measUnit.recipe_id)
            .having(({ count }) => (0, drizzle_orm_1.eq)(count, ingrList === null || ingrList === void 0 ? void 0 : ingrList.length));
        return res.status(200).json({ success: true, data: recipeResults });
    }
    catch (error) {
        return res.status(500).json({ success: false, data: null, message: "Unable to get recipes with those ingredients" });
    }
});
exports.default = getRecipesByIngredient;
