import React, { useState } from 'react'
import assets from '../assets/assets'

const MyProfile = () => {

  const [userData,setUserData] = useState({
    name:"Edward Vincent",
    image:assets.profile_pic,
    email:"edward@pre.com",
    phone:'+1 234 4567 44',
    address:{
      line1:"57th Cross, Richmond",
      line2:"Circle Church Road, London"
    },
    gender:'Male',
    dob:'2000-01-20'
  })

  const [isEdit,setIsEdit] = useState(false);

  return (
    <div className='max-w-lg mt-lg flex flex-col gap-sm text-smx2'>
      <img className='w-36 rounded' src={userData.image} alt="" />
      {
        isEdit ?
        <input className='bg-gray-100 text-xl font-medium max-w-60 mt-md' type="text" value={userData.name} onChange={e => setUserData(prev => ({...prev,name:e.target.value}) )} />
        :
        <p className='font-medium text-xl text-neutral-800 mt-md'>{userData.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-md '>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-sm mt-smx text-neutral-700'>
          <p className='font-medium'>Email Id: </p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone: </p>
          {
            isEdit ? 
            <input className='bg-gray-100 max-w-52 ' type="text" value={userData.phone} onChange={e => setUserData(prev => ({...prev,phone:e.target.value}))} />
            : <p className='text-blue-400'>{userData.phone}</p>
          }
          <p className='font-medium'>Address: </p>
          {
            isEdit ?
            <p>
              <input className='bg-gray-50 ' type="text" value={userData.address.line1} onChange={e => setUserData(prev => ({...prev.address,line1:e.target.value}))} />
              <br />
              <input className='bg-gray-50 ' type="text" value={userData.address.line2} onChange={e => setUserData(prev => ({...prev.address,line2:e.target.value}))} />
            </p>
            : <p className='text-gray-500'>{userData.address.line1}
            <br/>
            {userData.address.line2}</p>
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-md '>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-sm mt-smx text-neutral-700'>
          <p className='font-medium'>Gender: </p>
          {
            isEdit ?
            <select className='max-w-20 bg-gray-100' onChange={(e)=> setUserData(prev =>({...prev,gender:e.target.value}))} value={userData.gender} >
              <option value="Male" >Male</option>
              <option value="Female">Female</option>
            </select>:
            <p className='text-gray-400'>{userData.gender}</p>
          }
          <p className='font-medium'>BirthDay: </p>
          {
            isEdit ?
            <input type="date" className='max-w-28 bg-gray-100' value={userData.dob} onChange={e=> setUserData(prev => ({...prev,dob:e.target.value}))} />
            : <p className='text-gray-400'>{userData.dob}</p>
          }
        </div>
      </div>
      <div className='mt-xlg '>
        {isEdit ?
        <button className='border border-primary px-xl py-sm rounded-full hover:bg-primary hover:text-white transition-all ' onClick={()=>setIsEdit(false)}>Save Information</button>:
        <button className='border border-primary px-xl py-sm rounded-full hover:bg-primary hover:text-white transition-all '  onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile
