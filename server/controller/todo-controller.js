import mongoose from "mongoose";
import {todo} from "../model/todo.js"
export const  addNewTodo= async(request,response)=>{
    try{const newTodo =await todo.create({
        todoItem: request.body.todoItem,   //validate data
        createdAt:Date.now()

      })
      await newTodo.save();
      response.status(200).json(newTodo);}
      catch(e){
        response.status(500).json(e.message);
    }
}

export const getAllTodos = async(request, response)=>{
  try{
  const todos=await todo.find({}).sort({'createdAt':-1}) //hit data base using todo collection and find method 
  response.status(200).json(todos);}
  catch(e){
    response.status(500).json(e.message);
}

}
export const toggleTodoDone= async(request, response)=>{
  try{
    const todoRef = await todo.findById(request.params.id);//find ref
  const Todo=await todo.findOneAndUpdate(
    {_id:request.params.id},                    //update
    {done:!todoRef.done}
    )
    await Todo.save(); //save
    response.status(200).json(Todo);}
    catch(e){
      response.status(500).json(e.message);
  }

}
export const updateData=async(request, response)=>{
    
  try{

    const Todo=await todo.findOneAndUpdate(
    {_id:request.params.id},                    //update
    {todoItem: request.body.todoItem}
    )
    await Todo.save(); //save
    response.status(200).json(Todo);}
    catch(e){
      response.status(500).json(e.message);
  }
 
}
export const deleteData=async(request, response)=>{
    
  try{
    const id = new mongoose.Types.ObjectId(request.params.id);
    const Todo = await todo.findOneAndDelete({ _id: id });
  
    response.status(200).json(Todo);}
    catch(e){
      response.status(500).json(e.message);
  }
}
