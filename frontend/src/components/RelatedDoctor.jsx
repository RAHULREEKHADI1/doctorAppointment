import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const RelatedDoctor = ({speciality,docId}) => {

    const {doctors} = useContext(AppContext);
    const [relDoc,setRelDoc] = useState([]);
    useEffect(()=>{
        if(doctors.length>0 && speciality){
            const doctorsData = doctors.filter((doc)=> doc.speciality===speciality && doc._id!==docId)
            setRelDoc(doctorsData);
        }
    },[speciality,docId,doctors])

    const navigate = useNavigate();
    const removeBackground = (imageUrl) =>{
        return imageUrl.replace('/upload/','/upload/e_background_removal/')
    }

  return (
    <div className='flex flex-col items-center gap-md my-8xl text-midGray md:mx-xlg'>
      <h1 className='text-3xl font-medium'>Related Doctors</h1>
      <p className='sm:w-1/3 text-center text-smx2'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='w-full grid grid-cols-auto gap-md pt-mdx gap-y-lg px-smx sm:px-0'>
        {relDoc.slice(0,5).map((item,idx)=>(
            <div onClick={()=> {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='border border-bluish rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={idx}>
                <img className='bg-primaryBackground' src={removeBackground(item.image)} alt=''/>
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
        <button className='bg-primaryBackground text-midGray rounded-full mt-xlg py-mds px-7xl'>more</button>
    </div>
  )
}

export default RelatedDoctor
