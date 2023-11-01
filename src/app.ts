import express, { Application,Request,Response, response } from "express"
import cors from "cors"
import { GlobalError } from "./globalError/GlobalError"
import CategoryRouter from "./module/Category/Category.route"
import foodRouter from "./module/Foods/Foods.route"
const app :Application = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/v1/category',CategoryRouter)
app.use('/api/v1/foods',foodRouter)
app.use(GlobalError)
app.use((req:Request,res:Response)=>{
  res.status(400).send({
    message : 'route not found'
  })
})



export default app;