const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {

        fs.readFile("form.html", (err, data) => {

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(data);

        });

    }

    else if (req.method === "POST" && req.url === "/submit") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            console.log("Form Data:");
            console.log(body);

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end("<h1>Form Submitted Successfully</h1>");

        });

    }

});

server.listen(3000, () => {
    console.log("Server Running at http://localhost:3000");
});