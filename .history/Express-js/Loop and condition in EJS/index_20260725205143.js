import express from "express";
import path from "path";

const app = express();

const PORT = 3000;


// EJS setup
app.set("view engine", "ejs");

app.set("views", path.join(process.cwd(), "views"));


// Route
app.get("/", (req, res) => {

    const users = [
        {
            name: "Ali",
            age: 20,
            status: "Active"
        },
        {
            name: "Ahmed",
            age: 17,
            status: "Inactive"
        },
        {
            name: "Usama",
            age: 22,
            status: "Active"
        }
    ];


    res.render("home", {
        users
    });

});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});