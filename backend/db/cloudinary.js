import {v2 as cloudinary} from 'cloudinary';

const connectCloudinary = async ()=>{
    cloudinary.config({
        cloud_name:process.env.CLOUDINARY_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_SECRET_KEY
    })
    try {
    const result = await cloudinary.api.ping();
    console.log("Cloudinary connected:", result);
  } catch (err) {
    console.error("Cloudinary connection failed:", err.message);
  }
}

export default connectCloudinary;