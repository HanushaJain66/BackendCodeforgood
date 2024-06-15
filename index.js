import express from 'express';
import Connection from './connection/connection.js';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import mentorRouter from './routes/mentorRoutes.js';
import bodyParser from 'body-parser';
import studentRouter from './routes/studentRoutes.js';
dotenv.config();

const port = 8000;
const app = express();

app.use(cors());

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',mentorRouter);
Connection(process.env.DB_username,process.env.DB_password);

app.listen(port,()=>{
    console.log("backend is working on port ",port);
});