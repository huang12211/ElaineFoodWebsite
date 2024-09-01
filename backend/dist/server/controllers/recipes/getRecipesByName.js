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
const getRecipesByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log("You're in the getRecipesByName function");
    var recipeList = (_a = req.query.recipeName) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase().trim().split(',');
    console.log("recipeList: ", recipeList);
    if (recipeList == null || recipeList.length == 0) {
        return res.status(500).json({ success: false, data: null, message: "Recipe list is empty" });
    }
    try {
        recipeList[0] = recipeList[0].trim();
        recipeList[0] = '%' + recipeList[0] + '%';
        console.log(`element 0 of recipeList is: ${recipeList[0]}`);
        const query = (0, drizzle_orm_1.sql) `lower(name) like ${recipeList[0]}`;
        for (let i = 1; i < recipeList.length; i++) {
            recipeList[i] = recipeList[i].trim();
            recipeList[i] = '%' + recipeList[i] + '%';
            console.log(`element ${i} of recipeList is: ${recipeList[i]}`);
            query.append((0, drizzle_orm_1.sql) ` or lower(name) like ${recipeList[i]}`);
        }
        const readableQuery = db_1.db
            .select()
            .from(schema_1.recipes)
            .where(query)
            .toSQL();
        console.log('SQL where query is: ', readableQuery);
        const executeQuery = db_1.db
            .select()
            .from(schema_1.recipes)
            .where(query);
        const recipeResults = yield executeQuery;
        return res.status(200).json({ success: true, data: recipeResults, message: "Final List of Recipes that should be Recipe Cards" });
    }
    catch (error) {
        return res.status(500).json({ success: false, data: null, message: "Unable to get recipes with those recipe names" });
    }
});
exports.default = getRecipesByName;
