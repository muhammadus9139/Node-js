import users from "../models/userModel.js";


// Get all users

export const getUsers = (req,res)=>{


    res.json({
        message:"Users fetched successfully",
        data: users
    });


};



// Get single user

export const getUser = (req,res)=>{


    const id = req.params.id;


    const user = users.find(
        user => user.id == id
    );


    res.json({
        data:user
    });


};