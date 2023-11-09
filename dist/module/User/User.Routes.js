"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_controller_1 = require("./User.controller");
const userRouter = express_1.default.Router();
userRouter.post('/create', User_controller_1.UserController.createUserController);
userRouter.get('/all', User_controller_1.UserController.getAlluserController);
userRouter.get('/:id', User_controller_1.UserController.getSingleUserController);
exports.default = userRouter;
