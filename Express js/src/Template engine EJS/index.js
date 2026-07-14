
import express from "express";
const app=express();

app.set('view engine','ejs')
  app.get("/",(req,resp)=>{
    resp.render('home',{name:'usama', password:123})
  })
app.listen(3200);
