import { prisma } from "../../Prisma/Prisma";
import { Iuser } from "./User.interface";

const createUserService = async(userData : Iuser) : Promise<Iuser | any> =>{
    const result = await prisma.user.create({
        data : userData
    })
    return result
}
const getSingleUser = async(id : number) : Promise<Iuser | any> =>{
    const result = await prisma.user.findFirst({
        where :{
            id
        },
        include :{
          products : true
        }
    })
    return result
}
const getAlluser = async(options:{}) : Promise<Iuser[] | any> =>{
    //@ts-ignore
    const {page=1,searchText=''} = options
    const result = await prisma.user.findMany({
        include :{
            products : true
        } ,
        where :{
            email : {
                contains : searchText,
                mode : 'insensitive'
            },
            name : {
                contains : searchText,
                mode : 'insensitive'
            }
        },
        take : 10,
        skip : (parseInt(page) -1) * 10
    })
    return result
}
const signInUserService = async(email : string) : Promise<Iuser | any> =>{
    const result = await prisma.user.findUnique({
        where : {
         email
        }
    })
    return result
}

export const UserService = {
    createUserService,
    getSingleUser,
    getAlluser,
    signInUserService
}