"use client"
import { useEffect, useState } from "react";
import axios from "axios";

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
        
        
      } catch (error:any) {
        console.error(error.message);
      }
    };

    fetchData();
   
  }, []);

  return (
 <div>hello</div>
  );
};

export default Todos;


