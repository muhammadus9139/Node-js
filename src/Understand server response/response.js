// Understand server response 
// Change text to html, and use h2 and lower tags
const http = require('http');
http.createServer((req, resp) => {
      resp.setHeader("content-type","text/html")
    resp.write("<h3>Hello Usama<h3/>");
    resp.write("hello")
    resp.end();
}).listen(4600);
