import  express  from "express";
import { addNewTodo ,getAllTodos} from "../controller/todo-controller.js";

export const route = express.Router();
route.post('/todos',addNewTodo);
route.get('/todos',getAllTodos);
