import { Router } from "express";

import createRating from "../controllers/ratings/createRating";
import getRatings from "../controllers/ratings/getRatings";
import getRatingsByRecipe from "../controllers/ratings/getRatingsByRecipe";
// import updateUser from "../controllers/users/updateUser";
import deleteRating from "../controllers/ratings/deleteRating";

const ratingRouter = Router();

ratingRouter.post("/", createRating);
ratingRouter.get("/", getRatings);
ratingRouter.get("/:ratingId", getRatingsByRecipe);

//ratingRouter.patch("/:ratingId", updateRating);
ratingRouter.delete("/users/:userId/recipes/recipeId", deleteRating);


export default ratingRouter;