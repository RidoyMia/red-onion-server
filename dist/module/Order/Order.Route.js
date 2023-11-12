"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Order_controller_1 = require("./Order.controller");
const AuthGuard_1 = __importDefault(require("../../globalError/AuthGuard"));
const OrderRouter = express_1.default.Router();
OrderRouter.post('/create', Order_controller_1.orderController.createOrderController);
OrderRouter.get('/all', Order_controller_1.orderController.getAllOrdersController);
OrderRouter.get('/all/count', Order_controller_1.orderController.getAllOrdersCountController);
OrderRouter.get('/chart/:email', (0, AuthGuard_1.default)('admin'), Order_controller_1.orderController.getOrderByMonthController);
OrderRouter.get('/user/:email', Order_controller_1.orderController.getUsersOrderController);
OrderRouter.get('/:id', Order_controller_1.orderController.getSingleOrderController);
OrderRouter.patch('/:id', Order_controller_1.orderController.orderPaymentController);
OrderRouter.delete('/:id', Order_controller_1.orderController.deleteOrderController);
exports.default = OrderRouter;
