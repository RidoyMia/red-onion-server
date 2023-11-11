import express,{Request,Response,NextFunction} from "express"
import jwt, { Secret } from "jsonwebtoken"
import { config } from "../config"
import { GlobalError } from "./GlobalError"
const AuthGuard = (role : string) => async(req:Request,res:Response,next:NextFunction) =>{
      try {
        const email = req.params.email;
        const {accesstoken} = req.headers
      //@ts-ignore
      const verified = await jwt.verify(accesstoken,config.ACCESSTOKEN as Secret)
      if(!verified){
       res.status(401).send({
        message : 'unathorized access'
       })
      }else{
        //@ts-ignore
        if(!verified?.email == email){
            res.status(401).send({
                message : 'unathorized access'
            })
        }
        //@ts-ignore
        if(verified?.role == role && verified?.email === email){
            console.log(verified,'ami');
            next()
        }
        else{
            res.status(401).send({
                message : 'unathorized access'
               })
        }
      }
      } catch (error) {
        GlobalError(error,req,res,next)
      }
}

export default AuthGuard;