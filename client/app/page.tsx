import Link from "next/link";
import LoginForm from "../components/loginForm";
export default function Home() {

  return (
  
     <div>
<LoginForm/>
<Link href={"/home"}>home</Link>
   </div>

  )
}
