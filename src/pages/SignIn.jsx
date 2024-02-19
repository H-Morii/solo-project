import React from 'react'

const SignIn = () => {
  return (
    <div className="">
    <div className='w-[505px] h-[775px] py-[65px] bg-gray-900 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className=' text-3xl text-center m-10 text-stone-300'>Watch Wise</div>
        <div className=' flex justify-center'>
          <form action="submit" className='w-[350px] h-[320px] flex-col justify-start items-start gap-[30px] inline-flex '>
            <div>
              <p className=' py-2 text-stone-300'>Email or Username</p>
              <input className=' w-[350px] h-[50px] px-3 rounded-md' type="text" placeholder='Emain or Username' />
            </div>
            <div>
            <div className=''>
              <p className=' py-2 text-stone-300'>Password</p>
              <input className=' w-[350px] h-[50px] px-3 rounded-md' type="text" placeholder='Password' />
            </div> 
            <div>
              <p className=' py-2 text-stone-300'>Repeat  Password</p>
              <input className=' w-[350px] h-[50px] px-3 rounded-md' type="text" placeholder='Reapeat Password' />
            </div>
            </div>
            <div>
              <button className='w-[168px] h-[40px] left-[91px] rounded-3xl top-[16px] bg-red-600 hover:opacity-50'>Create account</button>
            </div>
            <div className=' text-stone-300'>
          <p>Already have an account? <a className=' font-semibold' href="/login">Login</a> </p>
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