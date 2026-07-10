
const http=require('http')
const fs=require('fs');

http.createServer((req,resp)=>{
    
    fs.readFile('html/form.html', 'utf-8' ,(err,data)=>{

        if(err){
            resp.writeHead(500, { "Content-Type": "text/plain" });
            resp.end("Internal server error")
            return;
        }
       resp.writeHead(200, { "Content-Type": "text/html" });
       if(req.url=="/"){
           resp.write(data);
           resp.end()
       }
        else if(req.url=='/submit'){
            resp.write("<h1> Data submitted </h1>")
            resp.end()
        } 
    })
}).listen(3200)

