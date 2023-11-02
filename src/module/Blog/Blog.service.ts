import { prisma } from "../../Prisma/Prisma";
import {Iblog} from "./Blog.interface"

const createBlogService = async(data : Iblog)=>{
    const result = await prisma.blog.createMany({
        data : data
    }) 
    return result
}

const getAllBlogService = async():Promise<Iblog[] | any> =>{
   const result = await prisma.blog.findMany({})
   return result
}
const GetSingleBlogService = async(id:number):Promise<Iblog | any> =>{
    const result = await prisma.blog.findUnique({
        where: {
            id
        }
    })
    return result
}


export const BlogService ={
    createBlogService,
    getAllBlogService,
    GetSingleBlogService
}