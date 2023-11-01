import { prisma } from "../../Prisma/Prisma";
import { Icategory } from "./Category.interface";
const data = [
    {
        "name" : "Breakfast"
    },
    {
        "name" : "Launch"
    },
    {
        "name" : "Dinner"
    }
]
const createCategoryServices = async():Promise<Icategory | any> =>{
    const result = await prisma.category.createMany({
        data : data
    })
    return result
}
const getCategoryServices = async():Promise<Icategory | any> =>{
    const result = await prisma.category.findMany()
    return result
}



export const categoryService = {
    createCategoryServices,
    getCategoryServices
}