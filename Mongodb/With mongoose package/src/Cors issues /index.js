
import express from "express";
import cors from 'cors'
const app=express();

// cors use ad middleware
app.use(cors());

// simple API
app.get("/",(req,resp)=>{
   resp.send({
     name:"usama",
    age:20,
    email:"muhammadus9129@gmail.com"
   })
})

app.listen(3200)
