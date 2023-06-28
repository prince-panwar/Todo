import mongoose from "mongoose";
import { user } from "../model/UserModel.js";
import  jwt from "jsonwebtoken";

const createToken =(_id)=>{
 return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})

}
export const loginUser = async (request, response) => {
  const{email, password}=request.body  
   try{
  const User = await user.login(email,password)
  //create token
  const token = createToken(User._id)
  response.status(200).json({email,token})
   }catch(e){
    response.status(400).json(e.message);
}  

}

export const  signUser= async(request,response)=>{
    const {email, password} = request.body;
    try{
     const User = await user.signup(email, password);
     //create token
     const token = createToken(User._id);
     response.status(200).json({email,token})
    }catch(e){
 response.status(400).json(e.message)
    }
 
}
