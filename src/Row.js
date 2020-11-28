import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const base_url="https://image.tmdb.org/t/p/original/";

function Row({title ,fetchUrl,isLarge}) {
    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay: 1,
        }
    }

    const handleclick=(movie)=>{
        console.log(movie?.title);
        if(trailerUrl){
            setTrailerUrl("");
        }
        else{
            movieTrailer(movie?.title||"")
            .then ((url) =>{
                const urlParams=new URLSearchParams(new URL(url).search);
                console.log(urlParams);
                setTrailerUrl(urlParams.get('v'));
                console.log("movie code",trailerUrl);
            })
            .catch((err)=>console.log(err))
        }
    }
    

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img className={`row__poster ${isLarge && "row__posterLarge"}`} onClick={()=> handleclick(movie) } src={`${base_url}${isLarge? movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
            
        </div>
    )
}

export default Row
