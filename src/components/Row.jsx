import React, {useState, useEffect} from 'react'
import axios from "axios"

const Row = ({title, fetchUrl}) => {


  console.log(title)
    const [movies, setMovies] = useState([])

    useEffect(() => {
      axios.get(fetchUrl).then((response) => {
        setMovies(response.data.results)
      }).catch((err) => {
        console.error(err.message)
      })
    },[])
    console.log(movies)

    const trucateString = (str, num) => {
      if(str?.length > num) {
        return str.slice(0, num) + "..."
      } else {
        return str
      }
    }


    const movieImg = `https://image.tmdb.org/t/p/w500/`
    return (
      <>
        <h2 className="font-bold text-stone-50 md:text-xl p-4">{title}</h2>

          <div className="relative flex items-center">
            <div className={"slider"}>
              {movies.map((item, id) => (
                      <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer inline-flex m-2' key={id}>
                        <img className='w-full h-auto block hover:bg-black opacity-80' src={`${movieImg}${item?.backdrop_path}`} alt={item?.title} />
                        <div className='absolute flex flex-col '>
                        <p className=' text-stone-300 px-3'>{trucateString(item?.title, 25)}</p>
                        <button className='w-[100px] mt-20 mx-3 bg-red-500 rounded-[2px] hover:opacity-80'>Watch option</button>
                        <button className='w-[100px] mt-1 mx-3 bg-stone-200 rounded-[2px] hover:opacity-80'>Add to list</button>
                        </div>
                      </div>
              ))}
              </div>
        </div>
      </>
    );
    }
export default Row
