const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    fs.readFile("home.html", (error, data) => {

        if (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error Loading File");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }

    });

});

server.listen(3000, () => {
    console.log("Server Running at http://localhost:3000");
});