import "../App.css";
import { useState, useEffect } from "react";
import searchIcon from "../search.svg";
import MovieCard from "./MovieCard";

// Here is your key: e7b1d949

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=d856c93";

const MoviesApp = () => {
  
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(response)
    console.log(data.Search)

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Flash");
  }, []);

  return (
    <div className="app">
      <h1>Happy Teens</h1>

      <div className="search">
        <input placeholder="search movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <object 
         data={searchIcon} onClick={() => searchMovies(searchTerm)}></object>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default MoviesApp;

