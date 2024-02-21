import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import SignIn from '../pages/SignIn'
import Login from '../pages/Login'
import { UserAuth } from "../context/Authcontext"

const Navbar = () => {

  const {user, logOut} = UserAuth()
  const [signup, setSignup] = useState(false)
  const [login, setLogin] = useState(false)

  const handleLogout = async () => {
    try {
      await logOut()
      useNavigate("/")
    } catch (err) {
      console.log(err.message)
    }
  }

  function toggleSignup() {
    if(login) {
    setLogin(!login)
    }
    setSignup(!signup)
  }
    
  function toggleLogin() {
    if(signup){
    setSignup(!signup)  
    }
    setLogin(!login)
  }
  console.log(user?.email)

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to="/">
      <h1 className=' font-["hrikhand"] text-white text-[300%]'>Watch Wave</h1>
      </Link>
      {user?.email ?
      <div>
      <button className='w-[173.57px] h-[38.30px] opacity-75 bg-stone-950 rounded-[4.88px] m-4 border border-stone-50 text-white transitionduration-300 hover:opacity-50 transition' onClick={toggleSignup}>My profile</button>
      <div className=" absolute left-1/2 top-[500px]">
      </div>
      <button className='bg-red-600 text-1xl font-semibold w-[115.88px] h-[40.30px] rounded-[4.88px] cursor-pointer transitionduration-300 hover:opacity-70 transition' onClick={handleLogout}>Logout</button>
      <div className=' absolute left-1/2 top-[500px]'>
      </div>
    </div>  
      
        : <div>
        <button className='w-[173.57px] h-[38.30px] opacity-75 bg-stone-950 rounded-[4.88px] m-4 border border-stone-50 text-white transitionduration-300 hover:opacity-50 transition' onClick={toggleSignup}>Sign in</button>
        <div className=" absolute left-1/2 top-[500px]">
         {signup ? <SignIn toggleSignup={toggleSignup} toggleLogin={toggleLogin}/> : null }
        </div>
        <button className='bg-red-600 text-1xl font-semibold w-[115.88px] h-[40.30px] rounded-[4.88px] cursor-pointer transitionduration-300 hover:opacity-70 transition' onClick={toggleLogin}>Login</button>
        <div className=' absolute left-1/2 top-[500px]'>
        {login ? <Login toggleLogin={toggleLogin} toggleSignup={toggleSignup}/> : null}
        </div>
      </div>}
    </div>
  )
}

export default Navbar
