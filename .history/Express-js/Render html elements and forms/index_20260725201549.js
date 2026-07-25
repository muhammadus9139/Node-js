import express from "express";
import path from "path";


const app = express();

const PORT = 3000;


// Middleware to read form data
app.use(express.urlencoded({ extended: true }));


// Render HTML Page
app.get("/", (req, res) => {

    res.sendFile(
        path.join(
            process.cwd(),
            "26-Render-HTML-Form",
            "login.html"
        )
    );

});


// Handle POST Request
app.post("/login", (req, res) => {


    const email = req.body.email;
    const password = req.body.password;


    console.log("Email:", email);
    console.log("Password:", password);


    res.send(`
        <h1>Login Successful</h1>
        <p>Email: ${email}</p>
    `);


});



app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});