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
//Add your CRUD API below;
//Add the ability for a user to rate a recipe 
const getRecipes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allRecipes = yield db_1.db.select().from(schema_1.recipes);
        // console.log(allRecipes);
        return res.status(200).json({ success: true, data: allRecipes });
    }
    catch (error) {
        return res.status(500).json({ success: false, data: error, message: "Unable to get all recipes" });
    }
});
exports.default = getRecipes;
