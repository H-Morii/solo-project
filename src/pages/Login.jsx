import React, {Link} from 'react'

const Login = () => {
  return (
      <div className="">
      <div className='w-[505px] h-[775px] py-[65px] bg-gray-900 absolute left-1/2 top-1/2 transform rounded-xl -translate-x-1/2 -translate-y-1/2'>
          <div className=' text-3xl text-center m-10 text-stone-300'>Watch Wise</div>
          <div className=' flex justify-center' >
            <form action="submit" className='w-[350px] h-[350px] flex-col justify-start items-start gap-[30px] inline-flex '>
              <div>
                <p className=' py-2 text-stone-300'>Email or Username</p>
                <input className=' w-[350px] h-[50px] px-3 rounded-md' type="text" placeholder='Emain or Username' />
              </div>
              <div>
              <div className=''>
                <p className=' py-2 text-stone-300'>Password</p>
                <input className=' w-[350px] h-[50px] px-3 rounded-md' type="text" placeholder='Password' />
              </div> 
              </div>
              <div>
                <button className='w-[168px] h-[40px] left-[91px] rounded-3xl top-[16px] bg-red-600 hover:opacity-50'>Sign In</button>
              </div>
              <div>
                <a className=' text-white px-2 underline-offset-4' href='/signin'>Create account</a>
              </div>
            </form>
          </div>
          
      </div>
      </div>
    
  )
}

export default Login
