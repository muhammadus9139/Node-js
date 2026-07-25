const express = require("express");

const app = express();


app.get("/users",(req,res)=>{

    res.json({
        name:"Ali",
        age:20
    });

});


app.listen(3000,()=>{

    console.log("Server running on port 3000");

});