const express = require("express");
const { MongoClient } = require("mongodb");


const app = express();


// JSON data read karne ke liye
app.use(express.json());


const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);



async function dbConnect(){

    let result = await client.connect();

    let db = result.db("studentDB");

    return db.collection("users");

}



// POST API

app.post("/add-user", async(req,res)=>{


    try{


        const {name,email,age} = req.body;



        // Basic Validation

        if(!name || !email || !age){

            return res.status(400).json({

                success:false,
                message:"All fields are required"

            });

        }



        let collection = await dbConnect();



        let result = await collection.insertOne({

            name:name,
            email:email,
            age:age

        });



        res.status(201).json({

            success:true,
            message:"User Added Successfully",
            data:result

        });



    }
    catch(error){


        res.status(500).json({

            success:false,
            message:error.message

        });


    }


});





app.listen(3000,()=>{

    console.log("Server running on port 3000");

});