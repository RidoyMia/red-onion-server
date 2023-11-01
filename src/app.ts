import express, { Application,Request,Response, response } from "express"
import cors from "cors"
const app :Application = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use((req:Request,res:Response)=>{
  res.status(400).send({
    message : 'route not found'
  })
})



export default app;