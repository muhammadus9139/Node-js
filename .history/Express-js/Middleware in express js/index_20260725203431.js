const express = require("express");

const app = express();

const port = 3000;


// Middleware
const myMiddleware = (req, res, next) => {

    console.log("Middleware executed");

    next();

};


// Apply middleware
app.use(myMiddleware);


// Route
app.get("/", (req, res) => {

    res.send("Home Page");

});


app.get("/about", (req, res) => {

    res.send("About Page");

});


app.listen(port, () => {

    console.log(`Server running on port ${port}`);

});