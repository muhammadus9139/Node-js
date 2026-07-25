const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);


async function connectDB() {

    let result = await client.connect();

    console.log("MongoDB Connected Successfully");

    let db = result.db("studentDB");

    console.log("Database Name:", db.databaseName);

}


connectDB();