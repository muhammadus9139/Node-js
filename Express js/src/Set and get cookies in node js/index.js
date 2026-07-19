

import express from "express";

const app = express();
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// Display name on home page
app.get("/", (req, res) => {
    const cookiesdata = req.get("cookie");

    if (!cookiesdata) {
        return res.render("home", { name: "" });
    }

    // Split all cookies
    const cookies = cookiesdata.split("; ");

    // Find the cookie that starts with "name="
    const nameCookie = cookies.find(c => c.startsWith("name="));

    // Get only the value
    const name = nameCookie ? nameCookie.split("=")[1] : "";

    res.render("home", { name });
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/profile", (req, res) => {
    res.setHeader("Set-Cookie", [
        "login=true",
        "name=" + req.body.name
    ]);

    res.render("profile");
});

app.listen(3200);
