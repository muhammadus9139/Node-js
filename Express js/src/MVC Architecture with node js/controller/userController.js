// controller will attach view and model
// model se data array arhi ha 
// or user.ejs view ha or template engine ejs use ho rha ha or user.ejs ma data ja rha ha


import { usersList } from "../model/userModel.js"

export function handleusers(req,resp){
    const usersdata=usersList();
    resp.render('user',{users:usersdata})
   }
