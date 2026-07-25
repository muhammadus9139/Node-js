import express from "express";
import session from "express-session";
import path from "path";


const app = express();


app.use(express.urlencoded({
    extended:true
}));


// Session Middleware

app.use(session({

    secret:"mySecretKey",

    resave:false,

    saveUninitialized:false

}));



// Render HTML Form

app.get("/",(req,res)=>{

    res.sendFile(
        path.join(process.cwd(),"login.html")
    );

});




// Set Session

app.post("/login",(req,res)=>{


    const {name,email}=req.body;


    req.session.userName=name;

    req.session.userEmail=email;



    res.send(`

        <h1>Session Stored</h1>

        <p>Name: ${name}</p>

        <p>Email: ${email}</p>

        <a href="/profile">
        Check Session
        </a>

    `);


});




// Get Session

app.get("/profile",(req,res)=>{


    const name=req.session.userName;

    const email=req.session.userEmail;



    res.send(`

        <h1>User Profile</h1>

        <p>Name: ${name}</p>

        <p>Email: ${email}</p>

    `);


});





app.listen(3000,()=>{

    console.log("Server running on port 3000");

});