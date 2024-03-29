import React, { useEffect, useState } from 'react'
import axios from 'axios';
import requests from '../Requests'


const Main = () => {
    const [movies, setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * movies.length)] 

  useEffect (() => {

    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results)
    }).catch((err) => {
      console.error(err.message)
    })
    },[])



  
    const movieImg = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
    

  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img className='w-full h-full object-cover' src={movieImg} alt={movie?.title} />
        <div className='absolute top-[20%] py-4 px-4' >
          <h1 className=" text-3xl md:text-5xl mx-auto ">{movie?.title}</h1>
          <p className='w-full md:max-w-[80%] lg:max-w-[70%] xl:max-w-[50%] text-gray-200' >{movie?.overview}</p>
          <div className='my-4'>
            <button className='border bg-gray-300 border-gray-300 text-black py-2 px-5 hover:opacity-50' >Where to watch</button>
            <button className='border border-gray-300 text-white py-2 px-5 ml-4 hover:opacity-50'>Rate</button>
         </div>
         <p className="text-grey-400 text-small">{movie?.release_date}</p>
        </div>
      </div>
    </div>
  )
}

export default Main
