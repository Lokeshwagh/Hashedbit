import { useEffect, useState } from "react"
import {Link, useNavigate} from 'react-router-dom';
import React from "react";

const Apikey="https://api.themoviedb.org/3/discover/movie?api_key=dc257a8c2ef798fb12418cbc5957ce9c"
 export default function Home(){
     const [movies,setMovies]=useState([]);
     

     const   fetchApi= async(URL)=>{
        try {
          
             const res= await fetch(URL);
             const data=await res.json();
             setMovies(data.results);
             console.log(data.results)
            //  console.log(movies);
            
        } catch (error) {
            console.error(error)
        }
     }

     useEffect(()=>{
        fetchApi(Apikey)
      },[]);
    return(
        <>
        <center><h1>Welcome To the Home page of Movie Booking</h1></center>

        <div style={{ display: 'flex', flexWrap: 'wrap', border: '3px solid black', width: '100vw'}}>
        {movies.map((movie) => (
          <div key={movie.id}  style={{ margin: '10px', textAlign: 'center' }}>
            <img style={{ width: '200px', height: '300px' }} 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title} />
            <h2>{movie.title}</h2>

            <button><Link to={`/movie/${movie.id}`}>Info Of Movie</Link></button>
            
          </div>
        ))}
      </div>
    </>
    )

}
