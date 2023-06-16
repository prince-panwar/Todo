"use client"
import React, {useState } from 'react';
import axios from 'axios';

const TodoInput =()=>{
  const [todoItem,setTodoItem] = useState<string>("");
    const API_URL='http://localhost:8000'
    const HandleSubmit= async (e:  React.SyntheticEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const input = form.elements.namedItem('userInput') as HTMLInputElement;
       setTodoItem(input.value);
       try{
        const response = await axios.post(`${API_URL}/todos`, {todoItem});
       }
       catch(e:any){
        console.log(e.message);
       }

     
     }
     
    
     return(
        <form onSubmit={HandleSubmit}>
            <input placeholder="Enter todo"
            className="input" name='userInput' type='text'/>
            <button  type="submit" className="addbtn">Add</button>
        </ form>
        
    );
}
export default TodoInput