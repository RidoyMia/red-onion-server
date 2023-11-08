import { prisma } from "../../Prisma/Prisma";
import { Iorder } from "./Order.interface";

const createOrderService = async(order : Iorder) : Promise <Iorder | any> =>{
    const result = await prisma.orders.create({
        data : order
    })
    return result
}


const getUsersOrderService = async(email : string) : Promise<Iorder[] | any> =>{
    const result = await prisma.orders.findMany({
        where : {
            user: {
                email : email
            }
        },
        include : {
            user : true,
            product : true
        }
    })
    return result;
} 
const getSingleOrderService = async(id : number) : Promise <Iorder | any> =>{
    const result = await prisma.orders.findUnique({
        where : {
            id
        },
        include : {
            user : true,
            product : true
        }
    })
    return result
}
const deletedOrder = async(id : number) =>{
    const result = await prisma.orders.delete({
        where : {
            id
        }
    })
    return result
}


const getAllOrders = async(options : {}) :Promise <Iorder[] | any > =>{
    //@ts-ignore
    const {searchtext='',page=1} = options
    const result = await prisma.orders.findMany({
        include : {
            user : true,
            product : true
        },
        where : {
            user : {
                name : {
                    contains : searchtext,
                    mode : 'insensitive'
                },
                email : {
                    contains : searchtext,
                    mode : 'insensitive'
                }
            },
            product : {
                name : {
                    contains : searchtext,
                    mode :'insensitive'
                },
                descriptions : {
                    contains : searchtext,
                    mode : 'insensitive'
                },
               category : {
                name : {
                    contains : searchtext,
                    mode : 'insensitive'
                }
               }
            }
        },take : 10,
        skip : (page -1) * 10

    })
    return result 
}

export const OrderService = {
    createOrderService,
    getUsersOrderService,
    getAllOrders,
    getSingleOrderService,
    deletedOrder
}