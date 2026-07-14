

import express from "express";
const app=express();

    // External middleware ---- Har request ka log terminal dikhata ha
    import morgan from 'morgan'
    app.use(morgan('dev'))

    app.get("/",(req,resp)=>{
        resp.send("Home page")
    })

    app.get("/login",(req,resp)=>{
        resp.send("Login page")
    })

    app.get("/about",(req,resp)=>{
        resp.send("About page")
    })

           
    // Express route hai, response ko 1 second delay karke bhejta hai.
    app.get("/wait",(req,resp)=>{
        setTimeout(() => {
            resp.send("Result after 1 second")
        }, 1000);
    })

app.listen(3200);
