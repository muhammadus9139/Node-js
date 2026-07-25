// Create file with requested data
// Create file with synchronous way

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    let data = [];

    req.on('data', (chunk) => {
        data.push(chunk);
    });

    req.on('end', () => {

        let bufferData = Buffer.concat(data);
        let readableData = bufferData.toString();

        fs.writeFileSync("data.txt", readableData);

        res.write("File created successfully using sync way");
        res.end();
    });

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});