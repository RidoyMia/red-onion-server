import dotenv from "dotenv"
import path from "path"

dotenv.config({path : path.join(process.cwd(),'.env')})


export const  config  = {
   port : process.env.PORT,
   ACCESSTOKEN : process.env.ACCESSTOKEN,
   ACCESSTOKEN_DATE : process.env.ACCESSTOKEN_DATE
   
   
}