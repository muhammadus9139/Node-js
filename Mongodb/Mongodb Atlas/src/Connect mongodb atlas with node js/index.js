import { MongoClient } from "mongodb";

const url = "mongodb+srv://muhammadus9129_db_user:@cluster0.mlyv6gj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const database = "school";
const collection = "student";

const client = new MongoClient(url);

async function dbconnection() {
    await client.connect();
    console.log("Connected");

    const db = client.db(database);
    const collectionResult = db.collection(collection);

    const result = await collectionResult.find().toArray();
    console.log(result);

}

dbconnection();
