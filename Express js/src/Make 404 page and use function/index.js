
import express from "express";
import path from 'path';
import home from "./pages/home.js";

const app=express();
    app.get("/",(req,resp)=>{
        // its the way to find absolute path
        const absPath=path.resolve('view/home.html');
        resp.sendFile(absPath)
    })

    app.get("/login",(req,resp)=>{
        const absPath=path.resolve('view/login.html');
        // sendFile is used to connect a whole html file
        resp.sendFile(absPath)
    })

    app.get("/about",(req,resp)=>{
        const absPath=path.resolve('view/about.html');
        resp.sendFile(absPath)
    })
    
    app.use((req,resp)=>{
        const absPath=path.resolve('view/404.html')
        resp.status(404).sendFile(absPath)
    })
app.listen(3400);
