import React, { useState } from 'react';
import assets from '../assets/assets';
import {NavLink, useNavigate} from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/login');
  }

  const [showMenu,setShowMenu] = useState(false);
  const [token,setToken] = useState(true);

  return (
    <div className='flex items-center justify-between p-md border-b border-lightGray'>
        <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt=""/>
        <ul className='hidden md:flex gap-mxd items-start font-medium '>
          <NavLink to='/'>
            <li className='py-xs'>Home</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
          </NavLink>
          <NavLink to='/doctors'>
            <li className='py-xs'>All Doctors</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
          </NavLink>
          <NavLink to='about'>
            <li className='py-xs'>About</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
          </NavLink>
          <NavLink to='contacts'>
            <li className='py-xs'>Contacts</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
          </NavLink>
        </ul>
        <div className='flex items-center gap-xl'>
          {token 
          ? <div className='flex items-center gap-sm cursor-pointer group relative'>
              <img className='rounded-full w-8' src={assets.profile_pic} alt=""/>
              <img className='w-2.5 ' src={assets.dropdown_icon} alt=""/>
              <div className='absolute top-0 pt-7xl text-smx font-medium text-midGray z-20 hidden group-hover:block '>
                <div className='min-w-48 rounded flex flex-col gap-smx p-smx bg-stoneGray  '>
                  <p onClick={()=>{navigate('/my-profile')}} className='hover:text-black'>My Profile</p>
                  <p onClick={()=>{navigate('/my-appointment')}} className='hover:text-black'>My Appointments</p>
                  <p onClick={()=>{setToken(false)}} className='hover:text-black'>Logout</p>
                </div>
              </div>
          </div>:
          <button onClick={handleClick} className='bg-primary text-white font-light px-xl py-smx rounded-full hidden md:block'>Create account</button>
          }
        </div>
    </div>
  )
}

export default Navbar;
