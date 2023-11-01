import { PrismaClient } from "@prisma/client"
import app from "./app"
import { config } from "./config"

const prisma = new PrismaClient()
async function main (){
    app.listen(config.port, () => {
        console.log(`Example app listening on port ${config.port}`)
      })
}
main()