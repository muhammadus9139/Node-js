const express = require("express");
const { MongoClient } = require("mongodb");


const app = express();

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);


async function dbConnect(){

    let result = await client.connect();

    let db = result.db("studentDB");

    return db.collection("users");

}


// GET API

app.get("/users", async(req,res)=>{

    let collection = await dbConnect();

    let data = await collection.find().toArray();


    res.json({
        success:true,
        data:data
    });

});



app.listen(3000,()=>{

    console.log("Server running on port 3000");

});