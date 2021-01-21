import React from "react";
import "../styles/MovieList.css";
import defaultPoster from "../default-movie.png";

const MovieList = ({ movies, nominateComponent, handleNominations, nominatedID, isResultsList, nominatedComponent }) => {
  const NominateComponent = nominateComponent;
  const NominatedComponent = nominatedComponent;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie" key={movie.imdbID}>
          <img
            src={movie.Poster === 'N/A' ? defaultPoster : movie.Poster}
            alt="movie"
          ></img>
          <div className="overlay">
            <div>
              {movie.Title}
            </div>
            <div>
              {movie.Year}
            </div>
            <div onClick={() => handleNominations(movie)}>
              {console.log("nominated.length is ", nominatedID.length)}
              {nominatedID.includes(movie.imdbID) && nominatedID.length <= 5 && isResultsList ? (<NominatedComponent />) : (<NominateComponent />)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieList
