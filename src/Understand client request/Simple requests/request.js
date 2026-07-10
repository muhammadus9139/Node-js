const http=require('http')
http.createServer((req,resp)=>{
    console.log(req.url)
    console.log(req.headers)
    console.log(req.method);
    console.log(req.host);
     resp.end()
})
.listen(5600)
