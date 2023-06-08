import express,{Application,Request,Response} from 'express';
import cors from "cors"
import student from "./Router/StudentRouter";



const port:number = 3450

const app:Application = express()
app.use(cors()).use(express.json())
.use("/api/student", student)


const server = app.listen(port, ()=>{
    console.log("Server is ready on", port)
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
