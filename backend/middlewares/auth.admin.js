import jwt from 'jsonwebtoken';

const authAdmin = async(req,res,next)=>{
    try{
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        if(!token){
            return res.status(401).json({success:false,message:"Unauthorized"})
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
        if(decoded !==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            return res.status(401).json({success:false,message:"Unauthorized"})
        }
        next();
    }
    catch(err){
        console.log(err.message);
        return res.status(401).json({success:false,message:"err.message"})
    }
}
export default authAdmin;