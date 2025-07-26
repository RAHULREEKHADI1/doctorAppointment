import React, { createContext, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminContext = createContext();
const backendUrl = import.meta.env.VITE_BACKEND_URL;
 
export const AdminContextProvider = (props)=>{
    const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):"");
    const [doctors,setDoctors] = useState([])
    
    const getAllDoctors = async ()=>{
        try{
            const {data} = await axios.post(backendUrl+'/api/admin/all-doctors',{},{headers:{token:token}});
            if(data.success){                
                setDoctors(data.doctor)
                // console.log(data.doctor);
                
            }else{
                toast.error(err?.response?.data.message);
            }
        }
        catch(error){
            toast.error(err?.response?.data.message);
        }
    }

    const value = {
        token,setToken,
        backendUrl,
        getAllDoctors,
        doctors
    }
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}   

export default AdminContext;
