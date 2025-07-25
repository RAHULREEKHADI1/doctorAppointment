import React, { useContext, useState } from 'react'
import assets from '../../assets/assets'
import AdminContext from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';
const AddDoctor = () => {

  const [formData,setFormData] = useState({
    docImg:false,
    name:'',
    email:'',
    password:'',
    experience:'',
    fees:'',
    speciality:'',
    degree:'',
    address1:'',
    address2:'',
    about:''
  })

  const handleChange = (e) => {
  const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked
              : type === 'file' ? files[0] || null
              : type === 'number' ? Number(value)
              : value,
      }));
  };
  const {backendUrl,token} = useContext(AdminContext);
  const onSubmitHandler = async(event)=>{
    event.preventDefault();
    try{      
      if(!formData.docImg){
        return toast.error("Image not selected");
      }
      const payload = new FormData();
      Object.entries(formData).forEach(([key,value])=>{
      payload.append(key,value);
      })      
      payload.append('address', JSON.stringify({
        line1: formData.address1,
        line2: formData.address2
      })); 
      for (let [key, value] of payload.entries()) {
        console.log(`${key}: ${value}`);
      }
      const {data} = await axios.post(backendUrl+'/api/admin/add-doctor',payload,{headers:{token:token}},)
      console.log(data,"coming or not");
      
      if(data.success){
        toast.success("Doctor registered successfully")
        setFormData({
          docImg: false,
          name: '',
          email: '',
          password: '',
          experience: '',
          fees: '',
          speciality: '',
          degree: '',
          address1: '',
          address2: '',
          about: ''
        });
      }else{
        toast.error(data.message);
      }
    }catch(err){
      console.log(err);
      toast.error(err?.response?.data.message)
      
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='my-mdx mx-smx sm:mx-mdx w-full'>
      <p className='mb-smx text-mdx font-normal sm:text-lg sm:font-medium pt-xs'>Add Doctor</p>
      <div className='bg-white p-smx sm:p-xl border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
        <div className='flex items-center gap-md mb-xl text-gray-500'>
          <label htmlFor='doc_img'>
            <img className='w-16 bg-lightGray rounded-full cursor-pointer' src={formData.docImg? URL.createObjectURL(formData.docImg) :assets.upload_area} alt=''/>
          </label>
          <input type='file' id="doc_img" name='docImg' onChange={handleChange} hidden/>
          <p>Upload doctor picture</p>
        </div>
        <div className='flex flex-col lg:flex-row items-start gap-xlg text-midGray'>
          <div className='w-full lg:flex-1 flex flex-col gap-md'>
            <div className='flex-1 flex flex-col gap-xs'>
              <label htmlFor="name">Doctor Name</label>
              <input className='border rounded px-smx py-sm' type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className='flex-1 flex flex-col gap-xs'>
              <label htmlFor="email">Doctor Email</label>
              <input className='border rounded px-smx py-sm' type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className='flex-1 flex flex-col gap-xs'>
              <label htmlFor="password">Password</label>
              <input className='border rounded px-smx py-sm' type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className='flex-1 flex flex-col gap-xs'>
              <label htmlFor="experience">Experience (in years)</label>
              <select className='border rounded px-smx py-xsm' id="experience" name="experience" value={formData.experience} onChange={handleChange} required>
                <option value="" disabled>Select experience</option>
                <option value="1">1 year</option>
                <option value="2">2 years</option>
                <option value="3">3 years</option>
                <option value="4">4 years</option>
                <option value="5">5 years</option>
                <option value="6">6 years</option>
                <option value="7">7 years</option>
                <option value="8">8 years</option>
                <option value="9">9 years</option>
                <option value="10">10+ years</option>
              </select>
            </div>
            <div className='flex-1 flex flex-col gap-xs'>
              <label htmlFor="fees">Fees</label>
              <input className='border rounded px-smx py-sm' type="number" id="fees" name="fees" placeholder="Fees" min="0" value={formData.fees} onChange={handleChange} required />
            </div>
          </div>
          <div className='w-full lg:flex-1 flex flex-col gap-md'>
            <div className='flex-1 flex flex-col gap-xs'>
              <label htmlFor="speciality">Speciality</label>
              <select className='border rounded px-smx py-xsm' name='speciality' id='speciality' value={formData.speciality} onChange={handleChange} required>
                <option value='' disabled>Select Speciality</option>
                <option value='General physician'>General physician</option>
                <option value='Gynecologist' >Gynecologist</option>
                <option value='Dermatologist' >Dermatologist</option>
                <option value='Pediatricians' >Pediatricians</option>
                <option value='Neurologist' >Neurologist</option>
                <option value='Gastroenterologist' >Gastroenterologist</option>
              </select>
            </div>
            <div className='flex-1 flex flex-col gap-xs'>
              <label htmlFor="degree">Degree</label>
              <input className='border rounded px-smx py-sm' type="text" id="degree" name="degree" placeholder="degree" value={formData.degree} onChange={handleChange} required />
            </div>
            <div className='flex-1 flex flex-col gap-xs'>
              <label>Address</label>
              <input className='border rounded px-smx py-sm' type="text" id="address1" name="address1" placeholder="Address 1" value={formData.address1} onChange={handleChange} required />
              <input className='border rounded px-smx py-sm my-sm' type="text" id="address2" name="address2" placeholder="Address 2" value={formData.address2} onChange={handleChange} required />
            </div>
          </div>
        </div>
         <div>
          <p className='mt-md mb-sm'>About Doctor</p>
          <textarea type='text' className='w-full px-md py-sm border rounded' name='about' placeholder='Write about doctor' rows={5} value={formData.about} onChange={handleChange} required/>
        </div>
      </div>
     
      <button className='bg-primary px-xlg py-smx mt-md rounded-full text-white'>Add doctor</button>
    </form>
  )
}

export default AddDoctor;
