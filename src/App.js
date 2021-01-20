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
  const [nominatedID, setNominatedID] = useState([]);

  const getMovies = async () => {
    const url = `https://www.omdbapi.com/?s=${inputMovies}&apikey=a81113fc`;
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
    const movieNominations = JSON.parse(
      localStorage.getItem("movie-nominations")
    );
    console.log(`Are you even noms ${JSON.stringify(movieNominations)}`);
    if (movieNominations){
      console.log(`DID YOU RUN AND YOU GOT NOMINATIONS? ${JSON.stringify(movieNominations)}`);
      const movieNominationIDs = movieNominations.map(nom => nom.imdbID);
      console.log(`GOT IDS? ${movieNominationIDs}`);
      setNominatedID(movieNominationIDs);
      console.log(`Fucking noms ${nominatedID}`);
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
    console.log("ADD NOMINATION SAYS", movieNominationIDs);

    const idExists = movieNominationIDs.includes(movie.imdbID);
    
    if (!idExists && nominations.length < 5) {
      const newNominationList = [...nominations, movie];
      setNominations(newNominationList);
      saveToLocalStorage(newNominationList);
    }
    if (!idExists && nominations.length < 5) {
      console.log(`nominated ID inside addNomination ${nominatedID}`);
      const newNominatedList = [...nominatedID, movie.imdbID];
      setNominatedID(newNominatedList);
    }

  };

  const removeNomination = (movie) => {
    const newNominationsList = nominations.filter(
      (nomination) => nomination.imdbID !== movie.imdbID
    );
    setNominations(newNominationsList);
    saveToLocalStorage(newNominationsList);
    const movieNominationIDs = newNominationsList.map(nom => nom.imdbID);
    setNominatedID(movieNominationIDs);
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
          nominatedID={nominatedID}
          isResultsList
        />
      </div>
      <h1 className="heading">My Nominations</h1>
      {nominations.length === 5 ? <div className="banner">Nominations Complete!</div> : <></>}
      <div className="container">
        <MovieList
          movies={nominations}
          nominateComponent={RemoveNomination}
          handleNominations={removeNomination}
          nominatedID={nominatedID}
        />
      </div>
    </div>
  );
};

export default App;
