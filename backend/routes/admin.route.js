import express from 'express';
import upload from '../middlewares/multer.js';
import addDoctor, { adminLogin } from '../controller/admin.controller.js';
import authAdmin from '../middlewares/auth.admin.js';

const adminRouter = express.Router();

adminRouter.post('/add-doctor',authAdmin,upload.single('image'),addDoctor);
adminRouter.post('/login',adminLogin);

export default adminRouter; 
