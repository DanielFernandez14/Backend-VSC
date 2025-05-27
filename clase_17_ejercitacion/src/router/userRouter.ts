import { Router } from "express"
import { Request, Response } from "express"
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controller/userController"

const userRouter = Router()

userRouter.get("/", getAllUsers)
userRouter.get("/:id", getUserById)
userRouter.post("/", createUser)
userRouter.put("/:id", updateUser)
userRouter.delete("/:id", deleteUser)

export { userRouter }
