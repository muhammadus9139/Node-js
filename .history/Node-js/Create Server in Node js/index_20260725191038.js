import http from "http";

// Create Server
const server = http.createServer((request, response) => {

    console.log("Request Received");
    console.log("Method:", request.method);
    console.log("URL:", request.url);

    response.writeHead(200, {
        "Content-Type": "text/plain"
    });

    response.write("Welcome to My First Node.js Server");
    response.end();
});

// Start Server
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});