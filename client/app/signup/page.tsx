"use client"
import { useState } from "react"
const Signup=()=>{
    const [email,setEmail]=useState<string>("")
    const  [Password,setPassword] = useState<string>("")
const handleSubmit=(e:  React.SyntheticEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(email)
    console.log(Password)
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
     <button type="submit">signup</button>
      </form>
    );
  
}
export default Signup;