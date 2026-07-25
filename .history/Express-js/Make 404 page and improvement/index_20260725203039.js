import express from "express";
import path from "path";


const app = express();

const port = 3000;



// Home Route

app.get("/", (req,res)=>{

    res.send("Home Page");

});




// 404 Function

function handle404(req,res){

    const filePath = path.join(
        process.cwd(),
        "28-404-page",
        "404.html"
    );


    res.status(404).sendFile(filePath);

}



// Always write 404 middleware at the end

app.use(handle404);



app.listen(port,()=>{

    console.log(`Server running on port ${port}`);

});