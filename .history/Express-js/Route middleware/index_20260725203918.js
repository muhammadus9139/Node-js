const express = require("express");

const app = express();

const port = 3000;


// Route Middleware 1

const checkLogin = (req, res, next) => {

    console.log("Login Middleware");

    const login = true;

    if(login){
        next();
    }
    else{
        res.send("Please Login First");
    }

};


// Route Middleware 2

const checkAdmin = (req, res, next) => {

    console.log("Admin Middleware");

    const admin = true;

    if(admin){
        next();
    }
    else{
        res.send("Access Denied");
    }

};


// Apply two route middleware

app.get(
    "/dashboard",
    checkLogin,
    checkAdmin,
    (req, res)=>{

        res.send("Dashboard Page");

    }
);


// Another route

app.get("/", (req,res)=>{

    res.send("Home Page");

});


app.listen(port, ()=>{

    console.log(`Server running on port ${port}`);

});