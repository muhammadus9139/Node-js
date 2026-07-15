
import express from "express";
import userdata from './users.json' with {type:'json'}
const app= express();

app.get("/",(req,resp)=>{
   resp.send(userdata)
   console.log(userdata);
})

app.get("/user/:id",(req,resp)=>{
   const id=req.params.id;
   
   let filterdata=userdata.filter((user)=>{
        return user.id==id
   })
   
   resp.send(filterdata)
})

app.listen(3200);
