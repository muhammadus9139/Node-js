const express = require("express");
const multer = require("multer");
const path = require("path");


const app = express();


// Upload folder configuration

const storage = multer.diskStorage({

    destination:function(req,file,cb){

        cb(null,"uploads");

    },


    filename:function(req,file,cb){

        cb(null,Date.now()+path.extname(file.originalname));

    }

});



const upload = multer({

    storage:storage

});




// GET Route

app.get("/",(req,res)=>{

    res.sendFile(__dirname + "/public/upload.html");

});





// POST Route for Upload

app.post("/upload", upload.single("file"), (req,res)=>{


    res.json({

        success:true,

        message:"File Uploaded Successfully",

        file:req.file

    });


});





app.listen(3000,()=>{

    console.log("Server running on port 3000");

});