import express from "express"
import { CategoryController } from "./Category.controller";
const CategoryRouter = express.Router();

CategoryRouter.post('/create',CategoryController.createCategoryController)
CategoryRouter.get('/all',CategoryController.getCategoryController)
export default CategoryRouter;