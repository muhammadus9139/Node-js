import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

const app = express();

app.use(express.urlencoded({extended:true}));

app.use(cookieParser());


app.get("/", (req,res)=>{

    res.sendFile(
        path.join(process.cwd(),"login.html")
    );

});


// Set Cookies

app.post("/login",(req,res)=>{

    const {name,email}=req.body;


    res.cookie("userName",name);

    res.cookie("userEmail",email);


    res.send(`
        <h1>Cookies Stored</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <a href="/profile">Check Cookies</a>
    `);

});


// Get Cookies

app.get("/profile",(req,res)=>{


    const name=req.cookies.userName;
    const email=req.cookies.userEmail;


    res.send(`

        <h1>User Profile</h1>

        <p>Name: ${name}</p>

        <p>Email: ${email}</p>

    `);


});


app.listen(3000,()=>{

    console.log("Server running on port 3000");

});