import express  from "express";
import { loginUser, signUser } from "../controller/user-controller.js";
export const userRoute = express.Router();

//login
userRoute.post('/login',loginUser)
//signup
userRoute.post('/signup',signUser)

