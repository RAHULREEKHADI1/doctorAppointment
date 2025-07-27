import React, { useContext, useEffect, useState } from 'react'
import AdminContext from '../../context/AdminContext'

const DoctorList = () => {

  const {doctors,getAllDoctors,token} = useContext(AdminContext);

  useEffect(()=>{
    if(token){
      getAllDoctors();
    }
  },[token])

  const removeBackground = (imageUrl) => {
  return imageUrl.replace('/upload/', '/upload/e_background_removal/');
  };


  const [isChecked,setIsChecked] = useState(false);

  return (
    <div className='m-mdx max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium'>All Doctors</h1>
      <div className='w-full flex flex-wrap gap-md pt-mxd gap-y-lg'>
        {
          doctors.map((item,idx)=>
            <div className='border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer  group' key={idx} >
              {/* {console.log(item.image)
              } */}
              <img className='bg-indigo-50 group-hover:bg-primary transition-all duration-400' src={removeBackground(item.image)} alt='' />
              <div>
                <p>{item.name}</p>
                <p>{item.speciality}</p>
                <div>
                  <input type='checkbox' onChange={(e)=>setIsChecked(e.target.checked)} checked={item.available}/>
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
