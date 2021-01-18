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
    const movieNominations = JSON.parse(
      localStorage.getItem("movie-nominations")
    );
    if (movieNominations){
      setNominations(movieNominations);
    }
  }, []);

  useEffect(() => {
    getMovies();
  }, [inputMovies]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("movie-nominations", JSON.stringify(items))
  };

  const addNomination = (movie) => {
    const movieNominationIDs = nominations.map(nom => nom.imdbID);
    // console.log(movieNominationIDs);

    const idExists = movieNominationIDs.includes(movie.imdbID);
    
    if (!idExists) {
      const newNominationList = [...nominations, movie];
      setNominations(newNominationList);
      saveToLocalStorage(newNominationList);
    }

  };

  const removeNomination = (movie) => {
    const newNominationsList = nominations.filter(
      (nomination) => nomination.imdbID !== movie.imdbID
    );
    setNominations(newNominationsList);
    saveToLocalStorage(newNominationsList);
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
