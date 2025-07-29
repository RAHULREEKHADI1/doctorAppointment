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
            }else{
                toast.error(err?.response?.data.message);
            }
        }
        catch(err){
            toast.error(err?.response?.data.message);
        }
    }

    const changeAvailability = async (docId)=>{
        try{
            const {data} = await axios.post(backendUrl+'/api/admin/change-availability',{docId},{headers:{token:token}});
            if(data.success){
                toast.success(data.message);
                getAllDoctors()
            }else{
                toast.error(data.message)
            }
        }
        catch(err){
            toast.error(err?.response?.data.message);
        }
    }
    const value = {
        token,setToken,
        backendUrl,
        getAllDoctors,
        doctors,
        changeAvailability
    }
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}   

export default AdminContext;
