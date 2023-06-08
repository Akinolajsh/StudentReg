import express,{Application,Request,Response} from 'express';
import cors from "cors"
import todo from "./Router/TodoRouter"

import student from "./Router/ServicesRouter"



const port:number = 2001;

const app:Application = express()
app.use(cors()).use(express.json()).use('/api/todo/', todo).use('/api/student/', student)


const server = app.listen(port,()=>{
    console.log("hurray server is ready", port)
})

process.on("uncaughtException",(error:any)=>{
    console.log("Server is shutting down due to uncaughtexception")
    console.log("uncaughtException: ", error)
    process.exit(1)
})
process.on("unhandledRejection",(reason)=>{
    console.log("Server is shutting down due to unhandledRejection")
    console.log("unhandledRejection: ", reason)

    server.close(()=>{
        process.exit(1)
    })

    
})