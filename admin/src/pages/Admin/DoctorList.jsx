import React, { useContext, useEffect, useState } from 'react'
import AdminContext from '../../context/AdminContext'


const DoctorList = () => {

  const {doctors,getAllDoctors,token,changeAvailability} = useContext(AdminContext);

  useEffect(()=>{
    if(token){
      getAllDoctors();
    }
  },[token])

  const removeBackground = (imageUrl) => {
  return imageUrl.replace('/upload/', '/upload/e_background_removal/');
  };

  return (
    <div className='m-mdx max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium'>All Doctors</h1>
      <div className='w-full flex flex-wrap gap-md pt-mxd gap-y-lg'>
        {
          doctors.map((item,idx)=>
            <div className='border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer  group' key={idx} >
              {/* {console.log(item.image)
              } */}
              <img className='h-56 min-w-56 bg-indigo-50 group-hover:bg-primary transition-all duration-500' src={removeBackground(item.image)} alt='' />
              <div className='p-md '>
                <p className='text-neutral-800 text-mdx font-medium'>{item.name}</p>
                <p className='text-zinc-600 text-smx2'>{item.speciality}</p>
                <div className='mt-xs flex items-center gap-xs text-smx'>
                  <input type='checkbox' onChange={()=>changeAvailability(item._id)} checked={item.available}/>
                  <p>Available</p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default DoctorList
