"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import {FaTrash} from "react-icons/fa"
import {FaPen} from "react-icons/fa"

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

  return (
 <div>
    <ul>
        {todos.map((data)=>(
             <li key={data._id}>
             <div>
               <span>{data.todoItem}</span>
               <span>
                <FaTrash/>
               </span>
            <FaPen/>
             </div>
           </li>
        ))}
    </ul>
 </div>
  );
};

export default Todos;


