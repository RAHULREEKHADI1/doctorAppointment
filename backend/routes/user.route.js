import express from 'express';
import registerUser, { getProfile, loginUser, updateProfile } from '../controller/user.controller.js';
import authUser from '../middlewares/auth.user.js';
import upload from '../middlewares/multer.js'

const userRouter = express.Router();
userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.get('/profile',authUser,getProfile);
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile)

export default userRouter;