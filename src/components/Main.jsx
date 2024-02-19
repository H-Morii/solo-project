import React, { useEffect, useState } from 'react'
import axios from 'axios';
import requests from '../Requests'

const Main = () => {
    const [movies, setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * movies.length)] 
  //  function getPopular() {
  //   axios.get(requests.requestPopular).then((response) => {
  //     setMovies(response.data.results)
  //   }).catch((err) => {
  //     console.error(err.message)
  //   })
  //  }
  // const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTQ1NzUyMzNhYWY2Y2E4NjQ1NTA1NjBjZTM2YzNhZCIsInN1YiI6IjY1Y2Y1MDBhNzA2ZTU2MDE3OTM5N2UyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UonHOsPHG7TWvTjsXeNPwm6yIPhK7Ek454j3bkI_Dr0"

  // async function getPopular() {
  // const options = {
  //   method: 'GET',
  //   url: 'https://api.themoviedb.org/3/movie/popular',
  //   params: {language: 'jp-JP', page: '2'},
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: `Bearer ${accessToken}`
  //   }
  // };
  
  // try {
  //   const response = await axios.request(options)
  //   setMovies(response.data.results)
  // } catch (err) {
  //   console.log(err.message)
  //   }
  // }

  useEffect (() => {
    // getPopular()
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results)
    }).catch((err) => {
      console.error(err.message)
    })
    },[])
    // console.log(movies)

    const trucateString = (str, num) => {
      if(str?.length > num ) {
        return str.slice(0, num) + '...'
      } else {
        return str
      }
    }
  
    const movieImg = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
    

  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img className='w-full h-full object-cover' src={movieImg} alt={movie?.title} />
        <div className='absolute top-[20%] py-4 px-4' >
          <h1 className=" text-3xl md:text-5xl mx-auto ">{movie?.title}</h1>
          <p className='w-full md:max-w-[80%] lg:max-w-[70%] xl:max-w-[50%] text-gray-200' >{trucateString(movie?.overview, 150)}</p>
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
