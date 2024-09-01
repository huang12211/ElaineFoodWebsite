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
const createRating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id, recipe_name, rating } = req.body;
    if (!user_id) {
        return res.status(400).json({ success: false, data: null, message: "User ID is required" });
    }
    if (!recipe_name) {
        return res.status(400).json({ success: false, data: null, message: "Recipe Name is required" });
    }
    try {
        yield db_1.db.insert(schema_1.users_recipe_reviews).values({ user_id: user_id, recipe_name: recipe_name, rating: rating });
        return res.status(201).json({ success: true, data: { user_id, recipe_name, rating }, message: "Added Successfully" });
    }
    catch (error) {
        return res.status(500).json({ success: false, data: null, message: "Unable to add" });
    }
});
exports.default = createRating;
