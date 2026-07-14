// here we use 2 built-in middlewares 
// 1- express.urlencoded({extented: false})
// 2- express.static()

import express from "express";
import path from 'path'
const app = express();

// ----Built-in middlewares----
// express.urlencoded middleware , used to access data from the input fields form at the submit button, it is use here for submit route req.body
app.use(express.urlencoded({ extended: false }))

// express.static middleware , used to path abs path with static file
const staticpath = path.resolve('public')
app.use(express.static(staticpath))

app.get("/", (req, resp) => {
    const abspath = path.resolve('view/home.html');
    resp.sendFile(abspath)
})

app.get("/login", (req, resp) => {
    resp.send(`
        <form action="/submit" method="post">
          <input type="text" placeholder="Enter Username"  name="name"/> <br/> <br/>
          <input type="text" placeholder="Enter password" name="password"/> <br/> <br/>
          <button> Login </button>
        </form>
        `)
  })


app.post("/submit", (req, resp) => {
    console.log(req.body);
    resp.send("Submit page");
})
app.listen(3400);
