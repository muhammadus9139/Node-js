
const UserForm=require('./UserForm')
const UserDataSubmit=require('./UserDataSubmit')

const http=require('http')
http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":"text/html"})
    if(req.url=='/'){
         UserForm(req,resp)
    }
    else if(req.url=='/submit'){
        UserDataSubmit(req,resp)
    }
       resp.end()
}).listen(3300)
