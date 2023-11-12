import { prisma } from "../../Prisma/Prisma";
import { Iorder } from "./Order.interface";

const createOrderService = async(order : Iorder) : Promise <Iorder | any> =>{
    
    const result = await prisma.orders.create({
        data : order
    })
    console.log(result,'result');
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
            
            product : {
                
                include : {
                    category : true
                }
            }
            
            
        },
        
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
    const {searchText='',page=1} = options
    console.log(searchText);
    const result = await prisma.orders.findMany({
        include : {
            user : true,
            product : {
                include : {
                    category : true
                }
            }
        },
        where : {
            user : {
                name : {
                    contains : searchText,
                    mode : 'insensitive'
                },
                email : {
                    contains : searchText,
                    mode : 'insensitive'
                }
            },
            product : {
                name : {
                    contains : searchText,
                    mode :'insensitive'
                },
                descriptions : {
                    contains : searchText,
                    mode : 'insensitive'
                },
               category : {
                name : {
                    contains : searchText,
                    mode : 'insensitive'
                }
               }
            }
        },take : 10,
        skip : (page -1) * 10

    })
    const total = await prisma.orders.count()
    return {result,total} 
}

const orderPayment = async(id : number) =>{
    const result = await prisma.orders.update({
        where : {
            id
        },
        data : {
            payment : true
        }
    })
}


const getOrderByMonth = async (): Promise<Iorder[] | any> => {
    const result = await prisma.$queryRaw`
      SELECT 
        EXTRACT (YEAR FROM "createdAt") :: integer as year,
        EXTRACT (MONTH FROM "createdAt") :: integer as month,
        EXTRACT (DAY FROM "createdAt") :: integer as day,
        SUM("needQuantity")::integer as total_quantity
      FROM orders
      GROUP BY 
        year, month, day
      ORDER BY year, month
    `;
    return result;
  };

  const getAllOrdersCount = async():Promise< any > =>{
    const total = await prisma.orders.count()
    return total
  }
  
export const OrderService = {
    createOrderService,
    getUsersOrderService,
    getAllOrders,
    getSingleOrderService,
    deletedOrder,
    orderPayment,
    getOrderByMonth,
    getAllOrdersCount
}