import express from "express";
import { MongoClient, ObjectId } from "mongodb";

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

    // here it is record deleted by api using thunderclient where we will write path address and select body to delete 
    app.delete("/delete/:id",async(req,resp)=>{
        console.log(req.params.id);
        const collection= db.collection("school")
        const result= await collection.deleteOne({_id: new ObjectId(req.params.id)})
        if(result){
            resp.send({message:"Student data deleted", success:true})
        }
        else{
            resp.send({message:"Student data not deleted, try after sometime"})
        }
    })

    // delete record , it is associated with ejs file students.ejs
    app.get("/ui/delete/:id",async(req,resp)=>{
        console.log(req.params.id);
        const collection= db.collection("school")
        const result= await collection.deleteOne({_id: new ObjectId(req.params.id)})
        if(result){
            resp.send("student record deleted")
        }
        else{
            resp.send("student record not deleted")
        }
    })

    // ------Update form input fields display and retain info of record in form-------
    // here we only fetched data using get and display/retain in form
    // associated with update-student.ejs
    app.get("/ui/school/:id",async(req,resp)=>{
        const collection= db.collection("school")
        const result= await collection.findOne({_id: new ObjectId(req.params.id)})
        resp.render('update-student',{result})
    })

    // used with api thunderclient to fetch data 
    app.get("/school/:id",async(req,resp)=>{
        const collection= db.collection("school")
        const result= await collection.findOne({_id: new ObjectId(req.params.id)})
        resp.send({ message:"data fetched", success: true , result: result})
    })

// ------Update form in real records and then show msg that it is updated-------
    // data update
    app.post("/ui/update/:id",(req,resp)=>{
         const collection= db.collection("school")
        const filter= {_id: new ObjectId(req.params.id)};
        const update={$set:req.body}
        const result= collection.updateOne(filter,update);
        
        if(result){
            resp.send("Data updated")
        }
        else{
             resp.send("Data not updated")
        }
    })

    // data update by API , whenwever we update data using API we use PUT request
      // here it is record updated by api using thunderclient where we will write path address and select body to and write updated info 

    app.put("/update/:id",(req,resp)=>{
         const collection= db.collection("school")
        const filter= {_id: new ObjectId(req.params.id)};
        const update={$set:req.body}
        const result= collection.updateOne(filter,update);
        
        if(result){
             resp.send({message:"data updated", success:true , result:req.body})
        }
        else{
             resp.send({message:"data not updated", success:false , result: null})
        }
    })
 })



app.listen(3200);
