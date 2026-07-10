// nodeman external package
// we can create two server in a single file using two separate ports
const http=require('http')
http.createServer((req,res)=>{
    res.write("<h1>First server<h1/>")
    res.write("<h2> hello g <h2/>")
res.end("first server end");
}).listen(4800)


http.createServer((req,res)=>{
    res.write("<h1>Second server<h1/>")
    res.write("<h2> hello g <h2/>")
res.end("second server end");
}).listen(470)
