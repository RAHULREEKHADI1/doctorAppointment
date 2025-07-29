import z, { success } from 'zod';
import bcrypt from 'bcrypt';
import userModel from "../model/user.model.js";
import jwt from 'jsonwebtoken';

const registerUser = async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        if(!email || !password || !name){
            return res.status(400).json({success:false,message:"All fields are required"})
        }
        const isUserAlreadyExist = await userModel.findOne({email});
        if(isUserAlreadyExist){
            return res.status(400).json({success:false,message:"User already exist"})
        }
        const validator = z.object({
            name:z.string().min(3,"Name must be 3 character long"),
            email:z.email(),
            password:z.string().min(8,"Password must be 8 characters long")
        })
        try{
            const isValid = validator.safeParse({name,email,password});
            if(!isValid.success){
                return res.status(401).json({success:false,message:"Please enter valid email and password",errors: isValid.error.format()})
            }
            const hashPassword = await bcrypt.hash(password,10);
            const user = await userModel.create({
                name,
                email,
                password:hashPassword
            })
            const userToken = jwt.sign({_id:user._id},process.env.JWT_SECRET_KEY)
            return res.status(200).json({success:true,message:"User registered successfully",user,userToken})
        }
        catch(error){
            console.log(error.message);
            return res.json({success:false,message:error.message})   
        }
        
    }
    catch(error){
        console.log(error.message)
        return res.json({success:false,message:error.message})
    }
}

export const loginUser = async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(401).json({success:false,message:"Invalid email or password"})
        }
        const validator = z.object({
            email:z.email(),
            password:z.string().min(8,"Password must be 8 characters long")
        })
        try{
            const isValid = validator.safeParse({email,password});
            
            if(!isValid.success){
                return res.status(401).json({success:false,message:"Please enter valid email and password",errors: isValid.error.format()})
            }
            const isUserAlreadyExist = await userModel.findOne({email}).select('+password');            
            if(!isUserAlreadyExist){
                return res.status(400).json({success:false,message:"User doesnot exist"})
            }            
            const comparePassword = await bcrypt.compare(password,isUserAlreadyExist.password)            
            if(!comparePassword){
                return res.status(401).json({success:false,message:"Invalid credentials"})
            }
            const userToken = jwt.sign({_id:isUserAlreadyExist._id},process.env.JWT_SECRET_KEY)            
            return res.status(200).json({success:true,message:"User logged in successfully",userToken})
        }
        catch(error){
            console.log(error.message);
            return res.status(400).json({success:false,message:error.message})   
        }

    }catch(error){
        console.log(error.message);
    }
}

export default registerUser;