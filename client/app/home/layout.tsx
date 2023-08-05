"use client"
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect ,useState} from "react";
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
const router = useRouter();
const [currentUser,setCurrentUser]=useState<string|undefined>(undefined);
const handleLogout=()=>{
   
    Cookies.remove('currentUser');
}

useEffect(()=>{
    setCurrentUser(Cookies.get('currentUser'));
    if(!currentUser){
  router.push("/");
    }
},[currentUser])


    return (
      <html lang="en">
      {currentUser&&(<button onClick={handleLogout}>logOut</button>)}
      <body> {children} </body>
     
      </html>
    );
  
  }