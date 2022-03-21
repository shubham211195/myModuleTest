import React from "react";
import '../App.css';

const MovieList =(props)=>{

    return(
        <>
            {props.movies.map((movie,index)=>
                <div className="forHover">
                    <img src={movie.Poster} alt="poster"></img>
                       <h4>{movie.Title}</h4>
                </div>
            )}
        </>
    )
}
export default MovieList;
