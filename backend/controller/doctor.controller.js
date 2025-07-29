import doctorModel from "../model/doctor.model.js";



const changeAvailability = async(req,res)=>{
    try{        
        const {docId} = req.body;  
        console.log(req.body);
        const docData = await doctorModel.findById(docId);
        await doctorModel.findByIdAndUpdate(docId,{available:!docData.available})
        return res.json({success:true,message:"Changed availability"})
        
    }   
    catch(err){
        console.error(err);
        return res.status(400).json({success:false,message:err.message})
    }
}
export default changeAvailability;