"use client"
import React, { FormEvent, useState } from 'react';
const TodoInput =()=>{
    const [todo,setTodo]=useState<string>("");
    const HandleSubmit=(e:  React.SyntheticEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const input = form.elements.namedItem('userInput') as HTMLInputElement;
       console.log(input.value);
       setTodo(input.value);
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