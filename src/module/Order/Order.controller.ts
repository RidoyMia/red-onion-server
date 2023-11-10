import express,{Request,Response,NextFunction}  from "express"
import { GlobalError } from "../../globalError/GlobalError"
import { OrderService } from "./Order.service";
import { Iorder } from "./Order.interface";
import { getUserId } from "../../Helpers/getUserId/getuserId";
import jwt, { Secret } from "jsonwebtoken"
import { config } from "../../config";
const createOrderController = async(req:Request,res:Response,next:NextFunction) => {
    try {
        const orderInfo = req.body;
        const {email ,...others} = orderInfo;
        const userId = await getUserId(orderInfo.email)
       others.userId = userId;
        console.log(others,'otehre');
        
        const result = await OrderService.createOrderService(others);
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        // GlobalError(error,req,res,next)
    }
}
const getUsersOrderController = async(req:Request,res:Response,next:NextFunction) :Promise<Iorder[] | any>=>{
 try {
    const email = req.params.email;
    // @ts-ignore
    const {accesstoken} = req.headers
   
     //@ts-ignore
    const verified = await jwt.verify(accesstoken,config.ACCESSTOKEN as Secret)
    
    if(!verified){
        console.log('f');
    }else{
        const result = await OrderService.getUsersOrderService(email)
        
        res.status(200).send({
           action : true,
           result
        })
    }
 
 } catch (error) {
    GlobalError(error,req,res,next)
 }
}
const getSingleOrderController =async(req:Request,res:Response,next:NextFunction) :Promise<Iorder | any>=>{
try {
    const id = parseInt(req.params.id);
    const result = await OrderService.getSingleOrderService(id);
    res.status(200).send({
        action : true,
        result
    })
} catch (error) {
    GlobalError(error,req,res,next)
}
}
const getAllOrdersController = async(req:Request,res:Response,next:NextFunction) :Promise<Iorder[] | any>=>{
    try {
        const options = req.query;
        
        const result = await OrderService.getAllOrders(options);
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}
const deleteOrderController = async(req:Request,res:Response,next:NextFunction) :Promise<Iorder | any>=>{
    try {
        const id = parseInt(req.params.id);
        const result = await OrderService.deletedOrder(id)
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}

export const orderController = {
    createOrderController,
    getUsersOrderController,
    getSingleOrderController,
    getAllOrdersController,
    deleteOrderController

}