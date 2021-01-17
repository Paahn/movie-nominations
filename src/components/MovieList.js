import React from "react";
import "../styles/MovieList.css";

const MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <div className="movie">
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </div>
  )
}

export default MovieList
