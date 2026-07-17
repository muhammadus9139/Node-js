import express from "express";
import { MongoClient } from "mongodb";

const dbname = "test";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

async function dbconnection() {
    
    await client.connect();

    const db = client.db(dbname);
    const collection = db.collection("school");

    const result = await collection.find().toArray();

    console.log(result);
}

dbconnection();

const app = express();

app.listen(3200);
