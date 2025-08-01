import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";


export const AppContext = createContext();
const AppContextProvider = (props)=>{
  const currencySymbol = '$';
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [doctors,setDoctors] = useState([]);

  const getDoctorsData = async ()=>{
    try{
      const {data} = await axios.get(backendUrl+'/api/doctor/list');
      if(data.success){
        setDoctors(data.doctors);
      }else{
        toast.error(data.message)
      }
    }
    catch(error){
      console.log(error);
      toast.error(error.message);
    }
  }
  useEffect(()=>{
    getDoctorsData();
  },[])
  const value={
    doctors,currencySymbol,getDoctorsData
  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;