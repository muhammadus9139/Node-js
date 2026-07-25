const express = require("express");
const mongoose = require("mongoose");


const app = express();


// JSON data read karne ke liye
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
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    }

});



// Model

const User = mongoose.model("users", userSchema);




// POST API

app.post("/add-user", async(req,res)=>{


    try{


        const {name,email,age} = req.body;



        // Basic Validation

        if(!name || !email || !age){

            return res.status(400).json({

                success:false,
                message:"All fields are required"

            });

        }



        // Store data in MongoDB

        let user = new User({

            name:name,
            email:email,
            age:age

        });



        let result = await user.save();



        res.status(201).json({

            success:true,
            message:"User Added Successfully",
            data:result

        });


    }
    catch(error){


        res.status(500).json({

            success:false,
            message:error.message

        });


    }


});




// GET API (Fetch Data)

app.get("/users", async(req,res)=>{


    let data = await User.find();


    res.json({

        success:true,
        data:data

    });


});





app.listen(3000,()=>{

    console.log("Server running on port 3000");

});