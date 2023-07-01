"use client"
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

 const LoginForm =()=>{
  const [email,setEmail]=useState<string>("")
  const  [password,setPassword] = useState<string>("")
  const [error,setError]=useState<string|null>(null);
const API_URL="http://localhost:8000/user/login";

  
const handleSubmit  = async (e:  React.SyntheticEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setError(null);
    try{
      const response = await axios.post(`${API_URL}`,JSON.stringify({email,password}))
   
      
    }
  catch(e:any){
    if(e.response&&e.response.status===400){
      const errorMessage=e.response.data;
      setError(errorMessage);
    }
  }

    
   
  }
    return (
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
        type="email"
         placeholder="Enter the email"
         onChange={(e)=>setEmail(e.target.value)}
         value={email}
         />
        <label>Password</label>
        <input 
        type="password" 
        placeholder="Enter the Password"
        onChange={(e)=>setPassword(e.target.value)} 
        value={password}
        />
       
        <button type='submit'>submit</button>
        <button > 
        <Link href="/signup">
        signup
         </Link>
        </button>
        {error&&<div>{error}</div>}
      </form>
    );
  
}
export default LoginForm;
