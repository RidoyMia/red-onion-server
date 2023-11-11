import express, { NextFunction,Request,Response } from "express"
import { Ifood } from "./Foods.interface"
import { GlobalError } from "../../globalError/GlobalError"
import { FoodsService } from "./Foods.service";
const createFoodsController = async(req:Request,res:Response,next:NextFunction):Promise<Ifood[] | any> =>{
    try {
        const foods = req.body;
        const result = await FoodsService.createFoodsService(foods);
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}

const getByCategoryController = async(req:Request,res:Response,next:NextFunction):Promise<Ifood[] | any> =>{
    try {
        const id = parseInt(req.params.id);
        const result = await FoodsService.getByCategory(id);
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}
const getSingleFoodController = async(req:Request,res:Response,next:NextFunction):Promise<Ifood[] | any> =>{
    try {
        const id = parseInt(req.params.id);
        const result = await FoodsService.getSingleFood(id);
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}
const getAllProducts = async(req:Request,res:Response,next:NextFunction):Promise<Ifood[] | any> =>{
    try {
        const options = req.query;
        console.log(options);
        const result = await FoodsService.getAllproduct(options);
        res.status(200).send({
            action : true,
            result
        })
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}


export const FoodsController = {
    createFoodsController,
    getByCategoryController,
    getSingleFoodController,
    getAllProducts
}