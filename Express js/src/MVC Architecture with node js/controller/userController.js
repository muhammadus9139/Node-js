import { usersList } from "../model/userModel.js"

export function handleusers(req,resp){
    const usersdata=usersList();
    resp.render('user',{users:usersdata})
   }
