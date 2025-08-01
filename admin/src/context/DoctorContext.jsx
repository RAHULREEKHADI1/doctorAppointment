import React, { createContext } from 'react'


const DoctorContext = createContext();

export const DoctorContextProvider = (props)=>{
    const value = {

    }
    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}   

export default DoctorContext;
