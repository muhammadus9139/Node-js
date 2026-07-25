import express from "express";
import path from "path";

const app = express();

const PORT = 3000;


// EJS setup
app.set("view engine", "ejs");

app.set("views", path.join(process.cwd(), "views"));


// Form data receive karne ke liye middleware
app.use(express.urlencoded({ extended: true }));


// Show Form
app.get("/", (req, res) => {

    res.render("form");

});


// Receive Form Data
app.post("/submit", (req, res) => {

    const username = req.body.username;
    const email = req.body.email;


    res.render("result", {
        username,
        email
    });

});


app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});