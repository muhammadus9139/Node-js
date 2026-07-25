const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");


const app = express();


const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);



async function dbConnect(){

    let result = await client.connect();

    let db = result.db("studentDB");

    return db.collection("users");

}



// Delete API

app.delete("/delete-user/:id", async(req,res)=>{


    const id = req.params.id;


    let collection = await dbConnect();



    let result = await collection.deleteOne({

        _id: new ObjectId(id)

    });



    res.json({

        success:true,

        message:"User Deleted Successfully",

        result:result

    });


});



app.listen(3000,()=>{

    console.log("Server running on port 3000");

});