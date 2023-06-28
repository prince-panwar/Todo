import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema

const userSchema= new Schema({
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type: String,
        required:true
    }
});

//static singup method

userSchema.static.signup=async(email,password)=>{
    const exists = await this.findOne({email})
    if(exists){
        throw Error('Email already exists')
        
    }

    


       
}
export const user =mongoose.model('user',userSchema);