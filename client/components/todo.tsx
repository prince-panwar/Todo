import type { GetServerSideProps , NextPage } from "next";
import axios from "axios";

interface Todo {
    item:{
        todoItem: string;
        done: boolean;
        createAt:Date;
    }
       
}
interface TodoData{
    data:Todo[]|null;
}
const   API_URL="http://localhost:8000"
export const getServerSideProps:GetServerSideProps<TodoData> = async()=>{
    try{
        const res = await axios.get<Todo[]>(`${API_URL}/todos`);
        const data = res.data;
    return{
        props:{
            data
        },
    }
    }catch(e:any){
        console.log(e.message);
        return{
            props:{
                data: null,
            }
        }
    }
}
    

const Todos:NextPage<TodoData> = ({data})=>{

    return(
        <div>
        {data?(
            data.map((item)=>(
                <div key={item.todoItem}
            ))
        )}
        </div>

    );
}
export default Todos;
