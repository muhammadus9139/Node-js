const express = require("express");
const mongoose = require("mongoose");


const app = express();

app.use(express.json());


// MongoDB Connection

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(()=>{

    console.log("MongoDB Connected");

})
.catch((error)=>{

    console.log(error);

});



// Schema

const userSchema = new mongoose.Schema({

    name:{
        type:String
    },

    email:{
        type:String
    },

    age:{
        type:Number
    }

});



// Model

const User = mongoose.model("users", userSchema);




// GET API

app.get("/users", async(req,res)=>{


    try{

        let data = await User.find();


        res.json({

            success:true,

            data:data

        });


    }
    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


});





app.listen(3000,()=>{

    console.log("Server running on port 3000");

});