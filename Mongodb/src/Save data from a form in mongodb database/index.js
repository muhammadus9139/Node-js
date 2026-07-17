import express from "express";
import { MongoClient } from "mongodb";

const dbname = "test";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);


const app = express();
app.use(express.urlencoded({extended:true}))

client.connect().then((connection) => {
    const db = connection.db(dbname)

    app.get("/api", async (req, resp) => {
        const collection = db.collection("school")
        const schools = await collection.find().toArray();
        resp.send(schools)
    })

    // set template engine for students.ejs file
    app.set("view engine", "ejs")
    app.get("/ui", async (req, resp) => {
        const collection = db.collection("school")
        const schools = await collection.find().toArray();
        resp.render('students', { schools })
    })
 
    // these are the new routes we added here
    app.get("/add", (req, resp) => {
        resp.render('add')  // here we use html file data and render here using template engine app.set
    })
 
    app.post("/add-student", async (req, resp) => {
         console.log(req.body); // req.body will use to get input fields submit data, and use after adding express.urlencoded middleware
        // now we have to add that data in database
        const collection = db.collection("school")
        const schools = await collection.insertOne(req.body)
        resp.send("data")
    })
})



app.listen(3200);
