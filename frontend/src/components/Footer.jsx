import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-xlg' >
      <div className='flex flex-col sm:grid grid-cols-[4fr_1fr_1fr] gap-10xl my-xlg mt-xl text-smx2' >
        <div>
            <img className='mb-mdx w-40' src={assets.logo} alt=''/>
            <p className='w-full text-midGray leading-6'>Expert care for every stage of life. Effortlessly schedule visits with leading doctors across all specialties. Your well-being is our mission — secure, convenient, and personalized. Trusted by thousands for timely, compassionate, and expert medical support.</p>
        </div>
        <div>
            <p className='text-slg font-medium mb-mdx'>Company</p>
            <ul className='flex flex-col gap-sm text-midGray'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>   
            <p className='text-slg font-medium mb-mdx block whitespace-nowrap'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-sm text-midGray'>
                <li>+1-23-322-8922</li>
                <li>mineWork@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr/>
        <p className='text-center py-mdx text-smx2'>Copyright 2024@ Prescripto - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
