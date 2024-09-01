"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createRating_1 = __importDefault(require("../controllers/ratings/createRating"));
const getRatings_1 = __importDefault(require("../controllers/ratings/getRatings"));
const getRatingsByRecipe_1 = __importDefault(require("../controllers/ratings/getRatingsByRecipe"));
// import updateUser from "../controllers/users/updateUser";
const deleteRating_1 = __importDefault(require("../controllers/ratings/deleteRating"));
const ratingRouter = (0, express_1.Router)();
ratingRouter.post("/", createRating_1.default);
ratingRouter.get("/", getRatings_1.default);
ratingRouter.get("/:ratingId", getRatingsByRecipe_1.default);
//ratingRouter.patch("/:ratingId", updateRating);
ratingRouter.delete("/users/:userId/recipes/:recipeName", deleteRating_1.default);
exports.default = ratingRouter;
