import express from "express";
import path from "path";


const app = express();

const PORT = 3000;


// EJS setup

app.set("view engine", "ejs");

app.set(
    "views",
    path.join(process.cwd(), "views")
);


// Users data

const users = [

    {
        id:1,
        name:"Ali",
        email:"ali@gmail.com"
    },

    {
        id:2,
        name:"Ahmed",
        email:"ahmed@gmail.com"
    },

    {
        id:3,
        name:"Usama",
        email:"usama@gmail.com"
    }

];



// Users list page

app.get("/", (req,res)=>{


    res.render("users",{
        users
    });


});




// Dynamic Route

app.get("/user/:id",(req,res)=>{


    const id = req.params.id;


    const user = users.find(
        user => user.id == id
    );


    res.render("profile",{
        user
    });


});



app.listen(PORT,()=>{

    console.log(`Server running on port ${PORT}`);

});