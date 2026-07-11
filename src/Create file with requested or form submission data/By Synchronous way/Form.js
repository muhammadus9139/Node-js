const queryString = require('querystring')
// here queryString is a core package

const http = require('http')
const fs = require('fs');

http.createServer((req, resp) => {

    fs.readFile('html/form.html', 'utf-8', (err, data) => {

        if (err) {
            resp.writeHead(500, { "Content-Type": "text/plain" });
            resp.end("Internal server error");
            return;
        }

        resp.writeHead(200, { "Content-Type": "text/html" });

        if (req.url == "/") {
            resp.write(data);
            resp.end();
        }

        else if (req.url == '/submit') {

            let databody = [];

            req.on('data', (chunk) => {
                databody.push(chunk);
                // push chunk will be pushed in databody array
            });

            req.on('end', () => {

                let formdata = Buffer.concat(databody).toString();
                // Buffer will collect all chunks and convert them into an item string

                let readabledata = queryString.parse(formdata);
                // Query string will convert form data into a readable object

                console.log(readabledata);

                let dataString = "my name is " + readabledata.name + " and my password is " + readabledata.password;
                console.log(dataString);

                // Synchronously file creation
                fs.writeFileSync("text/" + readabledata.name + ".txt", dataString);
                console.log("File created");
                resp.write("Data submitted");
                resp.end();
            });
        }
    });
    
}).listen(3200);
