"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Foods_controller_1 = require("./Foods.controller");
const foodRouter = express_1.default.Router();
foodRouter.post('/create', Foods_controller_1.FoodsController.createFoodsController);
foodRouter.get('/category/:id', Foods_controller_1.FoodsController.getByCategoryController);
foodRouter.get('/all', Foods_controller_1.FoodsController.getAllProducts);
foodRouter.get('/:id', Foods_controller_1.FoodsController.getSingleFoodController);
foodRouter.delete('/:id', Foods_controller_1.FoodsController.deletedProducts);
foodRouter.patch('/:id', Foods_controller_1.FoodsController.updateProductController);
exports.default = foodRouter;
