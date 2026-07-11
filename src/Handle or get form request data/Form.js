
const queryString=require('querystring')
// here querySelector is an core package
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

            let databody=[]
            req.on('data',(chunk)=>{
                databody.push(chunk)
                // push chunk will be pushed in databody array
            })

            req.on('end',()=>{
                let formdata=Buffer.concat(databody).toString();
                // buffer will collect chunks and make an item
                let readabledata=queryString.parse(formdata);
                // query selector will change into readable form
                console.log(readabledata);
                
            })
            resp.write("data submitted")
            resp.end()
        } 
    })
}).listen(3200)
