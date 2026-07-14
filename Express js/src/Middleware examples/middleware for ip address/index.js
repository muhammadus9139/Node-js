import express from "express";
const app=express();


function ipcheck(req,resp,next){
    const ip= req.socket.remoteAddress
    console.log(ip);
    if(ip.includes('192.168.0.105')){
        resp.send("Alert! You cannot access this page")
    }
    else{
        next();
    }
}

  app.use(ipcheck)

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
