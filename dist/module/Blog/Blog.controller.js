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
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogController = void 0;
const GlobalError_1 = require("../../globalError/GlobalError");
const Blog_service_1 = require("./Blog.service");
const createBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogInfo = req.body;
        const result = yield Blog_service_1.BlogService.createBlogService(blogInfo);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const GetAllBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Blog_service_1.BlogService.getAllBlogService();
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
const getSingleBLog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const result = yield Blog_service_1.BlogService.GetSingleBlogService(id);
        res.status(200).send({
            action: true,
            result
        });
    }
    catch (error) {
        (0, GlobalError_1.GlobalError)(error, req, res, next);
    }
});
exports.blogController = {
    createBlog,
    GetAllBlog,
    getSingleBLog
};
