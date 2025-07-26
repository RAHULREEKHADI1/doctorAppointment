import React, { useContext } from 'react'
import AdminContext from '../context/AdminContext'
import {NavLink} from 'react-router-dom';
import assets from '../assets/assets'

const Sidebar = () => {

  const {token} = useContext(AdminContext);

  return (
    <div className='min-h-screen border-r bg-white'>
      {
        token && <ul className='text-[#515151] mt-mdx'>
          <NavLink className={({isActive})=> `flex items-center gap-xm sm:gap-smx p-sm min-w-[120px] sm:p-smx sm:px-xl sm:min-w-72 cursor-pointer ${isActive && 'bg-[#f2f3ff] border-r-4 border-primary'}`} to={'/admin-dashboard'}>
            <img className='h-[14px]' src={assets.home_icon} alt=''/>
            <p className='text-smx2 sm:text-md'>Dashboard</p>
          </NavLink>
          <NavLink className={({isActive})=> `flex items-center gap-xm sm:gap-smx p-sm min-w-[120px] sm:p-smx sm:px-xl sm:min-w-72 cursor-pointer ${isActive && 'bg-[#f2f3ff] border-r-4 border-primary'}`} to={'/all-appointment'}>
            <img className='h-[14px]' src={assets.appointment_icon} alt=''/>
            <p className='text-smx2 sm:text-md'>Appointment</p>
          </NavLink>
          <NavLink className={({isActive})=> `flex items-center gap-xm sm:gap-smx p-sm min-w-[120px] sm:p-smx sm:px-xl sm:min-w-72 cursor-pointer ${isActive && 'bg-[#f2f3ff] border-r-4 border-primary'}`} to={'/add-doctor'}>
            <img className='h-[14px]' src={assets.add_icon} alt=''/>
            <p className='text-smx2 sm:text-md'>Add Doctor</p>
          </NavLink>
          <NavLink className={({isActive})=> `flex items-center gap-xm sm:gap-smx p-sm min-w-[120px] sm:p-smx sm:px-xl sm:min-w-72 cursor-pointer ${isActive && 'bg-[#f2f3ff] border-r-4 border-primary'}`} to={'/doctor-list'}>
            <img className='h-[14px]' src={assets.people_icon} alt=''/>
            <p className='text-smx2 sm:text-md'>Doctors List</p>
          </NavLink>
        </ul>
      }
    </div>
  )
}

export default Sidebar
