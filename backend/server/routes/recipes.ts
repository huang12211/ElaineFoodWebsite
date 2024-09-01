import { Router } from "express";

//import createRecipe from "../controllers/users/createUser";
import getRecipes from "../controllers/recipes/getRecipes";
import getRecipesByIngredient from "../controllers/recipes/getRecipesByIngredient";
import getRecipesByKeyword from "../controllers/recipes/getRecipesByKeyword";
import getRecipesByName from "../controllers/recipes/getRecipesByName";
import getRecipesByTag from "../controllers/recipes/getRecipesByTag";
// import updateUser from "../controllers/users/updateUser";
// import deleteUser from "../controllers/users/deleteUser";

const recipesRouter = Router();

//router.post("/", createUser);
recipesRouter.get("/", getRecipes);
recipesRouter.get("/searchIngr", getRecipesByIngredient);
recipesRouter.get("/searchKeyword", getRecipesByKeyword);
recipesRouter.get("/searchName", getRecipesByName);
recipesRouter.get("/searchTag", getRecipesByTag);
// router.get("/:userId", getUser);
// router.patch("/:userId", updateUser);
// router.delete("/:userId", deleteUser);

export default recipesRouter;