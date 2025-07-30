import React from 'react'
import assets from '../assets/assets'

const Contact = () => {
  return (
    <div >
      <div className='text-center text-xl pt-xlg text-midGray'>
        <p>CONTACT <span className='font-semibold text-gray-700'>US</span></p>
      </div>
      <div className='my-xlg flex flex-col md:flex-row justify-center gap-7xl text-smx2 mb-14xl'>
        <img className='w-full max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col gap-lg justify-center items-start'>
          <p className='font-semibold text-md text-gray-600'>Our Office</p>
          <p className='text-midGray'>570390 William station <br/> Suite 350, Washington, USA</p>
          <p className='text-midGray'>Tel: (415) 555-0987 <br/> Email: rahul.dev@gmail.com</p>
          <p className='font-semibold text-md text-gray-600'>Carrers at Prescripto.</p>
          <p className='text-midGray'>Learn more about our teams and job openings.</p>
          <button className='border-2 border-black px-8 py-4 text-md hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
