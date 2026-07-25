import express from "express";

const app = express();
const PORT = 3200;

app.get("/", (req, res) => {
    res.send("<h1>Server is Working! 🚀</h1>");
});

app.listen(PORT, () => {
    console.log(`✅ Server Running on http://localhost:${PORT}`);
});