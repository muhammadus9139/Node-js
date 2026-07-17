import express from "express";
import { MongoClient } from "mongodb";

const dbname = "test";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);


const app = express();

//middlewares
app.use(express.urlencoded({extended:true})) // middleware to get data from form
app.use(express.json()); // middleware to get data from thunderclient post route body


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
 
    // this route is associated with add.ejs to add new user info after submit form
    app.post("/add-student", async(req, resp) => {
         console.log(req.body); // req.body will use to get input fields submit data, and use after adding express.urlencoded middleware
        // now we have to add that data in database
        const collection = db.collection("school")
        const schools = await collection.insertOne(req.body)
        resp.send("data")
    })

    // this route use with thunder client , we will use that and add info from thunder client and add new user 
    app.post("/add-student-api",async(req,resp)=>{
        console.log(req.body);
        const {name,age,email}=req.body; // it is destructurinh , will asign data to the respective variables
        if(!name || !age || !email){ // ye teeno cheezyn add kro gy tow true add hon gi ni tow ni add ho gi
            resp.send({message:"operation failed", success:false})
            return false
        }
    
        const collection=db.collection('school');
        const schools= await collection.insertOne(req.body)
        resp.send({message:"data stored", success:true , schools:schools} )
    })
 })



app.listen(3200);
