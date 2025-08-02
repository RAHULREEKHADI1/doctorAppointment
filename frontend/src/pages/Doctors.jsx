import React, { useContext, useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {AppContext} from '../context/AppContext'
const Doctors = () => {
  
  const {speciality} = useParams();
  const {doctors} = useContext(AppContext);
  const navigate = useNavigate();
  const [filterDoc,setFilterDoc] = useState([]);
  const [showFilter,setShowFilter] = useState(false);

  const applyFilter = ()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc => doc.speciality===speciality))      
    }else{
      setFilterDoc(doctors)      
    }
  }
  useEffect(()=>{
    applyFilter()    
  },[doctors,speciality]);
  const removeBackground = (imageUrl)=>{
    return imageUrl.replace('/upload/','/upload/e_background_removal/');
  }
  return (
    <div>
      <p className='text-midGray'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row mt-lg gap-mxd items-start'>
        <button className={`py-xs px-smx border rounded text-smx2 transition-all sm:hidden ${showFilter ? 'bg-primary text-white':''} `} onClick={()=> setShowFilter(prev => !prev)}>Filters</button>
        <div className={`flex flex-col text-sm2 text-midGray gap-lg ${showFilter ? 'visible' : 'hidden sm:flex'}` }>
          <p onClick={()=> speciality ==='General physician' ? navigate('/doctors'):navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-smx py-xs pr-8xl border border-dimGray rounded transition-all cursor-pointer ${speciality === 'General physician' ? 'bg-lightIndigo text-black' : ''}`}>General physician</p>
          <p onClick={()=> speciality ==='Gynecologist' ? navigate('/doctors'):navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-smx py-xs pr-8xl border border-dimGray rounded transition-all cursor-pointer ${speciality === 'Gynecologist' ? 'bg-lightIndigo text-black' : ''}`}>Gynecologist</p>
          <p onClick={()=> speciality ==='Dermatologist' ? navigate('/doctors'):navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-smx py-xs pr-8xl border border-dimGray rounded transition-all cursor-pointer ${speciality === 'Dermatologist' ? 'bg-lightIndigo text-black' : ''}`}>Dermatologist</p>
          <p onClick={()=> speciality ==='Pediatricians' ? navigate('/doctors'):navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-smx py-xs pr-8xl border border-dimGray rounded transition-all cursor-pointer ${speciality === 'Pediatricians' ? 'bg-lightIndigo text-black' : ''}`}>Pediatricians</p>
          <p onClick={()=> speciality ==='Neurologist' ? navigate('/doctors'):navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-smx py-xs pr-8xl border border-dimGray rounded transition-all cursor-pointer ${speciality === 'Neurologist' ? 'bg-lightIndigo text-black' : ''}`}>Neurologist</p>
          <p onClick={()=> speciality ==='Gastroenterologist' ? navigate('/doctors'):navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-smx py-xs pr-8xl border border-dimGray rounded transition-all cursor-pointer ${speciality === 'Gastroenterologist' ? 'bg-lightIndigo text-black' : ''}`}>Gastroenterologist</p>
        </div>
      <div className='w-full grid grid-cols-auto gap-md gap-y-lg'> 
          {
            filterDoc.map((item,idx)=>(           
              <div key={idx}  onClick={()=> (navigate(`/appointment/${item._id}`,scrollTo(0,0)))} className='border border-bluish rounded-xl max-w-56 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' >
                <img  className='h-56 min-w-full bg-primaryBackground' src={removeBackground(item.image)} alt=''/>
                <div className='p-md'>
                    <div className='flex items-center gap-sm text-center text-smx2'>
                        <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                     </div>
                    <p className='text-darkGray text-md'>{item.name}</p>
                    <p className='text-midGray text-smx font-light'>{item.speciality}</p>   
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors
