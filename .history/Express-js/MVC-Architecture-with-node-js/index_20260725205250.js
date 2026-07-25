import express from "express";
import userRoute from "./routes/userRoute.js";


const app = express();


const PORT = 3000;


// JSON data read karne ke liye
app.use(express.json());


// Route
app.use("/users", userRoute);



app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});