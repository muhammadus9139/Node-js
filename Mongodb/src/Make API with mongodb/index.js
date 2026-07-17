import express from "express";
import { MongoClient } from "mongodb";

const dbname = "test";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);


const app = express();
 
  client.connect().then((connection)=>{
     const db= connection.db(dbname)

    app.get("/api",async(req,resp)=>{
        const collection=db.collection("school")
        const schools=await collection.find().toArray();
        resp.send(schools)
    })

     // set template engine for students.ejs file
     app.set("view engine","ejs")
     app.get("/ui",async(req,resp)=>{
        const collection=db.collection("school")
        const schools=await collection.find().toArray();
        resp.render('students',{schools})
    })
 })

 // we will not use here it
//   app.get("/",async(req,resp)=>{

//     await client.connect();

//     const db = client.db(dbname);
//     const collection = db.collection("school");

//     const schools = await collection.find().toArray();

//     console.log(schools);

//     resp.render('students',{schools})
//   })

app.listen(3200);
