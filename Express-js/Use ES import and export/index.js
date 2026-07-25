import express from "express";

import { add, subtract } from "./math.js";


const app = express();


const PORT = 3000;


app.get("/", (req, res) => {


    let sum = add(10, 5);

    let minus = subtract(10, 5);


    res.send(`
        Addition: ${sum}
        <br>
        Subtraction: ${minus}
    `);

});


app.listen(PORT, () => {

    console.log(`Server running on ${PORT}`);

});