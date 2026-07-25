// Handle form request data
// Get data from request
// Handle data with Buffer class
// Make request data readable

const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === "/"){

        let data = [];

        req.on('data', (chunk) => {
            data.push(chunk);
        });

        req.on('end', () => {

            let bufferData = Buffer.concat(data);
            let readableData = bufferData.toString();

            console.log(readableData);

            res.write("Data received successfully");
            res.end();
        });

    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});