import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [state,setState] = useState('Sign Up');  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');
  const navigate = useNavigate();

  const {userToken,setUserToken,backendUrl} = useContext(AppContext);

  const submitHandler = async (event)=>{
    event.preventDefault();
    try{
      if(state === 'Sign Up'){
        const {data} = await axios.post(backendUrl+'/api/user/register',{name,password,email});
        if(data.success){
          localStorage.setItem('userToken',data.userToken)
          setUserToken(data.userToken)
          toast.success("User registered successfully")
        }else{
          toast.error(data.message)
        }
      }else{
        const {data} = await axios.post(backendUrl+'/api/user/login',{password,email});
        if(data.success){
          localStorage.setItem('userToken',data.userToken)
          setUserToken(data.userToken)
        }else{
          toast.error(data.message)
        }
      }
    }catch(error){
      console.log(error.message);
      toast.error(error.response.data.message)
    }
  }

  useEffect(()=>{
    if(userToken){
      navigate('/')
    }
  },[userToken])

  return (
    <form onSubmit={submitHandler} className='min-h-[80vh] flex items-center' >
      <div className='flex flex-col gap-md m-auto items-start p-xl min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-smx2 shadow-lg'>
        <p className='text-2xl font-semibold'>{state ==='Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state==='Sign Up' ? 'sign up':'log in'}to book an appointment</p>
        {state==='Sign Up' && <div className='w-full'>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-sm mt-xs' type='text' onChange={(e)=>setName(e.target.value)} value={name} required />
        </div>}
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-sm mt-xs' type='email' onChange={(e)=>setEmail(e.target.value)}  value={email} required/>
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-sm mt-xs' type='password' onChange={(e)=>setPassword(e.target.value)} value={password} required/>
        </div>
        <button type='submit' className='bg-primary text-white w-full py-sm rounded-md text-md'>{state ==='Sign Up' ? 'Create Account' : 'Login'}</button>
        {
          state==='Sign Up' ? <p className=''>Already have an account? <span className='text-primary underline cursor-pointer' onClick={()=> setState('Login')}>Login here</span></p> : <p>Create a new account? <span className='text-primary underline cursor-pointer' onClick={()=> setState('Sign Up')}>click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login
