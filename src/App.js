import React, { useState, useEffect } from "react";
import './App.css';
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?s=wasp&apikey=a81113fc`;
    await fetch(url)
    .then ((response) => response.json())
    .then ((data) => {
        setMovies(data.Search);
        console.log(movies);
    })
  };

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="shoppies-app">
        <h1>The Shoppies</h1>
        <div className="container">
          <MovieList movies={movies} />
        </div>
    </div>
  );
}

export default App;
