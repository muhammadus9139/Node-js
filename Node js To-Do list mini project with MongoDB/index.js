
import express from "express";
import path from 'path'
import { MongoClient, ObjectId } from "mongodb";
const app=express();

const publicpath=path.resolve('public')
app.use(express.static(publicpath)) // for use of static css file

app.set('view engine','ejs') // for render

const dbname="Node-proejct";
const collectionname= 'todo'
const url = "mongodb://localhost:27017";
const client= new MongoClient(url)

const connection= async()=>{
    const connect= await client.connect();
    return connect.db(dbname)
}
app.use(express.urlencoded({ extended: false }));

// root route List page
app.get("/",async(req,resp)=>{
    const db= await connection();
    const collection= db.collection(collectionname);
    const result= await collection.find().toArray();
    console.log(result);
    
    resp.render('list',{result})
})

// render add page form
app.get("/add",(req,resp)=>{
    resp.render('add')
})

// render update form page
app.get("/update",(req,resp)=>{
    resp.render('update')
})


// Add new record and display on the root router 
app.post("/add",async(req,resp)=>{
    const db= await connection();
    const collection= db.collection(collectionname);
    const result= await collection.insertOne(req.body);
    if(result){
        resp.redirect("/")
    }
    else{
        resp.redirect("/add")
    }
})


// for delete todo task
app.get("/delete/:id",async(req,resp)=>{
    const db= await connection();
    const collection= db.collection(collectionname);
    const result= await collection.deleteOne({_id: new ObjectId(req.params.id)});
    if(result){
        resp.redirect("/")
    }
    else{
        resp.send("/some error")
    }
})

// purpose to populate data in update form
app.get("/update/:id",async(req,resp)=>{
    const db= await connection();
    const collection= db.collection(collectionname);
    const result= await collection.findOne({_id: new ObjectId(req.params.id)});
    if(result){
        resp.render('update',{result})
    }
    else{
        resp.send("some error")
    }
})


// update form
app.post("/update/:id", async (req, resp) => {

    const db = await connection();
    const collection = db.collection(collectionname);
    const filter= {_id: new ObjectId(req.params.id)}
    const updatedata= {$set: {
        title: req.body.title,
        description:req.body.description
    }}
    const result= await collection.updateOne(filter,updatedata)
    if (result) {
        resp.redirect("/");
    } else {
        resp.send("Task not updated");
    }

});

// delete multiple records
app.post("/delete-selected", async (req, resp) => {

    const db = await connection();
    const collection = db.collection(collectionname);

    let selectedTask = req.body.selectedTask;

    if (!selectedTask) {
        return resp.redirect("/");
    }

    if (!Array.isArray(selectedTask)) {
        selectedTask = [selectedTask];
    }

    const ids = selectedTask.map(id => new ObjectId(id));

    await collection.deleteMany({
        _id: { $in: ids }
    });

    resp.redirect("/");
});

app.listen(3200)
