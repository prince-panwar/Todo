import  express  from "express";
import { addNewTodo ,getAllTodos,toggleTodoDone,updateData,deleteData} from "../controller/todo-controller.js";

export const route = express.Router();
route.post('/todos',addNewTodo);
route.get('/todos/:id',toggleTodoDone)
route.get('/todos',getAllTodos);
route.put('/todos/:id',updateData);
route.delete('/todos/:id',deleteData);

