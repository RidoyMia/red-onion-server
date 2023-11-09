"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const GlobalError_1 = require("../../globalError/GlobalError");
const Order_service_1 = require("./Order.service");
const getuserId_1 = require("../../Helpers/getUserId/getuserId");
const createOrderController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderInfo = req.body;
        const { email } = orderInfo, others = __rest(orderInfo, ["email"]);
        const userId = yield (0, getuserId_1.getUserId)(orderInfo.email);
        console.log(others.userId = userId);
        console.log(others);
        console.log(orderInfo);
        const result = yield Order_service_1.OrderService.createOrderService(others);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const getUsersOrderController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.email;
        const result = yield Order_service_1.OrderService.getUsersOrderService(email);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const getSingleOrderController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const result = yield Order_service_1.OrderService.getSingleOrderService(id);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const getAllOrdersController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const options = req.query;
        const result = yield Order_service_1.OrderService.getAllOrders(options);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const deleteOrderController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const result = yield Order_service_1.OrderService.deletedOrder(id);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
exports.orderController = {
    createOrderController,
    getUsersOrderController,
    getSingleOrderController,
    getAllOrdersController,
    deleteOrderController
};
