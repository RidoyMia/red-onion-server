import express from "express"
import { UserController } from "./User.controller"
const userRouter = express.Router()
userRouter.post('/create',UserController.createUserController)
userRouter.get('/all',UserController.getAlluserController)
userRouter.post('/:email',UserController.signInUserController)
userRouter.get('/:id',UserController.getSingleUserController)
export default userRouter;