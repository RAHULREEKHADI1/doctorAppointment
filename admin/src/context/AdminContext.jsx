import React, { createContext, useState } from 'react'


const AdminContext = createContext();
const backendUrl = import.meta.env.VITE_BACKEND_URL;
 
export const AdminContextProvider = (props)=>{
    const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):"");
    
    const value = {
        token,setToken,
        backendUrl
    }
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}   

export default AdminContext;
