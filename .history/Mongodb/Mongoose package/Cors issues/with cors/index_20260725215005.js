const express = require("express");
const cors = require("cors");


const app = express();


// Enable CORS

app.use(cors());


app.use(express.json());



app.get("/users",(req,res)=>{


    res.json({

        success:true,

        users:[
            {
                name:"Ali",
                age:20
            },
            {
                name:"Ahmed",
                age:22
            }
        ]

    });


});



app.listen(3000,()=>{

    console.log("Server running on port 3000");

});