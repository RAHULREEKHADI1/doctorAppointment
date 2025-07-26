import React, { useContext } from 'react'
import assets from '../assets/assets'
import AdminContext from '../context/AdminContext'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const {token,setToken} = useContext(AdminContext);
    const navigate = useNavigate();

    const logout = ()=>{
        navigate('/')
        token && setToken('');
        token && localStorage.removeItem('token');
    }
  return (
    <div className='flex justify-between items-center px-md sm:px-xlg py-smx border-b bg-white'>
      <div className='flex items-center text-smx2 gap-xm sm:gap-sm'>
        <img className='max-w-[120px] sm:w-40 cursor-pointer' src={assets.admin_logo} alt=''/>
        <p className='border px-sm py-xs rounded-full border-gray-500 text-midGray'>{token ? 'Admin' : 'Doctor'}</p>
      </div>
      <button onClick={logout} className='bg-primary text-white text-smx2 rounded-full px-lg py-xm sm:px-xlg sm:py-sm leading-4'>Logout</button>
    </div>
  )
}

export default Navbar
