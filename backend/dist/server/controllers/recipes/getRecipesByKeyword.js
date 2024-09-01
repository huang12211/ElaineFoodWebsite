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
const getRecipesByKeyword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    var keywordList = (_a = req.query.keyword) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase().trim().split(',');
    console.log("keywordList: ", keywordList);
    if (keywordList == null || keywordList.length == 0) {
        return res.status(500).json({ success: false, data: null, message: "Keyword list is empty" });
    }
    try {
        keywordList[0] = keywordList[0].trim();
        keywordList[0] = '%' + keywordList[0] + '%';
        console.log(`element 0 of keywordList is: ${keywordList[0]}`);
        const query = (0, drizzle_orm_1.sql) `lower(${schema_1.recipes.name}) like ${keywordList[0]}`;
        for (let i = 1; i < keywordList.length; i++) {
            keywordList[i] = keywordList[i].trim();
            keywordList[i] = '%' + keywordList[i] + '%';
            console.log(`element ${i} of keywordList is: ${keywordList[i]}`);
            query.append((0, drizzle_orm_1.sql) ` and lower(${schema_1.recipes.name}) like ${keywordList[i]}`);
        }
        const readableQuery = db_1.db
            .select({ recipe: schema_1.recipes.name, recipe_img: schema_1.recipes.image_src })
            .from(schema_1.recipes)
            .where(query)
            .toSQL();
        console.log('SQL where query is: ', readableQuery);
        const executeQuery = db_1.db
            .select({ recipe: schema_1.recipes.name, recipe_img: schema_1.recipes.image_src })
            .from(schema_1.recipes)
            .where(query);
        const recipeResults = yield executeQuery;
        return res.status(200).json({ success: true, data: recipeResults });
    }
    catch (error) {
        return res.status(500).json({ success: false, data: null, message: "Unable to get recipes with those keywords" });
    }
});
exports.default = getRecipesByKeyword;
