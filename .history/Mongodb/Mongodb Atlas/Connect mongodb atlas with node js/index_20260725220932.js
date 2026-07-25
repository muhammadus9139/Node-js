const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");


dotenv.config();


const url = process.env.MONGO_URL;


const client = new MongoClient(url);



async function connectDB(){

    try{


        await client.connect();


        console.log("MongoDB Atlas Connected Successfully");



        const db = client.db("studentDB");


        const collection = db.collection("users");



        let data = await collection.find().toArray();


        console.log(data);



    }
    catch(error){


        console.log("Connection Error:", error.message);


    }

}



connectDB();