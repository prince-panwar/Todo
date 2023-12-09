"use client"
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";


const LoginForm =()=>{
  const [email,setEmail]=useState<string>("")
  const  [password,setPassword] = useState<string>("")
  const [error,setError]=useState<string|null>(null);
const API_URL="https://todo-main.up.railway.app/user/login";
 const router = useRouter();

  
const handleSubmit  = async (e:  React.SyntheticEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setError(null);
    console.log({email,password})
    try{
      const response = await axios.post(`${API_URL}`,{email,password})//making a call to login route 
      const { userID, token } = response.data; // Destructure the response object to get userID and token
      Cookies.set("currentUser", JSON.stringify(token)); // Storing the token in cookies
      Cookies.set("userId", JSON.stringify(userID));
      router.push("/home")
  }
  catch(e:any){
    if(e.response&&e.response.status===400){
      const errorMessage=e.response.data;
      setError(errorMessage);
    }
  }

    
   
  }
    return (
      <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="formGroup">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter the email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="formGroup">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter the Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="formGroup">
          <button className="submitButton" type="submit">
            Log in
          </button>
        </div>

        <div style={{textAlign:"center"}}className="formGroup">
          <Link   legacyBehavior href="/signup">
            <a className="signupLink">Signup</a>
          </Link>
        </div>
        
        

        {error && <div>{error}</div>}
      </form>
    </div>
    );
  
}
export default LoginForm;
