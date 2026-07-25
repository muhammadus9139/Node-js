import express from "express";
import nodemailer from "nodemailer";
import path from "path";


const app = express();


app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());



// Render Form

app.get("/",(req,res)=>{

    res.sendFile(
        path.join(process.cwd(),"mail.html")
    );

});




// Send Mail From Form

app.post("/send-mail",async(req,res)=>{


    const {
        name,
        email,
        message

    } = req.body;



    let transporter = nodemailer.createTransport({

        service:"gmail",

        auth:{

            user:"yourgmail@gmail.com",

            pass:"your-app-password"

        }

    });



    let info = await transporter.sendMail({

        from:"yourgmail@gmail.com",

        to:email,

        subject:"Testing Mail",

        text:
        `
        Name: ${name}
        Message: ${message}
        `

    });



    res.send({

        message:"Email Sent Successfully",

        id:info.messageId

    });



});





app.listen(3000,()=>{

console.log("Server running on port 3000");

});