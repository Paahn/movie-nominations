import React, { useState, useEffect } from "react";
import './App.css';
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [inputMovies, setInputMovies] = useState("");

  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?s=${inputMovies}&apikey=a81113fc`;
    await fetch(url)
    .then ((response) => response.json())
    .then ((data) => {
      if (data.Search) {
        setMovies(data.Search);
      }
    })
  };

  useEffect(() => {
    getMovies();
  }, [inputMovies]);

  return (
    <div className="shoppies-app">
      <div className="heading">
        <h1>The Shoppies</h1>
      </div>
      <div>
        <SearchBar inputMovies={inputMovies} setInputMovies={setInputMovies} />
      </div>
      <div className="container">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
