import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDb from './db/db.js';
import cookieParser from 'cookie-parser';
import {connectCloudinary} from './db/cloudinary.js';
import adminRouter from './routes/admin.route.js';
dotenv.config();
connectToDb();
connectCloudinary();
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.use('/api/admin',adminRouter);
export default app;