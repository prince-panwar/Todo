
import {todo} from "../model/todo.js"
export const  addNewTodo= async(request,response)=>{
    try{const newTodo =await todo.create({
        todoItem: request.body.todoItem,
        createdAt:Date.now()

      })
      await newTodo.save();
      response.status(200).json(newTodo);}
      catch(e){
        response.status(500).json(e.message);
    }
}
