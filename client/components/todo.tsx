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

const Todos = ({ addProp }: { addProp: boolean }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isEditing,setIsEditing] = useState<boolean>(false);
 const [editing,setEditing] = useState<string|null>(null);
 const [done,setDone]=useState<boolean>(false);

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
   
  }, [isEditing,done,addProp]);



  const HandleTodoClick= async(id:string)=>{
 
        try {
          const response = await axios.get(`http://localhost:8000/todos/${id}`);
         setDone(prev=>!prev);
          
        } catch (error:any) {
          console.error(error.message);
        }
   }

   const HandleEditing=(id:string)=>{
    if(!isEditing){
    setEditing(id);
    setIsEditing(true);
  }else{
    setIsEditing(false);
    setEditing(null);
  }
   }
 
 
 
   return (
 <div>
    <ul>
        {todos.map((data)=>(
             <li className="todoList" key={data._id} onClick={()=>HandleTodoClick(data._id)}
             style={{textDecoration: data.done?'line-through':'',
            
             
             }}>
           {editing!=data._id?( <span >{data.todoItem}</span>):( <input className="todoEdit" placeholder="Enter todo" name='userInput' type='text'/>)}
           
             
            <span className="icon"><FaTrash/> </span>
            <span className="icon" onClick={()=>HandleEditing(data._id)} > <FaPen/></span>
          
           
           </li>
        ))}
    </ul>
 </div>
  );
};

export default Todos;


