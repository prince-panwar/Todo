
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
  await todo.find({}).sort({'createdAt':-1}) //hit data base using todo collection and find method 
  response.status(200).json(newTodo);}
  catch(e){
    response.status(500).json(e.message);
}
}
