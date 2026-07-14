import express from "express";

const app = express();

app.get("/", (req, resp) => {
    resp.send("Home page");
});

app.get("/about", (req, resp) => {
    resp.send("About page");
});

app.get("/error", (req, resp, next) => {

    const error = new Error("Something went wrong");
    error.status = 404;
    next(error);
});

// Error Handling Middleware
function errorHandling(error, req, resp, next) {
    resp.status(error.status || 500).send("Try after sometime");
}

app.use(errorHandling);

app.listen(3300);
