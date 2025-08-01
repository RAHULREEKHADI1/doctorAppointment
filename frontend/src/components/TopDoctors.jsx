import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
    const navigate = useNavigate();
    const {doctors} = useContext(AppContext)

    const handleClick = ()=>{
      navigate('/doctors');
      scrollTo(0,0);
    }
    
  return (
    <div className='flex flex-col items-center gap-md my-8xl text-midGray md:mx-xlg'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-smx2'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='w-full grid grid-cols-auto gap-md pt-mdx gap-y-lg px-smx sm:px-0'>
        {doctors.slice(0,10).map((item,idx)=>(
            <div onClick={()=> {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='border border-bluish rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={idx}>
                <img className='bg-primaryBackground' src={item.image} alt=''/>
                <div className='p-md'>
                    <div className='flex items-center gap-sm text-center text-smx2'>
                        <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                     </div>
                    <p className='text-darkGray text-md'>{item.name}</p>
                    <p className='text-midGray text-smx font-light'>{item.speciality}</p>   
                </div>
            </div>
        ))}
      </div>
        <button onClick={handleClick} className='bg-primaryBackground text-midGray rounded-full mt-xlg py-mds px-7xl'>more</button>
    </div>
  )
}

export default TopDoctors
