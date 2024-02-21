import React, {Link, useState} from 'react'
import { UserAuth } from '../context/Authcontext'

const Login = ({ toggleSignup, toggleLogin } ) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, logIn} = UserAuth()

  const handleLogin = async (e) =>{
    e.preventDefault()
    try { 
      await logIn(email, password)
    } catch (err) {
      console.log(err.message)
    }

  }


  return (
      <div className="">
      <div className='w-[505px] h-[775px] py-[65px] bg-gray-900 absolute left-1/2 top-1/2 transform rounded-xl -translate-x-1/2 -translate-y-1/2'>
          <div className=' font-["hrikhand"] text-4.5xl text-center m-10 text-stone-300'>Watch Wise</div>
          <div className=' flex justify-center' >
            <form action="submit" className='w-[350px] h-[350px] flex-col justify-start items-start gap-[30px] inline-flex '>
              <div>
                <p className=' py-2 text-stone-300'>Email</p>
                <input className=' w-[350px] h-[50px] px-3 rounded-md' type="text" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
              </div>
              <div>
              <div className=''>
                <p className=' py-2 text-stone-300'>Password</p>
                <input className=' w-[350px] h-[50px] px-3 rounded-md' type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
              </div> 
              </div>
              <div>
                <button className='w-[168px] h-[40px] left-[91px] rounded-3xl top-[16px] bg-red-600 hover:opacity-50' onClick={handleLogin}>Sign In</button>
              </div>
              <div>
                <a className=' text-white px-2 underline-offset-4 cursor-pointer' onClick={toggleSignup} on >Create account</a>
              </div>
            </form>
          </div>
          
      </div>
      </div>
    
  )
}

export default Login
