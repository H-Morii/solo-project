import React from 'react'
import {FaStar} from "react-icons/fa"

const StarRating = () => {
  return (
    <div className='flex'>
     {[...Array(5)].map(star => (
        <lable className="">
          <input className=' hidden' type="radio" name='rating'/>
          <FaStar/>
        </lable>
       ))} 
      {/* rating star */}
    </div>
  )
}

export default StarRating
