import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {AppContext} from '../context/AppContext'
import assets from '../assets/assets';

const Appointment = () => {
  const {docId} = useParams();
  const {doctors,currencySymbol} = useContext(AppContext)
  
  const [docInfo,setDocInfo] = useState(null)
  const [doctorSlots,setDoctorSlots] = useState([]);
  const [slotIndex,setSlotIndex] = useState(0);
  const [slotTime,setSlotTime] = useState('');

  const fetchInfo =async ()=>{
    const docInfo =await doctors.find(doc => doc._id===docId);
    setDocInfo(docInfo);    
  }
  useEffect(()=>{
    fetchInfo();
  },[doctors,docId])

  const getAvailableSlots = async () =>{
    
  }
  useEffect(()=>{
    getAvailableSlots();
  },[docInfo])

  return docInfo && (
    <div className='mt-xl'>
      <div className='flex flex-col sm:flex-row gap-md'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt=''/>
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-xl py-xl bg-white mx-2 sm:mx-0 mt-[-10xl] sm:mt-0'>
          <p className='flex items-center gap-sm text-lg font-medium text-darkGray'>{docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt=''/>
          </p>
          <div className='flex items-center gap-sm text-smx2 mt-xs text-midGray'>
            <p>{docInfo.degree}-{docInfo.speciality}</p>
            <button className='py-xs px-sm border text-smx rounded-full'>{docInfo.experience}</button>
          </div>
          <div>
            <p className='flex items-center gap-sm font-medium text-darkGray mt-smx'>About 
              <img src={assets.info_icon} alt=''/>
            </p>
            <p className='text-smx2 text-gray-500 max-w-[700px] mt-sm'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-light mt-md'>
            Appointment Fees:<span className='text-midGray font-medium pl-sm'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Appointment;
