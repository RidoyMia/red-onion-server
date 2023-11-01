"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Category_controller_1 = require("./Category.controller");
const CategoryRouter = express_1.default.Router();
CategoryRouter.post('/create', Category_controller_1.CategoryController.createCategoryController);
CategoryRouter.get('/all', Category_controller_1.CategoryController.getCategoryController);
exports.default = CategoryRouter;
