import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {AppContext} from '../context/AppContext'
import assets from '../assets/assets';
import RelatedDoctor from '../components/RelatedDoctor';

const Appointment = () => {
  const {docId} = useParams();
  const {doctors,currencySymbol} = useContext(AppContext)
  
  const [docInfo,setDocInfo] = useState(null)
  const [doctorSlots,setDoctorSlots] = useState([]);
  const [slotIndex,setSlotIndex] = useState(0);
  const [slotTime,setSlotTime] = useState('');
  const daysOfWeek = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']

  const fetchInfo =async ()=>{
    const docInfo =await doctors.find(doc => doc._id===docId);
    setDocInfo(docInfo);    
  }
  useEffect(()=>{
    fetchInfo();
  },[doctors,docId])

  const getAvailableSlots = async () =>{
    setDoctorSlots([]);

    let today = new Date();
    for(let i=0;i<7;i++){
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate()+i);
      
      let endTime = new Date();
      endTime.setDate(today.getDate()+i);
      endTime.setHours(21,0,0,0);

      if(today.getDate()===currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() >10 ? currentDate.getHours()+1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }else{
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      let tiimeSlots = [];
      while(currentDate < endTime){
        let formattedTime = currentDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',hour12:true}) 
        tiimeSlots.push({
          datetime: new Date(currentDate),
          time:formattedTime
        })
        currentDate.setMinutes(currentDate.getMinutes()+30);
      }
      setDoctorSlots(prev =>([...prev,tiimeSlots]))
    }
  }

  useEffect(()=>{
    console.log(doctorSlots);
  },[doctorSlots])

  useEffect(()=>{
    getAvailableSlots();
  },[docInfo])

  const removeBackground = (imageUrl) =>{
    return imageUrl.replace('/upload/','/upload/e_background_removal/')
  }

  return docInfo && (
    <div className='mt-xl'>
      <div className='flex flex-col sm:flex-row gap-md'>
        <div>
          <img className='bg-primary w-full max-h-80 sm:max-w-72 rounded-lg' src={removeBackground(docInfo.image)} alt=''/>
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
      <div className='sm:ml-72 sm:pl-md mt-md font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-md items-center w-full overflow-x-scroll mt-md'>{
          doctorSlots.length && doctorSlots.map((item,idx)=>(
            <div onClick={()=>setSlotIndex(idx)} className={`text-center py-lg min-w-16 rounded-full cursor-pointer ${slotIndex === idx ? 'bg-primary text-white':'border border-gray-200'}`} key={idx}>
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))
        }</div>
        <div className='flex items-center overflow-x-scroll gap-smx w-full mt-md'>
          {
            doctorSlots.length && doctorSlots[slotIndex].map((item,idx)=>(
              <p onClick={()=>setSlotTime(item.time)} className={`text-smx2 flex-shrink-0 px-md py-sm font-light rounded-full cursor-pointer ${item.time ===slotTime ? 'bg-primary text-white':'border border-gray-200'}`} key={idx}>
                {item.time.toLowerCase()}
              </p>
            )) 
          }
        </div>
        <button className='bg-primary text-white font-light px-7xl py-smx rounded-full my-lg'>Book an appointment</button>
      </div>
      <RelatedDoctor docId={docId} speciality={docInfo.speciality}/>
    </div>
  )
}

export default Appointment;
