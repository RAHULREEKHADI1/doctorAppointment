import jwt from 'jsonwebtoken';

const authUser = async(req,res,next)=>{
    try{        
        const {usertoken} =req.headers;     
        if(!usertoken){
            return res.status(401).json({success:false,message:"Unauthorized"})
        }
        const decoded = jwt.verify(usertoken,process.env.JWT_SECRET_KEY);

        req.body = req.body || {};        
        req.body.userId = decoded._id;
        
        next();
    }
    catch(err){
        console.log(err.message);
        return res.status(401).json({success:false,message:err.message})
    }
}
export default authUser;