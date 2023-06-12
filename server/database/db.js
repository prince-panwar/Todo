import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = ()=>{
    const MONGODB_URL=`mongodb+srv://${USERNAME}:${PASSWORD}@mern.q0vi3og.mongodb.net/?retryWrites=true&w=majority`;
   
    mongoose.connect(MONGODB_URL, {useNewUrlParser:true});
    mongoose.connection.on('connected', ()=>{
        console.log("Connected successfully");
    })
   
    mongoose.connection.on('disconnected', ()=>{
     console.log('Database connection disconnected');
    
    })
    mongoose.connection.on('error', ()=>{
       console.log('Error while connecting with the database',error.message); 
    })
}
export default Connection;