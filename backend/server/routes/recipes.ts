import { Router } from "express";

//import createRecipe from "../controllers/users/createUser";
import getRecipes from "../controllers/recipes/getRecipes";
// import getUser from "../controllers/users/getUser";
// import updateUser from "../controllers/users/updateUser";
// import deleteUser from "../controllers/users/deleteUser";

const recipesRouter = Router();

//router.post("/", createUser);
recipesRouter.get("/", getRecipes);
// router.get("/:userId", getUser);
// router.patch("/:userId", updateUser);
// router.delete("/:userId", deleteUser);

export default recipesRouter;