"use client"
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";


const Header= ()=>{
    const router = useRouter();
    const handleLogOut =()=>{
       Cookies.remove('currentUser'); 
       router.push("/");
    }
    return(
         <div>
            <h1>
                TODO-LIST
            </h1>
            <div>
                <button onClick={handleLogOut}>logOut</button>
            </div>
        </div>
);
}
export default Header;