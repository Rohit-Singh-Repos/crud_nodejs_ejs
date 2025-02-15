import { APP_CONSTANT } from "./config.js";
import mongoose from "mongoose";
const URL = APP_CONSTANT.connectionURL || 4000;
const connectDB = async()=>{
   const connect = await mongoose.connect(URL);
   if(connect){
    console.log('connection successfull...')
   }else{
    console.log("connection failed...")
   }
}

export default connectDB;
