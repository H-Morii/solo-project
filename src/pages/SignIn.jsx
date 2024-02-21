import React, { useState } from 'react'
import { UserAuth } from '../context/Authcontext'

const SignIn = ( { toggleSignup, toggleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, signUp} = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(email, password)
      toggleSignup()
    } catch (err) {
      console.error(err.message)
    }
  }
  console.log(user)

  return (
    <div className="">
    <div className='w-[505px] h-[775px] py-[65px] bg-gray-900 absolute left-1/2 top-1/2 transform rounded-xl -translate-x-1/2 -translate-y-1/2'>
        <div className=' font-["hrikhand"] text-4xl text-center m-10 text-stone-300'>Watch Wise</div>
        <div className=' flex justify-center'>
          <form action="submit" onSubmit={handleSubmit} className='w-[350px] h-[320px] flex-col justify-start items-start gap-[30px] inline-flex '>
            <div>
              <p className=' py-2 text-stone-300'>Email</p>
              <input className=' w-[350px] h-[50px] px-3 rounded-md' type="text" placeholder='Emain ' onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div>
            <div className=''>
              <p className=' py-2 text-stone-300'>Password</p>
              <input className=' w-[350px] h-[50px] px-3 rounded-md' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            </div> 
            <div>
              <p className=' py-2 text-stone-300'>Repeat Password</p>
              <input className=' w-[350px] h-[50px] px-3 rounded-md' type="password" placeholder='Reapeat Password' />
            </div>
            </div>
            <div>
              <button className='w-[168px] h-[40px] left-[91px] rounded-3xl top-[16px] bg-red-600 hover:opacity-50'>Create account</button>
            </div>
            <div className=' text-stone-300'>
          <p>Already have an account? <a className=' font-semibold cursor-pointer' onClick={toggleLogin}>Login</a> </p>
          </div>
          </form>
        </div>
        
        
    </div>
    </div>
  )
}

export default SignIn


// position: absolute; 
// left: 0; 
// right: 0; 
// margin-left: auto; 
// margin-right: auto; 
// width: 100px; /* Need a specific value to work */

// left: 50%;
// transform: translate(-50%, 0);