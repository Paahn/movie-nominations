import React from "react";
import "../styles/MovieList.css";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie">
          <img src={movie.Poster} alt="movie"></img>
          <div className="overlay"></div>
        </div>
      ))}
    </div>
  )
}

export default MovieList
