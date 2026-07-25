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





// PUT API - Update Data

app.put("/user/:id", async(req,res)=>{


    try{


        let id = req.params.id;


        let result = await User.findByIdAndUpdate(

            id,

            req.body,

            {new:true}

        );


        res.json({

            success:true,

            message:"User Updated Successfully",

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





// DELETE API - Delete Data

app.delete("/user/:id", async(req,res)=>{


    try{


        let id = req.params.id;


        let result = await User.findByIdAndDelete(id);



        res.json({

            success:true,

            message:"User Deleted Successfully",

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





app.listen(3000,()=>{

    console.log("Server running on port 3000");

});