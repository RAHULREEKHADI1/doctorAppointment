import assets from '../assets/assets';
import { useNavigate } from 'react-router-dom';


const Banner = () => {
    const navigate = useNavigate();
  return (
    <div className='flex bg-primary rounded-lg px-lg sm:px-xlg md:px-7xl lg:px-10xl my-10xl md:mx-xlg'>
      <div className='flex-1 py-xl sm:py-xlg md:py-8xl lg:py-12xl lg:pl-mdx'>
        <div className='text-mdx sm:text-lg md:text-xl lg:text-xlg text-white font-semibold'>
            <p>Book Appointment</p>
            <p >With 100+ Trusted Doctors</p>
        </div>
        <button onClick={()=> {navigate('/login'),scrollTo(0,0)} } className='bg-white text-smx2 text-midGray px-xl py-smx rounded-full mt-lg hover:scale-105 transition-all '>Create Account</button>
      </div>
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt=""/>
      </div>
    </div>
  )
}

export default Banner
