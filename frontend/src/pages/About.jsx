import assets from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-xl pt-xlg text-midGray'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-xlg flex flex-col md:flex-row gap-6xl'>
        <img className='w-full max-w-[360px]' src={assets.about_image} alt=''/>
        <div className='flex flex-col gap-lg justify-center md:w-2/4 text-smx2 text-gray-600'>
          <p>Prescripto is a modern, easy-to-use doctor appointment booking platform designed to connect patients with trusted healthcare professionals quickly and efficiently. Our goal is to eliminate the long waiting times, confusing schedules, and paperwork traditionally associated with booking medical appointments.</p>
          <p>We built Prescripto to streamline the healthcare experience for both patients and doctors. Patients benefit from real-time appointment booking, reminders, and digital health records, while doctors enjoy a simple interface to manage their schedules, patient lists, and consultations all in one place. </p>
          <b className='font-medium text-gray-800 text-md'>Our Vision</b>
          <p>At Prescripto, we're passionate about using technology to improve lives. Our team of healthcare experts and developers work together to ensure that the platform stays secure, user-friendly, and responsive to the needs of the healthcare community. We’re committed to building a system that empowers users, enhances doctor-patient communication, and ensures everyone gets the care they need—on time.</p>
        </div>
      </div>
      <div className='text-md my-md'>
        <p className=''>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col sm:flex-row mb-10xl'>
        <div className='border px-xlg md:px-8xl py-xl sm:py-8xl flex flex-col gap-lg text-md hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-xlg md:px-8xl py-xl sm:py-8xl flex flex-col gap-lg text-md hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-xlg md:px-8xl py-xl sm:py-8xl flex flex-col gap-lg text-md hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About
