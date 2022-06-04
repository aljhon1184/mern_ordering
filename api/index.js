import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import productRoute from "./routes/product.js"
import orderRoute from "./routes/order.js"


const app = express();
dotenv.config();


//database connection
const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB");
    }catch(error){
        throw error;
    }
}

//middleware
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/order", orderRoute);



app.listen(8800, ()=>{
    connect();
    console.log("App running");
})