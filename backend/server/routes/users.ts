import { Router } from "express";

import createUser from "../controllers/users/createUser";
import getUsers from "../controllers/users/getUsers";
import getUserById from "../controllers/users/getUserById";
// import getUser from "../controllers/users/getUser";
// import updateUser from "../controllers/users/updateUser";
import deleteUserById from "../controllers/users/deleteUserById";
//import deleteUserByEmail from "../controllers/users/deleteUserByEmail";

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.get("/:userId/", getUsers);
// router.get("/:userId", getUser);
// router.patch("/:userId", updateUser);
userRouter.delete("/:userId/", deleteUserById);
//userRouter.delete("/:email/", deleteUserByEmail);

export default userRouter;