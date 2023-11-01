import { prisma } from "../../Prisma/Prisma";
import { Ifood } from "./Foods.interface";

const createFoodsService = async(data :Ifood[] ) :Promise<Ifood[] | any> =>{
    const result = await prisma.foods.createMany({
        data 
    })
    return result
}

const getByCategory = async(id : number) : Promise<Ifood[] | any>=>{
    const result = await prisma.foods.findMany({
        where : {
            categoryID : id
        }
    })
    return result
}



export const FoodsService = {
    createFoodsService,
    getByCategory
}