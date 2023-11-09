import { NextFunction ,Request,Response} from "express";
import { GlobalError } from "../../globalError/GlobalError";
import { orderController } from "../Order/Order.controller";
import { UserService } from "./User.services";
import jwt from "jsonwebtoken"
import {config} from "../../config/index"

const createUserController = async(req:Request,res:Response,next:NextFunction) =>{
    try {
        const userData = req.body;
        console.log(userData,'usedata');
        const result = await UserService.createUserService(userData)
        res.status(200).send({
            action : true,
            result
        })

    } catch (error) {
        GlobalError(error,req,res,next)
    }
}
const getSingleUserController = async(req:Request,res:Response,next:NextFunction) =>{
    try {
        const id = parseInt(req.params.id);
        const result = await UserService.getSingleUser(id)
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}
const getAlluserController = async(req:Request,res:Response,next:NextFunction) =>{
    try {
        const options = req.query;
        const result = await UserService.getAlluser(options)
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}
const signInUserController = async(req:Request,res:Response,next:NextFunction) =>{
    try {
        const email = req.params.email;
        console.log(email);
        const result = await UserService.signInUserService(email);
        
        if(result?.id){
         const accesstoken = await jwt.sign({email : result?.email,role : result?.role,id:result?.id},config.ACCESSTOKEN as string ,{expiresIn : config.ACCESSTOKEN_DATE})
         res.status(200).send({
            action : true,
            accesstoken
         })
        }
    } catch (error) {
        GlobalError(error,req,res,next)
    }

}
export const UserController ={
    createUserController,
    getSingleUserController,
    getAlluserController,
    signInUserController
}