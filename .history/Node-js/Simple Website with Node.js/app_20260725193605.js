// Handle HTML page
// Make server and load HTML file
// Handle CSS file

const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{


    if(req.url === "/"){

        fs.readFile("index.html","utf-8",(err,data)=>{

            if(err){
                res.write("File not found");
                res.end();
                return;
            }

            res.writeHead(200, {
                "Content-Type":"text/html"
            });

            res.write(data);
            res.end();

        });

    }


    else if(req.url === "/style.css"){

        fs.readFile("style.css","utf-8",(err,data)=>{

            res.writeHead(200,{
                "Content-Type":"text/css"
            });

            res.write(data);
            res.end();

        });

    }


    else{

        res.write("Page not found");
        res.end();

    }


});


server.listen(3000,()=>{

    console.log("Server running on port 3000");

});