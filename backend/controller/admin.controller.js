import z, { success } from 'zod';
import bcrypt from 'bcrypt'; 
import cloudinary from '../db/cloudinary.js';
import doctorModel from '../model/doctor.model.js'
import jwt from 'jsonwebtoken';

const addDoctor = async (req,res)=>{
    try{
        const {name,email,password,speciality,degree,experience,about,fees,address} = req.body;
        const imageFile =req.file;
        
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
            return res.status(400).json({success:false,message:"Missing details"})
        }
        const isUserAlreadyExist = await doctorModel.findOne({email});
        if(isUserAlreadyExist){
            return res.status(400).json({success:false,message:"User already exist"})
        }        
        const validation = z.object({
            name:z.string().min(3,"Name must be 3 characters long"),
            email:z.email("Email is not valid"),
            password:z.string().min(8,"Password must be 8 characters long"),
            speciality:z.string().min(1, "Speciality is required"),
            experience:z.coerce.number().min(0, "Experience can't be negative").max(45,"Not allowed"),
            about:z.string().min(1, "About section cannot be empty"),
            fees:z.coerce.number().positive("Fees must be a positive number"),
            address:z.object({
                line1:z.string().min(1,"Address is required"),
                line2:z.string()
            })
        })        
        try{
            const parsedBody = {
                ...req.body,
                address: JSON.parse(req.body.address),
            };
            const successValidation = validation.parse(parsedBody);
            const hashPassword =await bcrypt.hash(password,10);            
            if(successValidation){
                const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})                
                const imageUrl = imageUpload.secure_url;
            
                const doctorData = {
                    name,
                    email,
                    password:hashPassword,
                    image:imageUrl,
                    speciality,
                    degree,
                    experience,
                    about,
                    fees,
                    address:JSON.parse(address),
                    date:Date.now()
                }                
                const newDoctor = new doctorModel(doctorData);
                await newDoctor.save();
                return res.status(200).json({success:true,newDoctor,message:"Doctor added"})
            }else{
                return res.status(400).json({success:false,message:"Validation failed"})
            }
            

        }
        catch(err){
            return res.status(400).json({
                success: false,
                message: err.message || "Validation failed",
            });
        }
        
    }
    catch(err){
        return res.status(400).json({
            success: false,
            message: err.message || "Validation failed",
        });
    }
}

export const adminLogin = async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(email ===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET_KEY);
            res.cookie('token',token);
            return res.status(200).json({success:true,token,message:"Admin logged in successfully"})
        }else{
            return res.status(401).json({success:false,message:"Invalid email or password"})
        }  
    }
    catch(err){
        return res.status(400).json({
            success: false,
            message: err.message || "Validation failed",
        });
    }
}
export default addDoctor;