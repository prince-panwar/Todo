"use client"
import { useState } from "react";
import Link from "next/link";

 const LoginForm =()=>{
  const [email,setEmail]=useState<string>("")
  const  [Password,setPassword] = useState<string>("")


  const handleSubmit=(e:  React.SyntheticEvent<HTMLFormElement>)=>{
    e.preventDefault();
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
        value={Password}
        />
       
        <button type='submit'>submit</button>
        <button > 
        <Link href="/signup">
        signup
         </Link>
        </button>
      </form>
    );
  
}
export default LoginForm;
