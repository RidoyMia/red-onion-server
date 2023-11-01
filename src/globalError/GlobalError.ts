import express,{Request,Response,NextFunction} from "express"
import { Prisma } from "@prisma/client"
export const GlobalError = (error:any,res:Response,req:Request,next:NextFunction)=>{
    let message = ""
    let name = ""
    let status = 400;
    if(error instanceof Prisma.PrismaClientKnownRequestError){
        const messages = error.message.trim().split('\n');
        const eXactError = messages[messages.length - 1]
        message = eXactError
        name = error.name
        status = 600
    }
    else if(error instanceof Prisma.PrismaClientValidationError){
        const messages = error.message.trim().split('\n')
        const eXactError = messages[messages.length - 1]
        message = eXactError
        name = error.message
        status = 800
    }
    else if(error instanceof Error){
        message = error.message
        name = error.name
        status = 400
    }
    res.status(status).send({
        message,
        status,
        name
      })
}
