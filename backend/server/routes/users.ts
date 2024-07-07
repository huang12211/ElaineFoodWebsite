import { Router } from "express";

import createUser from "../controllers/users/createUser";
import getUsers from "../controllers/users/getUsers";
import getUserById from "../controllers/users/getUserById";
import getUserbyEmail from "../controllers/users/getUserByEmail";
import updateUserEmail from "../controllers/users/updateUserEmail";
import deleteUserById from "../controllers/users/deleteUserById";
import deleteUserByEmail from "../controllers/users/deleteUserByEmail";

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.get("/:userId", getUserById);
userRouter.get("/email/:userEmail", getUserbyEmail);
userRouter.patch("/:userId", updateUserEmail);
userRouter.delete("/:userId", deleteUserById);
userRouter.delete("/email/:userEmail", deleteUserByEmail);

export default userRouter;