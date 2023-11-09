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
exports.UserService = void 0;
const Prisma_1 = require("../../Prisma/Prisma");
const createUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.user.create({
        data: userData
    });
    return result;
});
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.user.findFirst({
        where: {
            id
        },
        include: {
            products: true
        }
    });
    return result;
});
const getAlluser = (options) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const { page = 1, searchText = '' } = options;
    const result = yield Prisma_1.prisma.user.findMany({
        include: {
            products: true
        },
        where: {
            email: {
                contains: searchText,
                mode: 'insensitive'
            },
            name: {
                contains: searchText,
                mode: 'insensitive'
            }
        },
        take: 10,
        skip: (parseInt(page) - 1) * 10
    });
    return result;
});
exports.UserService = {
    createUserService,
    getSingleUser,
    getAlluser
};
