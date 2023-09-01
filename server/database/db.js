import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection =()=>{
    const MONGODB_URL = `mongodb://127.0.0.1:27017/db-todo`
    mongoose.connect(MONGODB_URL , {useNewUrlParser:true});
    mongoose.connection.on('connected',()=>{
        console.log("Database connected Successfully");
    })
    mongoose.connection.on('disconnected', ()=>{
        console.log("Database Disconnected");
    })
    mongoose.connection.on('error', (error)=>{
        console.log('Error while connecting with the DB', error.message);
    })

}
export default Connection;