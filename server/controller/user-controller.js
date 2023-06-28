import mongoose from "mongoose";
import { user } from "../model/UserModel.js";

export const loginUser = async (request, response) => {
    response.json({ msg: 'login' });
}

export const  signUser= async(request,response)=>{
    response.json({ msg: 'signup' });
}
