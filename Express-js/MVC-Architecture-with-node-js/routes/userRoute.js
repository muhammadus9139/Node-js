import express from "express";

import { 
    getUsers,
    getUser
} from "../controllers/userController.js";


const router = express.Router();



// All users API

router.get("/", getUsers);



// Single user API

router.get("/:id", getUser);



export default router;