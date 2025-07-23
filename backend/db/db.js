import mongoose from "mongoose";

const connectToDb = async()=>{    
    try{
        mongoose.connection.on('connected', () =>console.log("MongoDB connected"))
        await mongoose.connect(`${process.env.DB_URL}/prescripto`)
    }
    catch(err){
        console.error(err);
    }
}
export default connectToDb;