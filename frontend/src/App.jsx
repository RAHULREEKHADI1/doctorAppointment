import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify';
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Doctors from './pages/doctors'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Navbar from './components/navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-md sm:mx-[10%]'>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contacts' element={<Contact/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-appointment' element={<MyAppointment/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
