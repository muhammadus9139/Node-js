const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);


// Middleware
app.use(express.urlencoded({extended:true}));


// Load HTML Form
app.get("/", (req,res)=>{

    res.sendFile(__dirname + "/public/form.html");

});



// MongoDB Connection

async function dbConnect(){

    let result = await client.connect();

    let db = result.db("studentDB");

    return db.collection("users");

}



// Save Data API

app.post("/save-user", async(req,res)=>{


    let collection = await dbConnect();


    let data = {
        name:req.body.name,
        email:req.body.email,
        age:req.body.age
    };


    let result = await collection.insertOne(data);


    res.send({
        success:true,
        message:"Data Saved Successfully",
        result:result
    });


});



app.listen(3000,()=>{

    console.log("Server running on port 3000");

});