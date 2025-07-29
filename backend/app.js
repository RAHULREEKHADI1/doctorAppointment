import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDb from './db/db.js';
import cookieParser from 'cookie-parser';
import {connectCloudinary} from './db/cloudinary.js';
import adminRouter from './routes/admin.route.js';
import doctorRouter from './routes/doctor.route.js';
import userRouter from './routes/user.route.js';
dotenv.config();
connectToDb();
connectCloudinary();
const app = express();
app.use(express.json());
const allowedOrigins = ['http://localhost:5174', 'http://localhost:5173'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.use('/api/admin',adminRouter);
app.use('/api/doctor',doctorRouter);
app.use('/api/user',userRouter)

export default app;