import React from 'react'
import { doctors } from '../assets/assets'
const TopDoctors = () => {
  return (
    <div className='flex flex-col items-center gap-md my-16 text-midGray md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className=''>Simply browse through our extensive list of trusted doctors.</p>
      <div>
        {doctors.slice(0,10).map((item,idx)=>(
            <div>
                <img src={item.image} alt=''/>
                <div>
                    <div>
                        <p>Available</p>
                        <p>{item.name}</p>
                        <p>{item.speciality}</p>
                    </div>
                </div>
            </div>
        ))}
        <div>
            <button>more</button>
        </div>
      </div>
    </div>
  )
}

export default TopDoctors
