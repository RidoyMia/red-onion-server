import { prisma } from "../../Prisma/Prisma";
import { Iuser } from "../../module/User/User.interface";

export const getUserId = async(email : string)  =>{
    const result = await prisma.user.findFirst({
        where : {
            email 
        }
    })
    return result?.id
}