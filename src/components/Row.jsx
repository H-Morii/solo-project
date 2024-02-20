import React, {useState, useEffect} from 'react'
import axios from "axios"
import SingleMovie from './SingleMovie'

const Row = ({title, fetchUrl}) => {

    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState([])
    const [singlemovie, setSinglemovie] = useState(false)

    useEffect(() => {
      axios.get(fetchUrl).then((response) => {
        setMovies(response.data.results)
      }).catch((err) => {
        console.error(err.message)
      })
    },[])

    const handleSinglemovie = (clickedItem) => {
      console.log("clicked");
      setSelectedMovie(clickedItem)
      setSinglemovie(!singlemovie)
      // const parent = document.getElementById('slider');
      // const newElement = document.createElement("p");
      // newElement.innerHTML="hello";
      // parent.appendChild(<SingleMovie img={img} title={title} overview={overview}/>)
      // parent.appendChild(newElement)
    }

    const trucateString = (str, num) => {
      if(str?.length > num) {
        return str.slice(0, num) + "..."
      } else {
        return str
      }
    }


    const movieImg = `https://image.tmdb.org/t/p/w500/`
    const movieOrg = `https://image.tmdb.org/t/p/original/`
    return (
      <>
        <h2 className="font-bold text-stone-50 md:text-xl p-4">{title}</h2>

          <div className="relative flex items-center">
            <div className={"slider"} id='slider'>
              {movies.map((item, id) => (
                      <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer inline-flex m-2' key={id}>
                        <img className='w-full h-auto block hover:bg-black opacity-80' src={`${movieImg}${item?.backdrop_path}`} alt={item?.title} onClick={handleSinglemovie}/>
                        <div className='absolute flex flex-col '>
                        <p className=' text-stone-300 px-3'>{trucateString(item?.title, 25)}</p>
                        <button className='w-[100px] mt-20 mx-3 bg-red-500 rounded-[2px] hover:opacity-80' onClick={() =>handleSinglemovie(item)}>Watch option</button>
                        <button className='w-[100px] mt-1 mx-3 bg-stone-200 rounded-[2px] hover:opacity-80'>Add to list</button>
                        </div>
                      </div>
              ))}
              </div>
              {singlemovie ? < SingleMovie img={`${movieOrg}${selectedMovie?.backdrop_path}`} title={selectedMovie?.title} overview={selectedMovie?.overview}/> : null}
        </div>
      </>
    );
    }
export default Row
