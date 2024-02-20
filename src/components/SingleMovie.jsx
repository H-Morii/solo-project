import React from 'react'
import {FaStar} from 'react-icons/fa'
import StarRating from './StarRating'

const SingleMovie = ({img , title, overview}) => {
  console.log(img);
  return (
    <div className=' text-stone-300 font-[roboto] absolute top-40 left-1/4 w-[800px] h-auto bg-black rounded-3xl z-10'>
      <div className=' grid grid-cols-6 grid-row-10 pb-20 p-5 gap-4'>
            <div className=' col-start-1 col-end-7 row-start-1 row-end-3'>
              <img src={img} alt={title} />
            </div>
            <div className='col-start-1 col-span-2 row-start-3 row-end-3'>
              <h1 m>{title}</h1>
            </div>
            <div className='col-start-1 col-span-4 row-start-4 row-end-4'>
              <p>{overview}</p>
            </div>
            <div className=' col-start-1 col-end-1 row-start-5 row-end-5 flex'>
              <StarRating />
            </div>
            <div className='col-start-2 col-end-6 row-start-6 row-end-6'>
              <input className=' text-black w-full h-10 p-2 rounded-md ' type="text" placeholder='Comment' />
            </div>
            <div className='col-start-2 col-end-3 row-start-7 row-end-7 '>
              <button className='p-1 text-black bg-red-600 w-full rounded-full hover:opacity-50'>Add comment</button>
            </div>
            <div className='col-start-2 col-end-6 row-start-8 row-end-8 border-2 h-[3rem]'>
              {/* Users Comments */}
            </div>
            </div>
    </div>
  )
}

export default SingleMovie
