import React from "react";
import "../styles/MovieList.css";

const MovieList = ({ movies, nominateComponent }) => {
  const NominateComponent = nominateComponent;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie">
          <img src={movie.Poster} alt="movie"></img>
          <div className="overlay"><NominateComponent /></div>
        </div>
      ))}
    </div>
  )
}

export default MovieList
