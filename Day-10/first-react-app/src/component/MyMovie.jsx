import React, { useState,useEffect } from 'react'
import Movie from './Movie';

const MyMovie = () => {
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        fetch("https://freetestapi.com/api/v1/movies")
        .then((results)=>results.json())
        .then((data)=>{
            setMovie(data)
        })
    },[]);

  return (
    <div className='container d-flex flex-wrap'>
            {movie.map(movie=>(
            <Movie
            key={movie.id}
            // id={movie.id}
            title={movie.title}
            year={movie.year}
            actors={movie.actors}
            plot={movie.plot}
            trailer={movie.trailer}
            website={movie.website}
            />
            )
        )
    } 
    </div>
  )
}

export default MyMovie