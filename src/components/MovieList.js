import React, { useState, useEffect } from "react";
import "../styles/MovieList.css";

const MovieList = ({ movies, nominateComponent, handleNominations, nominatedID, isResultsList }) => {
  const NominateComponent = nominateComponent;
  // const nominated = [...nominatedID];
  // const [nominated, setNominated] = useState(nominatedID);
  // const myMovies = [...movies];
  // let OverlayIcon;
  // const myMap = myMovies.map
  // console.log("movies, noms", myMovies, nominated);

  // useEffect(() => {
  //   setNominated(nominatedID);
  // }, [movies])


  return (
    <div className="movie-list">
      {/* {console.log("nominations areeee:", nominatedID.map(nom => nom))}
      {console.log("MOVIES areeee:", movies.map(nom => nom))} */}
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
            <div onClick={() => handleNominations(movie)}>
              {nominatedID.includes(movie.imdbID) && isResultsList ? (<div>Nominated!{console.log("yes")}</div>) : (<NominateComponent />)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieList
