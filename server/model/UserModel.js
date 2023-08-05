import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";
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

userSchema.statics.signup=async function(email,password){
    //validation
    if(!email || !password){
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Please enter a valid email')
}
if(!validator.isStrongPassword(password)){
    throw Error("Please enter a strong password")
}
    const exists = await this.findOne({email})
    if(exists){
        throw Error('Email already exists')
        
    }
    //encrypt password
const salt = await bcrypt.genSalt(10)
const hash = await bcrypt.hash(password,salt)

const user=await this.create({email,password:hash})

return user
    
}

//static login function

userSchema.statics.login= async function(email,password){
    // if(!email || !password){
    //     throw Error('All fields must be filled')
    // }
    const user = await this.findOne({email})
    if(!user){
       throw Error('Email is Incorrect')
    }

    const match =await bcrypt.compare(password,user.password)
    if(!match){
        throw Error('Password is Incorrect')
    }
    return user
}
export const user =mongoose.model('user',userSchema);