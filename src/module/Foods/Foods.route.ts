import express from "express"
import { FoodsController } from "./Foods.controller"
const foodRouter = express.Router()

foodRouter.post('/create',FoodsController.createFoodsController)
foodRouter.get('/category/:id',FoodsController.getByCategoryController)
foodRouter.get('/all',FoodsController.getAllProducts)
foodRouter.get('/:id',FoodsController.getSingleFoodController)


export default foodRouter;