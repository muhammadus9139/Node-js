const express = require("express");

const app = express();

const port = 3000;


// Built-in Middleware 1
// Handle JSON data

app.use(express.json());


// Built-in Middleware 2
// Serve static files

app.use(express.static("public"));


// Route

app.get("/", (req, res) => {

    res.send(`
        <h1>Express Built-in Middleware</h1>
        <p>CSS is loaded using express.static()</p>
        <link rel="stylesheet" href="style.css">
    `);

});


// JSON Data Route

app.post("/user", (req, res) => {

    console.log(req.body);

    res.send({
        message: "Data received",
        data: req.body
    });

});


app.listen(port, () => {

    console.log(`Server running on port ${port}`);

});