
// Make simple API in node js
const http=require('http')

const usersdata=[
    {
        name:'usama',
        age:20,
        city:"lhr"
    },
      {
        name:'ali',
        age:21,
        city:"karachi"
    },
      {
        name:'ahmad',
        age:24,
        city:"peshawar"
    }

]
http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","application/json")
    resp.write(JSON.stringify(usersdata));
    resp.end()
}).listen(8000)
