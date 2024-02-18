import React from 'react'
import Logo from "../img/Netflix_Logo.png"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <img src={Logo} className='cursor-pointer'></img>
      <div>
        <button className='w-[173.57px] h-[38.30px] opacity-75 bg-stone-950 rounded-[4.88px] m-4 border border-stone-50 text-white transitionduration-300 hover:opacity-50 transition'>Sign in</button>
        <button className='bg-red-600 text-1xl font-semibold w-[115.88px] h-[40.30px] rounded-[4.88px] cursor-pointer transitionduration-300 hover:opacity-70 transition'>Login</button>
      </div>
    </div>
  )
}

export default Navbar
