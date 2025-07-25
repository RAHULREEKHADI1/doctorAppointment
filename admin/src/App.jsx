import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AdminContext from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import DoctorList from './pages/Admin/DoctorList';
import AllAppointment from './pages/Admin/AllAppointment';
import AddDoctor from './pages/Admin/AddDoctor';

const App = () => {
  const {token} = useContext(AdminContext);
  return token ?(
    <div className='bg-[#f8f9fd]'>
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start '>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<></>}/>
          <Route path='/admin-dashboard' element={<Dashboard/>}/>
          <Route path='/doctor-list' element={<DoctorList/>}/>
          <Route path='/all-appointment' element={<AllAppointment/>}/>
          <Route path='/add-doctor' element={<AddDoctor/>}/>
        </Routes>
      </div>
    </div>
  ):
    (<div >
      <Login/>
      <ToastContainer/>
    </div>
    )
}

export default App
