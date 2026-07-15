
import express from "express";
import userdata from './users.json' with {type:'json'}
const app= express();

app.get("/",(req,resp)=>{
   resp.send(userdata)
   console.log(userdata);
})

// yaha hm url ma id se check kryn gy 1, 2 etc or specific user detail jo api ma ha wo show ho gi
app.get("/user/:id",(req,resp)=>{
   const id=req.params.id;
   
   let filterdata=userdata.filter((user)=>{
        return user.id==id
   })
   
   resp.send(filterdata)
})

app.listen(3200);
