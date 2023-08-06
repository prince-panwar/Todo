import mongoose from "mongoose";
import {todo} from "../model/todo.js"
export const  addNewTodo= async(request,response)=>{
    try{
      const newTodo =await todo.create({
        todoItem: request.body.todoItem,   //validate data
        createdAt:Date.now(),
        userId: request.body.userId

      })
      await newTodo.save();
      response.status(200).json(newTodo);}
      catch(e){
        response.status(500).json(e.message);
    }
}

// server/controllers/todo-controller.js
export const getAllTodos = async (request, response) => {
  try {
    const { userId } = request.query; // Get the userId from the query parameters

    // Check if userId is provided in the query parameters
    if (!userId) {
      return response.status(400).json({ error: "userId is required" });
    }

    // Find todos that have the specified userId
    const todos = await todo.find({ userId }).sort({ createdAt: -1 });

    response.status(200).json(todos);
  } catch (e) {
    response.status(500).json(e.message);
  }
};

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
