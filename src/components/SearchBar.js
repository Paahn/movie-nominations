import React from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ inputMovies, setInputMovies }) => {
  const searchMovies = (event) => {
    setInputMovies(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-bar"
        type="search"
        value={inputMovies}
        onChange={searchMovies}
        placeholder="Search movies"
        aria-hidden="true"
      />
    </div>
  )
}

export default SearchBar
