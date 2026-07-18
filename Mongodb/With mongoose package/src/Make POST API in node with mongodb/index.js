
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

    // use middleware to save data using post 
    app.use(express.json());

    app.post("/save",async(req,resp)=>{
        console.log(req.body);
        const {name,email,age}=req.body
        if(!name || !email || !age){
           resp.send({
            message:"data not stored",
            success: false,
            storedInfo: null
           })
          return false
        }
        
        const studentdata= await studentModel.create(req.body) 
        resp.send({
            message:"data stored",
            success: true,
            storedInfo: studentdata
        })
    })
app.listen(3200);
