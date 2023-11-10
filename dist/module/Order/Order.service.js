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
exports.OrderService = void 0;
const Prisma_1 = require("../../Prisma/Prisma");
const createOrderService = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.orders.create({
        data: order
    });
    console.log(result, 'result');
    return result;
});
const getUsersOrderService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.orders.findMany({
        where: {
            user: {
                email: email
            }
        },
        include: {
            user: true,
            product: {
                include: {
                    category: true
                }
            }
        },
    });
    return result;
});
const getSingleOrderService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.orders.findUnique({
        where: {
            id
        },
        include: {
            user: true,
            product: true
        }
    });
    return result;
});
const deletedOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Prisma_1.prisma.orders.delete({
        where: {
            id
        }
    });
    return result;
});
const getAllOrders = (options) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const { searchText = '', page = 1 } = options;
    console.log(searchText);
    const result = yield Prisma_1.prisma.orders.findMany({
        include: {
            user: true,
            product: true
        },
        where: {
            user: {
                name: {
                    contains: searchText,
                    mode: 'insensitive'
                },
                email: {
                    contains: searchText,
                    mode: 'insensitive'
                }
            },
            product: {
                name: {
                    contains: searchText,
                    mode: 'insensitive'
                },
                descriptions: {
                    contains: searchText,
                    mode: 'insensitive'
                },
                category: {
                    name: {
                        contains: searchText,
                        mode: 'insensitive'
                    }
                }
            }
        }, take: 10,
        skip: (page - 1) * 10
    });
    return result;
});
exports.OrderService = {
    createOrderService,
    getUsersOrderService,
    getAllOrders,
    getSingleOrderService,
    deletedOrder
};
