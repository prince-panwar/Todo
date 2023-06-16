"use client"
import React, {useState } from 'react';
import { useDispatch } from 'react-redux';

const TodoInput =()=>{
  const [todoItem,setTodoItem] = useState<string>("");
    const dispatch =useDispatch();
    const HandleSubmit=(e:  React.SyntheticEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const input = form.elements.namedItem('userInput') as HTMLInputElement;
       console.log(input.value);
       setTodoItem(input.value);
     
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