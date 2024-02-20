import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Logo from "../img/Netflix_Logo.png"
import SignIn from '../pages/SignIn'
import Login from '../pages/Login'

const Navbar = () => {

  const [signup, setSignup] = useState(false)
  const [login, setLogin] = useState(false)

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

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to="/">
      <h1 className=' font-["hrikhand"] text-white text-[300%]'>Watch Wave</h1>
      </Link>
      <div>
        <button className='w-[173.57px] h-[38.30px] opacity-75 bg-stone-950 rounded-[4.88px] m-4 border border-stone-50 text-white transitionduration-300 hover:opacity-50 transition' onClick={toggleSignup}>Sign in</button>
        <div className=" absolute left-1/2 top-[500px]">
         {signup ? <SignIn toggleSignup={toggleSignup} toggleLogin={toggleLogin}/> : null }
        </div>
        <button className='bg-red-600 text-1xl font-semibold w-[115.88px] h-[40.30px] rounded-[4.88px] cursor-pointer transitionduration-300 hover:opacity-70 transition' onClick={toggleLogin}>Login</button>
        <div className=' absolute left-1/2 top-[500px]'>
        {login ? <Login toggleLogin={toggleLogin} toggleSignup={toggleSignup}/> : null}
        </div>
      </div>
    </div>
  )
}

export default Navbar
