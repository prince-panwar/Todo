import mongoose from "mongoose";
import { user } from "../model/UserModel.js";

export const loginUser = async (request, response) => {
    
    response.json({ msg: 'login' });

}

export const  signUser= async(request,response)=>{
    const {email, password} = request.body;
    try{
     const User = await user.signup(email, password);
     response.status(200).json({email,User})
    }catch(e){
 response.status(400).json(e.message)
    }
 
}
