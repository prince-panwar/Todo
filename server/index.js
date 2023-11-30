import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import {route} from './routes/route.js';
import {userRoute}from'./routes/user.js';

const app = express();
app.use(cors());
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use('/',route);
app.use('/user',userRoute);
const PORT = process.env.PORT || 8000;
Connection();
app.listen(PORT,()=>console.log("Server is running sucessfully on port "+PORT)); 