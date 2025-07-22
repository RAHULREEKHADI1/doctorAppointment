import mongoose from "mongoose";

const connectToDb = async()=>{    
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log("MongoDB connected")
    }
    catch(err){
        console.error(err);
    }
}
export default connectToDb;