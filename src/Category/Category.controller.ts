
import express,{Request,Response,NextFunction} from "express"
import { Icategory } from "./Category.interface"
import { GlobalError } from "../globalError/GlobalError"
import { categoryService } from "./Category.services"

const createCategoryController = async(req:Request,res:Response,next:NextFunction) :Promise<Icategory | any> =>{
    try {
        const data = req.body;
     const result = await categoryService.createCategoryServices(data);
     res.status(200).send({
        action : true,
        result
     })
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}

const getCategoryController = async(req:Request,res:Response,next:NextFunction) :Promise<Icategory | any> =>{
    try {
       
     const result = await categoryService.getCategoryServices();
     res.status(200).send({
        action : true,
        result
     })
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}

export const CategoryController = {
    createCategoryController,
    getCategoryController
}