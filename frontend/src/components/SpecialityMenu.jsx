import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'
const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center gap-md text-midGray py-8xl'>
        <h1 className='text-3xl font-medium'>Find by Speciality</h1>
        <p className='sm:w-1/2 text-center text-smx2'>Simply browse through our extensive list of trusted doctors, schedule your appointment hussle free</p>
        <div className='flex sm:justify-center gap-md pt-mdx w-full overflow-scroll'>
            {specialityData.map((item,idx)=>(
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center cursor-pointer text-smx flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={idx} to={`/doctors/${item.speciality}`}>
                    <img className='w-16 sm:w-24 mb-sm' src={item.image} alt=''/>
                    <p>{item.speciality}</p>
                </Link>               
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu
