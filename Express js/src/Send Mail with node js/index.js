
import express from "express";
import nodemailer from 'nodemailer'

const app=express();

const transporter= nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'muhammadus9129@gmail.com',
        pass:'ojir zpqx zzbe ideo'
    }
})
// middleware to get body req.body
app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs') // for render

app.get("/mail",(req,resp)=>{
    resp.render('mail')
})

app.post("/submit-email",(req,resp)=>{
    console.log(req.body);
    
    const mailOption={
        from:  "muhammadus9129@gmail.com",
        to: "muhammadus9129@gmail.com",
        subject: req.body.subject,
        text:  req.body.mail
    }
    transporter.sendMail(mailOption,(error,info)=>{
        if(error){
            resp.send("Email operation, try again")
        }
        else{
            resp.send("Mail send")
        }
    })
})

app.listen(3200)index.js
