"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Order_controller_1 = require("./Order.controller");
const OrderRouter = express_1.default.Router();
OrderRouter.post('/create', Order_controller_1.orderController.createOrderController);
OrderRouter.get('/all', Order_controller_1.orderController.getAllOrdersController);
OrderRouter.get('/user/:email', Order_controller_1.orderController.getUsersOrderController);
OrderRouter.get('/:id', Order_controller_1.orderController.getSingleOrderController);
OrderRouter.delete('/:id', Order_controller_1.orderController.deleteOrderController);
exports.default = OrderRouter;
