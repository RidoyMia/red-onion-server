import express, { Application,Request,Response, response } from "express"
import cors from "cors"
import { GlobalError } from "./globalError/GlobalError"
import CategoryRouter from "./module/Category/Category.route"
import foodRouter from "./module/Foods/Foods.route"
import BlogRouter from "./module/Blog/Blog.route"
import OrderRouter from "./module/Order/Order.Route"
import userRouter from "./module/User/User.Routes"
const app :Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/v1/category',CategoryRouter)
app.use('/api/v1/foods',foodRouter)
app.use('/api/v1/blogs',BlogRouter)
app.use('/api/v1/order',OrderRouter)
app.use('/api/v1/user',userRouter)
app.use(GlobalError)
app.use((req:Request,res:Response)=>{
  res.status(400).send({
    message : 'route not found'
  })
})



export default app;