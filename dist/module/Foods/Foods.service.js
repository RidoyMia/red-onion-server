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
exports.FoodsService = void 0;
const Prisma_1 = require("../../Prisma/Prisma");
const createFoodsService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.foods.create({
        data: data
    });
    return result;
});
const getByCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.foods.findMany({
        where: {
            categoryID: id
        }
    });
    return result;
});
const getSingleFood = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.foods.findMany({
        where: {
            id
        }
    });
    return result;
});
const getAllproduct = (options) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const { page = 1, searchText = "" } = options;
    console.log(searchText);
    const total = yield Prisma_1.prisma.foods.count();
    const result = yield Prisma_1.prisma.foods.findMany({
        where: {
            OR: [
                { category: {
                        name: {
                            contains: searchText,
                            mode: 'insensitive'
                        }
                    } },
                { name: {
                        contains: searchText,
                        mode: 'insensitive'
                    } }, { descriptions: {
                        contains: searchText,
                        mode: 'insensitive'
                    } }
            ]
        }, include: {
            category: true
        },
        skip: (parseInt(page) - 1) * 10,
        take: 10
    });
    return { result, total };
});
const deletedProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.foods.delete({
        where: {
            id
        }
    });
    return result;
});
exports.FoodsService = {
    createFoodsService,
    getByCategory,
    getSingleFood,
    getAllproduct,
    deletedProduct
};
