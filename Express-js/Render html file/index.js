import express from "express";
import path from "path";

const app = express();

app.get("/", (req,res)=>{

    const filePath = path.join(process.cwd(),"home.html");

    res.sendFile(filePath);

});


app.get("/about",(req,res)=>{

    const filePath = path.join(process.cwd(),"about.html");

    res.sendFile(filePath);

});


app.listen(3000,()=>{
    console.log("Server running on port 3000");
});