"use client"
import React, {useState,useEffect } from 'react';
import axios from 'axios';
import Todos from './todo';

const TodoInput =()=>{

  const [addtodo,setAddtodo] = useState<boolean>(false);
    const API_URL='http://localhost:8000'
    const HandleSubmit= async (e:  React.SyntheticEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const input = form.elements.namedItem('userInput') as HTMLInputElement;
       const todoItem = input.value
       setAddtodo(prev=>!prev);
       
       try{
        const response = await axios.post(`${API_URL}/todos`, {todoItem});
       }
       catch(e:any){
        console.log(e.message);
       }
      
     
     }

   
     return(
      <div>
        <form onSubmit={HandleSubmit}>
            <input placeholder="Enter todo"
            className="input" name='userInput' type='text'/>
            <button  type="submit" className="addbtn">Add</button>
        </ form>
        <Todos addProp={addtodo} key={addtodo.toString()} />
        </div>
        
        
    );
}
export default TodoInput