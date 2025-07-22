import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDb from './db/db.js';
dotenv.config();
connectToDb();
const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello world')
})
export default app;