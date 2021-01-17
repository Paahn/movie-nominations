import React from "react";
import "../styles/SearchBar.css";

const SearchBar = () => {
  return (
    <div>
      <input
        className="search-bar"
        type="search"
        placeholder="Search movies"
        aria-hidden="true"
      />
    </div>
  )
}

export default SearchBar
