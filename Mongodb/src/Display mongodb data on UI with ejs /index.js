import express from "express";
import { MongoClient } from "mongodb";

const dbname = "test";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);


const app = express();
  // set template engine for students.ejs file
  app.set("view engine","ejs")
  app.get("/",async(req,resp)=>{

    await client.connect();

    const db = client.db(dbname);
    const collection = db.collection("school");

    const schools = await collection.find().toArray();

    console.log(schools);

    resp.render('students',{schools})
  })

app.listen(3200);
