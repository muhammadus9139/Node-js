// Template engine with form 
// here we use external middleware express.urlencoded attach for req.body
// and we pass data of form from submitUser route to SubmitUser 
import express from "express";
const app=express();

app.use(express.urlencoded({extended:false})) // used for req.body

app.set("view engine","ejs")

app.get("/add-user",(req,resp)=>{
   resp.render('adduser')
})

app.post("/submit-user",(req,resp)=>{
  // console.log(req.body);
  resp.render('SubmitUser',req.body)
})

app.get("/users",(req,resp)=>{
  const users=['usama','ali','ahmad']
  const isLogin=false;
  resp.render('Users',{users:users,isLogin:isLogin})
})
app.listen(3200)

