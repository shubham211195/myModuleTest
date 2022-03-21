import React from "react";
import '../App.css';

const MovieList =(props)=>{

    return(
        <>
            {props.movies.map((movie,index)=>
                <div className="forHover">
                    <img src={movie.Poster} alt="poster"></img>
                </div>
            )}
        </>
    )
}
export default MovieList;