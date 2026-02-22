 import mongoose, { mongo }  from "mongoose";
 import { DB_NAME } from "../constants.js";


 const connect_DB= async ()=>{
    try{
     const connectInstance= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
     console.log(`\n MONGODB CONNECTED!! DB HOST:${connectInstance.connection.host}`);
    }
    catch(error){

    }
 }



 export default  connect_DB;