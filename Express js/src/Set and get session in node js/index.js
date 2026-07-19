import express from "express";
import session from "express-session";

const app = express();

// here we use middlewares
app.use(express.urlencoded({ extended: true })); // for req.body

app.use(session({ // for session
    secret: "abc",
    resave: false,
    saveUninitialized: true
}));

app.set("view engine", "ejs");

app.get("/", (req, resp) => {
    const data = req.session.data;
    resp.render("home", { data });
});

app.get("/login", (req, resp) => {
    resp.render("login");
});

app.post("/profile", (req, resp) => {
    req.session.data = req.body;
    resp.redirect("/");
});

app.listen(3200);
