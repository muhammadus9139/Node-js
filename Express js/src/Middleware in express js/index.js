import express from "express";
const app=express();

// function checkroute(req,resp,next){
//     console.log("User is accessing "+req.url+" page");
//     next(); 
// }

    app.use((req,resp,next)=>{
    console.log("User is accessing "+req.url+" page");
    next(); // this will let through request to next route or middleware using next();
   })

   app.get("",(req,resp)=>{
        resp.send("Home page")
   })

   app.get("/users",(req,resp)=>{
        resp.send("User page")
   })

   app.get("/products",(req,resp)=>{
        resp.send("Product page")
   })
app.listen(4100);
