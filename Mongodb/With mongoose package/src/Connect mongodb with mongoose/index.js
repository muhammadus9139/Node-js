
import mongoose, { Mongoose } from "mongoose";

async function dbconnection(){
    await mongoose.connect("mongodb://localhost:27017/test");
    const schema= new mongoose.Schema({
        name:String,
        email:String,
        age:Number,
    })

    const schoolmodel=mongoose.model('school',schema);
    const result= await schoolmodel.find();
    console.log(result);
    
}

dbconnection();
