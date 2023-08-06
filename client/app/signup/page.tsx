"use client"
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const API_URL = "http://localhost:8000/user/signup";
 const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post(API_URL, { email, password });
      Cookies.set("currentUser", JSON.stringify(response));
      router.push("/home");
      console.log(response);
  
      // Handle successful response
      if (response.status === 200) {
        const { email, token } = response.data;
        console.log(email, token);
      }
    } catch (error:any) {
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data;
        setError(errorMessage);
      }
    }
  };
  
   

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
          sign up
        </button>
      </div>
    {error && <div>{error}</div>}
    </form>
  </div>
  );
};

export default Signup;
