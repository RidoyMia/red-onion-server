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
exports.categoryService = void 0;
const Prisma_1 = require("../../Prisma/Prisma");
const data = [
    {
        "name": "Breakfast"
    },
    {
        "name": "Launch"
    },
    {
        "name": "Dinner"
    }
];
const createCategoryServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.category.createMany({
        data: data
    });
    return result;
});
const getCategoryServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.category.findMany();
    return result;
});
exports.categoryService = {
    createCategoryServices,
    getCategoryServices
};
