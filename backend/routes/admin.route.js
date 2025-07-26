import express from 'express';
import upload from '../middlewares/multer.js';
import addDoctor, { adminLogin, allDoctors } from '../controller/admin.controller.js';
import authAdmin from '../middlewares/auth.admin.js';

const adminRouter = express.Router();

adminRouter.post('/add-doctor',authAdmin,upload.single('docImg'),addDoctor);
adminRouter.post('/login',adminLogin);
adminRouter.post('/all-doctors',authAdmin,allDoctors);

export default adminRouter; 
