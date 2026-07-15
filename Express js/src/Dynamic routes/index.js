
import express from "express";
const app=express();
   app.get("/",(req,resp)=>{

      // yaha user ki list bnai ha 
      const users=['usama','ali','ahmad']
      let data=`<ul>`;
      for(let i=0;i<users.length;i++){
         data+= `<li> <a href="user/${users[i]}"> ${users[i]} </a> </li>`
         console.log(users[i]); // ye wese hi check kia ha 
      }
      data+=`</ul>`
      resp.send(data)
   })
 
// ye dynamic page ko dynamic url k sath connect kia ha taky jis name pr click kryn tow agly page pr us naam ki details show ho jayein
   app.get("/user/:name",(req,resp)=>{
      console.log(req.params.name); // dynmaic routes value get using req.params.name
      const username=req.params.name;
      resp.send(`This is ${username} profile page`)
   })
app.listen(3200);
