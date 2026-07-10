// Understand server response 
// use a variable in html tags
// content-type,text/html


const age=20;

const http = require('http');
http.createServer((req, resp) => {
  resp.setHeader("content-type", "text/html")
  resp.write(`
     <html>
        <head>
         <title> Coding </title>
        </head>
        <body>
          <h1> hello </h1>
          <h2>`+age+`</h2>
          <h2>`+new Date()+`</h2>
        </body>
     </html>  
      `)
  resp.end();
  process.exit();
}).listen(4600);
