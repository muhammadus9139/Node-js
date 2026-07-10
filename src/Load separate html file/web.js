
const fs = require('fs');
const http = require('http');

http.createServer((req, resp) => {

    fs.readFile('html/web.html', 'utf-8', (err, data) => {

        if (err) {
            resp.writeHead(500, { "Content-Type": "text/plain" });
            resp.end("Internal Server Error");
            return;
        }
        
        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.write(data);
        resp.end();

    });

}).listen(1000);
