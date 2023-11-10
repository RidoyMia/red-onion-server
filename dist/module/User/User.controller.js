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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const GlobalError_1 = require("../../globalError/GlobalError");
const User_services_1 = require("./User.services");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index_1 = require("../../config/index");
const createUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        console.log(userData, 'usedata');
        const result = yield User_services_1.UserService.createUserService(userData);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const getSingleUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const result = yield User_services_1.UserService.getSingleUser(id);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const getAlluserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const options = req.query;
        const result = yield User_services_1.UserService.getAlluser(options);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const signInUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.email;
        console.log(email);
        const result = yield User_services_1.UserService.signInUserService(email);
        if (result === null || result === void 0 ? void 0 : result.id) {
            const accesstoken = yield jsonwebtoken_1.default.sign({ email: result === null || result === void 0 ? void 0 : result.email, role: result === null || result === void 0 ? void 0 : result.role, id: result === null || result === void 0 ? void 0 : result.id }, index_1.config.ACCESSTOKEN, { expiresIn: index_1.config.ACCESSTOKEN_DATE });
            res.status(200).send({
                action: true,
                accesstoken
            });
        }
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
exports.UserController = {
    createUserController,
    getSingleUserController,
    getAlluserController,
    signInUserController
};
