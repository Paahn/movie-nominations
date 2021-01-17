import React, { useState } from "react";
import './App.css';
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([
    {
      "Title": "Wasp",
      "Year": "2003",
      "imdbID": "tt0388534",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzI0NjY2MDQtOTk2Mi00ZDVjLWE5ODAtZjIxOWU1MjQ0YWE1XkEyXkFqcGdeQXVyMjExNjgyMTc@._V1_SX300.jpg"
  },
  {
      "Title": "Wasp",
      "Year": "2015",
      "imdbID": "tt3509426",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzYyMjI4NTYyMl5BMl5BanBnXkFtZTgwOTgyMDI5NjE@._V1_SX300.jpg"
  },
  {
      "Title": "The Wasp Woman",
      "Year": "1995",
      "imdbID": "tt0114896",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTYzNzI5ODA1OF5BMl5BanBnXkFtZTcwNTIxNzAwMQ@@._V1_SX300.jpg"
  },
  {
      "Title": "Cinematic Titanic: The Wasp Woman",
      "Year": "2008",
      "imdbID": "tt1501345",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODUxNTgwNjc4OV5BMl5BanBnXkFtZTgwNjM5MzA2MDE@._V1_SX300.jpg"
  },
  {
      "Title": "Queen Wasp",
      "Year": "2016",
      "imdbID": "tt5193410",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZGYxYWNkYWItNjBlZC00YzIxLWJlNDEtYTllYWFiYTI5ODI5XkEyXkFqcGdeQXVyMzM5NDMzNTI@._V1_SX300.jpg"
  },
  {
      "Title": "Wasp-Men From Mars",
      "Year": "2017",
      "imdbID": "tt7762728",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDRlNWNmMjctYzk0ZC00ZGFmLWJjNDMtZmY5MTQ5NjA5M2E3XkEyXkFqcGdeQXVyMzE4MjgyODM@._V1_SX300.jpg"
  }
  ]);
  return (
    <div className="App">
        <h1>The Shoppies</h1>
        <MovieList movies={movies} />
    </div>
  );
}

export default App;
