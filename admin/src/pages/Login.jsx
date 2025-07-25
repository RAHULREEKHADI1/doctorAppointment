import { useContext, useState } from 'react';
import AdminContext from '../context/AdminContext';
import axios from 'axios';
import {toast} from 'react-toastify';

const Login = () => {    
    const [state,setState] = useState('Admin');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const {setAToken,backendUrl} = useContext(AdminContext);

    const onSubmitHandler = async(event)=>{        
        event.preventDefault();
        
        try{
            if(state==='Admin'){        
                const {data} =await axios.post(backendUrl+'/api/admin/login',{email,password},{
                    withCredentials:true
                },{
                validateStatus: function (status) {
                return status === 200 || status === 401;
                },
            });                                
                if(data.success){
                    localStorage.setItem('aToken',data.token)                    
                    setAToken(data.token);
                    toast.success("Logged in successfully")
                }else{                    
                    toast.error(data.message)
                }
            }
        }
        catch(err){            
            console.log(err.message);
        }
    }


  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-smx m-auto items-start p-xl min-w-[340px] sm:min-w-96 border rounded-xl text-[#5e5e5e] text-smx2 shadow-lg'>
            <p className='text-xl font-semibold m-auto'>
                <span className='text-primary'>{state} </span>Login
            </p>
            <div className='w-full'>
                <p>Email</p>
                <input onChange={(e)=> setEmail(e.target.value)} value={email} className='border border-[#dadada] rounded w-full p-sm mt-xs' type='email' required/>
            </div>
            <div className='w-full'>
                <p>Password</p>
                <input onChange={(e)=> setPassword(e.target.value)} value={password} className='border border-[#dadada] rounded w-full p-sm mt-xs' type='password' required/>
            </div>
            <button className='text-white bg-primary w-full py-sm rounded-md text-md'>Login</button>
            {
            state==='Admin'
                ? <p>Doctor Login?<span onClick={()=>setState('Doctor')} className='cursor-pointer text-primary hover:underline decoration-primary'> Click here</span></p>
                : <p>Admin Login?<span onClick={()=>setState('Admin')} className='cursor-pointer text-primary underline decoration-primary'> Click here</span></p>
            }
        </div>
    </form>
  )
}

export default Login
