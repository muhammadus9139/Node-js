
import mongoose, { Model, Mongoose } from "mongoose";
import express from "express";
import studentModel from "./model/studentModel.js";
const app=express();

    await mongoose.connect("mongodb://localhost:27017/test").then(()=>{
        console.log("connected");
        
    })

   
    app.get("/",async(req,resp)=>{
         const model= await studentModel.find(); // .find() is used to display record from database
         resp.send(model)
    })

    // use middleware to save data using post 
    app.use(express.json()); // we can use req.body using this
    // use post route to save new record
    // add new record
    app.post("/save",async(req,resp)=>{
        console.log(req.body);
        const {name,email,age}=req.body; // here it is destructuring
        if(!name || !email || !age){
           resp.send({
            message:"data not stored",
            success: false,
            storedInfo: null
           })
          return false
        }

        const studentdata= await studentModel.create(req.body); //  .create will used to save new record
        resp.send({
            message:"data stored",
            success: true,
            storedInfo: studentdata
        })
    })

    // update data 
     app.put("/update/:id",async(req,resp)=>{
        console.log(req.body);
        const id=req.params.id;
        
        const model=await studentModel.findByIdAndUpdate(id,{...req.body})
        resp.send({
            message:"data updated",
            success:true,
            storedInfo:null
        })
    })

    // delete data 
    app.delete("/delete/:id",async(req,resp)=>{
        console.log(req.body);
        const id=req.params.id;
        
        const model=await studentModel.findByIdAndDelete(id)
        resp.send({
            message:"data deleted",
            success:true,
            storedInfo:null
        })
    })

    
app.listen(3200);



// dbconnection();
