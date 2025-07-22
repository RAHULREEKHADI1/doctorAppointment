import assets from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-lg md:px-xlg lg:px-10xl'>
      <div className='md:w-1/2 flex flex-col items-start justify-center m-auto gap-md py-xlg md:py-[10vw] md:mb-[-lgx]'>
        <p className='text-white font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight'>Book Appointment</p>
        <p className='text-white font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight'>With Trusted Doctors</p>
        <div className='flex flex-col md:flex-row items-center gap-lg text-white text-smx3 font-light'>
            <img className='w-28' src={assets.group_profiles} alt=""/>
            <p>Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block'/> schedule your appointment hussle free</p>
        </div>
        <a href='#speciality' className='flex items-center gap-sm bg-white px-xl py-md rounded-full text-smx2 text-midGray m-auto md:m-0 hover:scale-105 transition-all duration-300 ' >Book Appointment
            <img className='w-3' src={assets.arrow_icon} alt=''/>
        </a>
      </div>
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg ' src={assets.header_img} alt=''/>
      </div>
    </div>
  )
}

export default Header
