"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import {FaTrash} from "react-icons/fa"
import {FaPen} from "react-icons/fa";
import "../style/todo.css"

interface Todo {
  _id: string;
  todoItem: string;
  done: boolean;
  createdAt: Date;
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/todos");
        setTodos(response.data);
        
      } catch (error:any) {
        console.error(error.message);
      }
    };

    fetchData();
   
  }, []);

  const HandleTodoClick= async(id:string)=>{
 
        try {
          const response = await axios.get(`http://localhost:8000/todos/${id}`);

          
        } catch (error:any) {
          console.error(error.message);
        }
      
  
      

  }
  return (
 <div>
    <ul>
        {todos.map((data)=>(
             <li className="todoList" key={data._id} onClick={()=>HandleTodoClick(data._id)}>
            <span>{data.todoItem}</span>
             
            <span className="icon"><FaTrash/> </span>
            <span className="icon"> <FaPen/></span>
            <span>{data.done?"done":"not Done"}</span>
           
           </li>
        ))}
    </ul>
 </div>
  );
};

export default Todos;


