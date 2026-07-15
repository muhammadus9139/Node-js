import { handleusers } from "./controller/userController.js";
import express from "express";
const app=express();

app.set('view engine','ejs')

   app.get("/user",handleusers)
app.listen(3200);
