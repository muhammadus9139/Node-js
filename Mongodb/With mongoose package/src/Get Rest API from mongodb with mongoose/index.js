import mongoose, { Model, Mongoose } from "mongoose";
import express from "express";
import studentModel from "./model/studentModel.js";
const app=express();

    await mongoose.connect("mongodb://localhost:27017/test").then(()=>{
        console.log("connected");
        
    })

   
    app.get("/",async(req,resp)=>{
         const model= await studentModel.find();
         resp.send(model)
    })
app.listen(3200);
