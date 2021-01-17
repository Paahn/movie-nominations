import React from "react";
import "../styles/SearchBar.css";

const SearchBar = (props) => {
  const searchMovies = (event) => {
    props.setInputMovies(event.target.value);
  };
  
  return (
    <div>
      <input
        className="search-bar"
        type="search"
        value={props.inputMovies}
        onChange={searchMovies}
        placeholder="Search movies"
        aria-hidden="true"
      />
    </div>
  )
}

export default SearchBar
