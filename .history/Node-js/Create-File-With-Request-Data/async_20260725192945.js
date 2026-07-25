// Create file with requested data
// Create file with asynchronous way

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

        fs.writeFile("data.txt", readableData, (err) => {

            if(err){
                console.log(err);
                return;
            }

            res.write("File created successfully using async way");
            res.end();

        });

    });

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});