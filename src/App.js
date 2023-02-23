import "./App.css";
import { useState, useEffect } from "react";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// Here is your key: e7b1d949

const API_URL = "http://www.omdbapi.com?apikey=e7b1d949";

const movie1 = {
  Title: "Now You See Me",
  Year: "2013",
  imdbID: "tt1670345",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] =useState('');


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.search);
  };
  useEffect(() => {
    searchMovies("You");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand 10.0</h1>

      <div className="search">
        <input placeholder="search movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <img
          scr={searchIcon}
          //  alt='search icon' 
          onClick={() => searchMovies(searchTerm)}
        />
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

export default App;
