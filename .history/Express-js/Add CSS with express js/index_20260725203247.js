const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

// Serve static CSS file
app.use(express.static(path.join(__dirname)));


// Render HTML page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});