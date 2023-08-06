"use client"
import React, {useState} from 'react';
import axios from 'axios';
import Todos from './todo';
import Cookies from 'js-cookie';


const TodoInput =()=>{

  const [addtodo,setAddtodo] = useState<boolean>(false);
  const [userId,setUserId]=useState<string|null>(null); 
  const API_URL='http://localhost:8000'





  

  



  
  const HandleSubmit= async (e:  React.SyntheticEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const input = form.elements.namedItem('userInput') as HTMLInputElement;
       const todoItem = input.value
       setAddtodo(prev=>!prev);
      
      const userId= Cookies.get('userId');
     
      
       try{
        const response = await axios.post(`${API_URL}/todos`, {todoItem,userId});
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