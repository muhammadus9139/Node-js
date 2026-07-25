const http = require("http");

// Variables
const name = "Muhammad Usama";
const course = "Computer Science";

// Function
function getMessage() {
  return "Welcome to Node.js Server!";
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.write("<h1>Server Response Example</h1>");
  res.write("<h2>" + getMessage() + "</h2>");
  res.write("<p>Name: " + name + "</p>");
  res.write("<p>Course: " + course + "</p>");

  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});