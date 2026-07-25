const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);



async function dbConnect(){

    let result = await client.connect();

    let db = result.db("studentDB");

    return db.collection("users");

}



// Load Form

app.get("/", (req,res)=>{

    res.sendFile(__dirname + "/public/edit.html");

});




// GET API - Get User By ID

app.get("/user/:id", async(req,res)=>{


    let id = req.params.id;


    let collection = await dbConnect();


    let user = await collection.findOne({

        _id: new ObjectId(id)

    });



    res.json({

        success:true,
        data:user

    });


});





app.listen(3000,()=>{

    console.log("Server running on port 3000");

});