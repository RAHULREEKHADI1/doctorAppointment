import React, { createContext } from 'react'
import assets from '../assets/assets';

const AppContext = createContext();

export const AppContextProvider = (props)=>{
    const value = {
        assets
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}   

export default AppContext
