import express, { NextFunction,Request,Response } from "express";
import { Iblog } from "./Blog.interface";
import { GlobalError } from "../../globalError/GlobalError";
import { BlogService } from "./Blog.service";
// this is
const createBlog = async(req:Request,res:Response,next:NextFunction) : Promise<Iblog[] | any> =>{
    try {
        const blogInfo = req.body;
        const result = await BlogService.createBlogService(blogInfo);
        res.status(200).send({
            action : true,
            result
        })
        
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}
const GetAllBlog = async(req:Request,res:Response,next:NextFunction) : Promise<Iblog[] | any> =>{
    try {
        
        const result = await BlogService.getAllBlogService();
        res.status(200).send({
            action : true,
            result
        })
        
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}
const getSingleBLog = async(req:Request,res:Response,next:NextFunction) : Promise<Iblog[] | any> =>{
    try {
        const id = parseInt(req.params.id)
        const result = await BlogService.GetSingleBlogService(id);
        res.status(200).send({
            action : true,
            result
        })
        
    } catch (error) {
        GlobalError(error,req,res,next)
    }
}


export const blogController ={
    createBlog,
    GetAllBlog,
    getSingleBLog
}