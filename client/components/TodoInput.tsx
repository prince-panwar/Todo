"use client"
import React, { FormEvent } from 'react';
const TodoInput =()=>{
    const HandleSubmit=(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(e);
      
    }
    return(
        <form onSubmit={HandleSubmit}>
            <input placeholder="Enter todo"
            className="input"/>
            <button  type="submit" className="addbtn">Add</button>
        </ form>
        
    );
}
export default TodoInput