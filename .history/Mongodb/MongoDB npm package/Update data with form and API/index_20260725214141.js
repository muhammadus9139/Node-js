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



// Load Edit Form

app.get("/",(req,res)=>{

    res.sendFile(__dirname + "/public/edit.html");

});




// Update API

app.post("/update-user/:id", async(req,res)=>{


    const id = req.params.id;


    const {name,email,age} = req.body;



    let collection = await dbConnect();



    let result = await collection.updateOne(

        {
            _id:new ObjectId(id)
        },

        {
            $set:{
                name:name,
                email:email,
                age:age
            }
        }

    );



    res.json({

        success:true,

        message:"User Updated Successfully",

        result:result

    });


});





app.listen(3000,()=>{

    console.log("Server running on port 3000");

});