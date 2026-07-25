const express = require("express");
const morgan = require("morgan");

const app = express();

const port = 3000;


// External Middleware

app.use(morgan("dev"));


// Routes

app.get("/", (req, res) => {

    res.send("Home Page");

});


app.get("/about", (req, res) => {

    res.send("About Page");

});


app.listen(port, () => {

    console.log(`Server running on port ${port}`);

});