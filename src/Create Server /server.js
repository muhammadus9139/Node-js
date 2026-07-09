// Create server

const http=require('http')
http.createServer((req,res)=>{
    res.write("<h1>usama<h1/>")
    res.write("ali")
res.end("hello");
}).listen(4800)


