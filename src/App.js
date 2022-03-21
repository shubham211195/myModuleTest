import { useEffect, useState } from "react";
import MovieList from "./components/movieList";
import './App.css';
import MovieListHeading from "./components/movieListHeading";
import SearchBar from "./components/searchBar";


const App=()=>{
  const [movies,setMovies]=useState([]);
  const [SearchValue, setSearchValue]=useState('');
  const getMovieRequest= async(SearchValue)=>{
      const url=` http://www.omdbapi.com/?s=${SearchValue}&apikey=64c58c83`;
      const res=await fetch(url); 
      const resjson=await res.json();
      console.log(resjson);
      if(resjson.Search){
        setMovies(resjson.Search);
      }
    }
    useEffect(()=>{
      getMovieRequest(SearchValue);
    },[SearchValue]);
  return(
    <div className="container">
          <div className="header">
              <MovieListHeading heading={"MovieZone"} />
              <SearchBar SearchValue={SearchValue} setSearchValue={setSearchValue}/>
          </div>
          <div className="movies">
              <MovieList movies={movies} />
          </div>
    </div>
  )

}

export default App;
