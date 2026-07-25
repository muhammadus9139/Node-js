const express = require("express");

const app = express();

const PORT = 3000;


// Express JS Flow
app.get("/", (req, res) => {

    console.log("Request received");

    res.send("Welcome to Express JS Flow");

});


/*
    Params in Express JS

    URL:
    localhost:3000/user/101

    101 is parameter
*/

app.get("/user/:id", (req, res) => {

    let userId = req.params.id;

    res.send(`User ID is ${userId}`);

});


// Multiple Params

app.get("/product/:category/:id", (req, res) => {

    let category = req.params.category;
    let id = req.params.id;


    res.send(
        `Product Category: ${category}, Product ID: ${id}`
    );

});


// Response Methods

app.get("/response", (req, res) => {


    // Send text response
    // res.send("Hello User");


    // Send JSON response
    res.json({
        name: "Usama",
        role: "Developer",
        skill: "Node JS"
    });


});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});