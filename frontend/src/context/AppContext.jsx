import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";


export const AppContext = createContext();
const AppContextProvider = (props)=>{
  const currencySymbol = '$';
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [doctors,setDoctors] = useState([]);
  const [userToken,setUserToken] = useState(localStorage.getItem('userToken')? localStorage.getItem('userToken'):false)
  const [userData,setUserData] = useState(false);

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

  const loadUserProfileData = async()=>{
    try{      
      const {data} = await axios.get(backendUrl+'/api/user/profile',{headers:{userToken}})      
      if(data.success){
        setUserData(data.userData)
      }else{
        toast.error(data.message)
      }
    }catch(error){
      console.log(error.message);
      toast.error(error.message)
    }
  }
  useEffect(()=>{
    if(userToken){
      loadUserProfileData();
    }else{
      setUserData(false)
    }
  },[userToken])
  const value={
    doctors,currencySymbol,getDoctorsData,userToken,setUserToken,backendUrl,userData,setUserData,loadUserProfileData
  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;