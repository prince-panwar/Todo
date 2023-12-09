"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import {FaTrash} from "react-icons/fa"
import {FaPen} from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import Cookies from "js-cookie";
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
 const [editingId,setEditingId] = useState<string|null>(null);
 const [done,setDone]=useState<boolean>(false);
 const [deleteTodo,setDeleteTodo] = useState<boolean>(false);
 
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const userId = Cookies.get("userId");
        const response = await axios.get("https://todo-main.up.railway.app/todos", {
          params: { userId }, // Send userId as a query parameter
        });
        setTodos(response.data);
        console.log(response.data);
      } catch (error:any) {
        console.error(error.message);
      }
    };

    fetchData();
   
  }, [isEditing,done,addProp,deleteTodo]);



  const HandleTodoClick= async(id:string)=>{
 
        try {
          const response = await axios.get(`http://localhost:8000/todos/${id}`);
         setDone(prev=>!prev);
          
        } catch (error:any) {
          console.error(error.message);
        }
   }

   const HandleEditingMode=(id:string)=>{
    if(!isEditing){
    setEditingId(id);
    setIsEditing(true);
  }else{
    setIsEditing(false);
    setEditingId(null);
  }
   }
   const HandleEditing= async (e:  React.SyntheticEvent<HTMLFormElement>,id:string)=>{
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem('userInput') as HTMLInputElement;
    const inputValue = input.value;
    console.log(inputValue);
  
    setIsEditing(false);
    setEditingId(null);
    try{
      const response=await axios.put(`http://localhost:8000/todos/${id}`,{todoItem: inputValue});
    
    }catch(e:any){console.log(e.message);}
   

  };

  const HandleDelete = async (id:string) => {
    setDeleteTodo(prev=>!prev);
    try{ 
       const response=await axios.delete(`http://localhost:8000/todos/${id}`);
  }catch(e:any){console.log(e.message);}

  };
 
 
 
   return (
 <div>
    <ul>
        {todos.map((data)=>(
             <li className="todoList" key={data._id} onClick={()=>HandleTodoClick(data._id)}
             style={{textDecoration: data.done?'line-through':'',
            
             
             }}>
           {editingId!=data._id?( <span >{data.todoItem}</span>):( 
             <form onSubmit={(e)=>HandleEditing(e,data._id)}>
             <input
               className="todoEdit"
               type="text"
              placeholder="Edit Here"
              name="userInput"
              />
              <button  type="submit" className="icon"><FaCheckCircle/></button>
           </form>
           )}
           
             
            <span className="icon" onClick={()=>HandleDelete(data._id)}><FaTrash/> </span>
            <span className="icon" onClick={()=>HandleEditingMode(data._id)} > <FaPen/></span>
          
           
           </li>
        ))}
    </ul>
 
 </div>
  );
};

export default Todos;


