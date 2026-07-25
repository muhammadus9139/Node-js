const express = require("express");

const app = express();

const port = 3000;


// Middleware for Age Check

const ageMiddleware = (req, res, next) => {

    const age = 20;

    if(age >= 18){
        next();
    }
    else{
        res.send("You are not allowed");
    }

};


// Middleware for IP Address

const ipMiddleware = (req, res, next) => {

    console.log("User IP Address:");

    console.log(req.ip);

    next();

};


// Apply Middleware

app.use(ipMiddleware);


// Route with age middleware

app.get("/profile", ageMiddleware, (req, res)=>{

    res.send("Welcome to Profile Page");

});


// Home Route

app.get("/", (req,res)=>{

    res.send("Home Page");

});


app.listen(port, ()=>{

    console.log(`Server running on port ${port}`);

});