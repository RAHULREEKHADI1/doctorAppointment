import React, { useContext, useEffect } from 'react'
import AdminContext from '../../context/AdminContext'

const DoctorList = () => {

  const {doctors,getAllDoctors,token} = useContext(AdminContext);

  useEffect(()=>{
    if(token){
      getAllDoctors();
    }
  },[token])

  return (
    <div>
      <h1>All Doctors</h1>
      <div>
        {
          doctors.map((item,idx)=>
            <div key={idx} >
              {/* {console.log(item.image)
              } */}
              <img src={item.image} alt='' />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default DoctorList
