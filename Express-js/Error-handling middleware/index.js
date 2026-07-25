const express = require("express");

const app = express();

const port = 3000;


// Normal Route

app.get("/", (req, res) => {

    res.send("Home Page");

});


// Route with Error

app.get("/user", (req, res, next) => {

    const error = new Error("User not found");

    next(error);

});


// Error Handling Middleware

app.use((err, req, res, next) => {

    console.log(err.message);

    res.status(500).send({
        message: "Something went wrong",
        error: err.message
    });

});


app.listen(port, () => {

    console.log(`Server running on port ${port}`);

});