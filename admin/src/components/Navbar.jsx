import React, { useContext } from 'react'
import assets from '../assets/assets'
import AdminContext from '../context/AdminContext'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const {aToken,setAToken} = useContext(AdminContext);
    const navigate = useNavigate();

    const logout = ()=>{
        navigate('/')
        aToken && setAToken('');
        aToken && localStorage.removeItem('aToken');
    }
  return (
    <div className='flex justify-between items-center px-md sm:px-xlg py-smx border-b bg-white'>
      <div className='flex items-center text-smx2 gap-sm'>
        <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt=''/>
        <p className='border px-sm py-xs rounded-full border-gray-500 text-midGray'>{aToken ? 'Admin' : 'Doctor'}</p>
      </div>
      <button onClick={logout} className='bg-primary text-white text-smx2 rounded-full px-xlg py-sm'>Logout</button>
    </div>
  )
}

export default Navbar
