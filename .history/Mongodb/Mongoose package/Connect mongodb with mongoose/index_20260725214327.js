const mongoose = require("mongoose");


// MongoDB Connection

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(()=>{

    console.log("MongoDB Connected Successfully");

})
.catch((error)=>{

    console.log(error);

});



// Create Schema

const userSchema = new mongoose.Schema({

    name:String,

    email:String,

    age:Number

});



// Create Model

const User = mongoose.model("users", userSchema);



// Fetch Data

async function getData(){

    let data = await User.find();

    console.log(data);

}


getData();