import React, { useState, useEffect } from "react";
import './App.css';
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import AddNomination from "./components/AddNomination";
import RemoveNomination from "./components/RemoveNomination";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [inputMovies, setInputMovies] = useState("");
  const [nominations, setNominations] = useState([]);

  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?s=${inputMovies}&apikey=a81113fc`;
    await fetch(url)
    .then ((response) => response.json())
    .then ((data) => {
      if (data.Search) {
        const moviesOnly = data.Search.filter(movie => movie.Type === "movie");
        setMovies(moviesOnly);
      }
    })
  };

  useEffect(() => {
    getMovies();
  }, [inputMovies]);

  const addNomination = (movie) => {
    const newNominationList = [...nominations, movie];
    setNominations(newNominationList);
  };

  const removeNomination = (movie) => {
    const newNominationsList = nominations.filter(
      (nomination) => nomination.imdbID !== movie.imdbID
    );
    setNominations(newNominationsList);
  }

  return (
    <div className="shoppies-app">
      <div className="heading">
        <h1>The Shoppies</h1>
      </div>
      <div>
        <SearchBar 
          inputMovies={inputMovies}
          setInputMovies={setInputMovies}
        />
      </div>
      <div className="container">
        <MovieList
          movies={movies}
          nominateComponent={AddNomination}
          handleNominations={addNomination}
        />
      </div>
      <h1>My Nominations</h1>
      <div className="container">
        <MovieList
          movies={nominations}
          nominateComponent={RemoveNomination}
          handleNominations={removeNomination}
        />
      </div>
    </div>
  );
};

export default App;
