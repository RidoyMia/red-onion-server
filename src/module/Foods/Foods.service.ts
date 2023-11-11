import { Prisma } from "@prisma/client";
import { prisma } from "../../Prisma/Prisma";
import { Ifood } from "./Foods.interface";
import { GlobalError } from "../../globalError/GlobalError";

const createFoodsService = async(data:Ifood ) :Promise<Ifood[] | any> =>{
    const result = await prisma.foods.create({
        data :data
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
const getSingleFood = async(id : number) : Promise<Ifood[] | any>=>{
    const result = await prisma.foods.findMany({
        where : {
            id
        }
    })
    return result
}

const getAllproduct =async(options:object): Promise<any> =>{
    //@ts-ignore
    const {page=1,searchText=""} = options;
const total = await prisma.foods.count();
const result = await prisma.foods.findMany({
    where : {
        category : {
            name : {
                contains : searchText,
                mode : 'insensitive'
            }
        },
        name : {
            contains : searchText,
            mode : 'insensitive'
        },descriptions: {
            contains : searchText,
            mode : 'insensitive'
        }
    },skip : (parseInt(page) - 1) * 10,
    take : 10
})
return {result,total}
}



export const FoodsService = {
    createFoodsService,
    getByCategory,
    getSingleFood,
    getAllproduct
}