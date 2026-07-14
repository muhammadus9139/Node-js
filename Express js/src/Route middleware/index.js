
import express from "express";
const app=express();

 // Here we are applying route middleware and 
 // then applying 2 middlewares on one routes

 function ageroutemiddleware(req,resp,next){
    if(!req.query.age || req.query.age<18 ){
        resp.send("You are not allowed to use this website")
    }
    else{
       next(); 
    }
 }

 function urlroutemiddleware(req,resp,next){
    console.log("This request url is "+req.url);
    next();
 }

   app.get("/",(req,resp)=>{
        resp.send("Home page")
    })

    app.get("/login",urlroutemiddleware,(req,resp)=>{
        resp.send("Login page")
    })

    app.get("/users",ageroutemiddleware,urlroutemiddleware,(req,resp)=>{
        resp.send("Users page")
    })

    app.get("/products",ageroutemiddleware,(req,resp)=>{
        resp.send("Products page")
    })
app.listen(3200);
