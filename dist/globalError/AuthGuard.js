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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const GlobalError_1 = require("./GlobalError");
const AuthGuard = (role) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.email;
        const { accesstoken } = req.headers;
        //@ts-ignore
        const verified = yield jsonwebtoken_1.default.verify(accesstoken, config_1.config.ACCESSTOKEN);
        if (!verified) {
            res.status(401).send({
                message: 'unathorized access'
            });
        }
        else {
            //@ts-ignore
            if (!(verified === null || verified === void 0 ? void 0 : verified.email) == email) {
                res.status(401).send({
                    message: 'unathorized access'
                });
            }
            //@ts-ignore
            if ((verified === null || verified === void 0 ? void 0 : verified.role) == role && (verified === null || verified === void 0 ? void 0 : verified.email) === email) {
                console.log(verified, 'ami');
                next();
            }
            else {
                res.status(401).send({
                    message: 'unathorized access'
                });
            }
        }
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
exports.default = AuthGuard;
