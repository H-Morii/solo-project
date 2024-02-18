import React, { useEffect, useState } from 'react'
import axios from 'axios';
import requests from '../Requests'

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)] 
  const movieImg = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
  
  //  function getPopular() {
  //   axios.get(requests.requestPopular).then((response) => {
  //     console.log(requests.data)
  //     setMovies(response.data.results)
  //   }).catch((err) => {
  //     console.error(err.message)
  //   })
  //  }
  const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTQ1NzUyMzNhYWY2Y2E4NjQ1NTA1NjBjZTM2YzNhZCIsInN1YiI6IjY1Y2Y1MDBhNzA2ZTU2MDE3OTM5N2UyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UonHOsPHG7TWvTjsXeNPwm6yIPhK7Ek454j3bkI_Dr0"

  async function getPopular() {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular',
    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  };
  
  try {
    const response = await axios.request(options)
    setMovies(response.data.results)
    console.log(response.data.results)
  } catch (err) {
    console.log(err.message)
    }
  }

  useEffect (() => {
    getPopular()
    },[])

  return (
    <div className='w-full h-[550px] text-white'>
      <div>
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img className='w-full h-full object-cover' src={movieImg} alt={movie.title} />
      </div>
    </div>
  )
}

export default Main
