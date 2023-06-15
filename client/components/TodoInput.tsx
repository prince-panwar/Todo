"use client"
import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import {addNewTodo} from '../redux/actions'
const TodoInput =()=>{
    const [todo,setTodo]=useState<string>("");
    const dispatch =useDispatch();
    const HandleSubmit=(e:  React.SyntheticEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const input = form.elements.namedItem('userInput') as HTMLInputElement;
       console.log(input.value);
      dispatch(addNewTodo(input.value));
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