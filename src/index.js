import mongoose  from "mongoose";
import {DB_NAME} from "./constants.js";
import connect_DB from "./db/index.js";
import  dotenv from 'dotenv'

dotenv.config({
    path: './env'
})

connect_DB();



















// (async ()=>{
//     try{
//         await mongoose.connnect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log(error)
//             throw error
//         })
//     }
//     catch(error){
//          console.log(error)
//          throw error
//     }
// })()




