import express from "express";
const app=express();

function agecheck(req,resp,next){
    if(!req.query.age || req.query.age<18){
        resp.send("Alert! You cannot access this page")
    }
    else{
        next();
    }
}

  app.use(agecheck)

 app.get("/",(req,resp)=>{
    resp.send("Home page")
  })

  app.get("/login",(req,resp)=>{
    resp.send("Login page")
  })

  app.get("/admin",(req,resp)=>{
    resp.send("Admin page")
  })
app.listen(3400);
