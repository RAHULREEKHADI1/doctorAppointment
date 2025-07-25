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
          <NavLink className={({isActive})=> `flex items-center gap-smx p-smx md:px-xl md:min-w-72 cursor-pointer ${isActive && 'bg-[#f2f3ff] border-r-4 border-primary'}`} to={'/admin-dashboard'}>
            <img src={assets.home_icon} alt=''/>
            <p>Dashboard</p>
          </NavLink>
          <NavLink className={({isActive})=> `flex items-center gap-smx p-smx md:px-xl md:min-w-72 cursor-pointer ${isActive && 'bg-[#f2f3ff] border-r-4 border-primary'}`} to={'/all-appointment'}>
            <img src={assets.appointment_icon} alt=''/>
            <p>Appointment</p>
          </NavLink>
          <NavLink className={({isActive})=> `flex items-center gap-smx p-smx md:px-xl md:min-w-72 cursor-pointer ${isActive && 'bg-[#f2f3ff] border-r-4 border-primary'}`} to={'/add-doctor'}>
            <img src={assets.add_icon} alt=''/>
            <p>Add Doctor</p>
          </NavLink>
          <NavLink className={({isActive})=> `flex items-center gap-smx p-smx md:px-xl md:min-w-72 cursor-pointer ${isActive && 'bg-[#f2f3ff] border-r-4 border-primary'}`} to={'/doctor-list'}>
            <img src={assets.people_icon} alt=''/>
            <p>Doctors List</p>
          </NavLink>
        </ul>
      }
    </div>
  )
}

export default Sidebar
