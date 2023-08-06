import mongoose from "mongoose";

const TodoSchema=new mongoose.Schema({
    todoItem:{
        type:String,
        required:true,

    },
    done:{
        type:Boolean,
        default:false,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    userId:{
        type:String,
        required:true,
    }
})
export const todo =mongoose.model('todo',TodoSchema);