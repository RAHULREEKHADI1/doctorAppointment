import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointment = () => {

  const {doctors} = useContext(AppContext)
  
  return (
    <div>
      <p className='pb-smx mt-6xl text-zinc-700 border-b font-medium'>My Appointments</p>
      <div>
        {
          doctors.slice(0,3).map((item,idx)=>(
            <div className='grid grid-cols-[1fr_2fr] gap-md sm:flex sm:gap-lg py-sm border-b' key={idx}>
              <div>
                <img className='w-32 bg-indigo-50' src={item.image} alt=''/>
              </div>
              <div className='flex-1 sm:flex sm:flex-col sm:justify-center items-start text-smx2 text-zinc-600'>
                <p className='text-neutral-800 font-semibold'>{item.name}</p>
                <p>{item.speciality}</p>
                <p className='text-zinc-700 font-medium mt-xs'>Address :</p>
                <p className='text-smx'>{item.address.line1}</p>
                <p className='text-smx'>{item.address.line2}</p>
                <p className='text-smx mt-xs'><span className='text-smx text-neutral-700 font-medium'>Date & Time : </span>2 August 2025 | 7:30pm</p>
              </div>
              <div></div>
              <div className='flex flex-col gap-sm justify-end'>
                <button className='text-smx2 text-stone-500 text-center sm:min-w-48 py-sm border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
                <button className='text-smx2 text-stone-500 text-center sm:min-w-48 py-sm border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel Appointment</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointment
