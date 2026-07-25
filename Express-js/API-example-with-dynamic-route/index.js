import express from "express";
import products from "./data.json" with { type: "json" };


const app = express();

const PORT = 3000;


// Get All Products API

app.get("/products", (req, res) => {

    res.json({
        message: "Products list",
        data: products
    });

});



// Dynamic Route API
// Search product by id

app.get("/products/:id", (req, res) => {


    const id = req.params.id;


    const product = products.find(
        item => item.id == id
    );


    if(!product)
    {
        return res.status(404).json({
            message:"Product not found"
        });
    }


    res.json({
        data: product
    });


});



// Search API by name

app.get("/search/:name", (req,res)=>{


    const name = req.params.name;


    const result = products.filter(
        item => 
        item.name.toLowerCase()
        .includes(name.toLowerCase())
    );


    res.json({
        result
    });


});



app.listen(PORT,()=>{

    console.log(`Server running on port ${PORT}`);

});