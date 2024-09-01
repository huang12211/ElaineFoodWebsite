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
//Add the ability for a user to delete a rating for a recipe
const deleteRating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_id = req.params.userId;
    const recipe_name = req.params.recipeName;
    try {
        yield db_1.db.delete(schema_1.users_recipe_reviews).where((0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(schema_1.users_recipe_reviews.user_id, Number(user_id)), (0, drizzle_orm_1.eq)(schema_1.users_recipe_reviews.recipe_name, recipe_name)));
        return res.status(200).json({ success: true, message: "Rating Deleted Successfully" });
    }
    catch (error) {
        return res.status(500).json({ success: false, data: null, message: "Unable to delete rating" });
    }
});
exports.default = deleteRating;
