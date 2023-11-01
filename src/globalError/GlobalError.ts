import { Prisma } from "@prisma/client"
import express,{Request,Response,NextFunction} from "express"
 
export const GlobalError = ( error:any,req:Request,res:Response,next:NextFunction)=>{
  let message 
  let status = 400
  let name 
  if(error instanceof Prisma.PrismaClientKnownRequestError){
    const  messages = error.message.trim().split('\n')
    const eXactError = messages[messages.length - 1]
    
   status = 400,
   message = eXactError
   name = error.name
  }
 else if(error instanceof Prisma.PrismaClientValidationError){
   const  messages = error.message.trim().split('\n')
     const eXactError = messages[messages.length - 1]
     
    status = 400,
    message = eXactError
    name = error.name
  }
  else if(error instanceof Error){
    message = error.message
    status = 400,
    name = error.name
    
  }
  res.status(status).send({
    message,
    status,
    name
  })
    
}