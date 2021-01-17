import React from "react";
import "../styles/MovieList.css";

const MovieList = ({ movies, nominateComponent }) => {
  const NominateComponent = nominateComponent;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie" key={movie.imdbID}>
          <img src={movie.Poster} alt="movie"></img>
          <div className="overlay">
            <div>
              {movie.Title}
            </div>
            <div>
              {movie.Year}
            </div>
            <NominateComponent />
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieList
