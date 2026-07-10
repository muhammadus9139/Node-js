
const http=require('http')
http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":"text/html"})
    // resp.setHeader("content-type","text/html")
    console.log(req.url);
    

    if(req.url=='/'){
         resp.write(`
        <form action="/submit" method="post">
            <input type="text" placeholder="Enter name" name="name">
            <br/> <br/>
            <input type="text" placeholder="Enter email" name="email">
            <br/> <br/>
            <button>Submit</button>
        </form>
        `)
    }
    else if(req.url=='/submit'){
        resp.write('<h1> Data submitted </h1>')
    }
    resp.end()
}).listen(3200)
