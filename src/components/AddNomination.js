import React from "react";
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import "../styles/AddNomination.css";

const AddNomination = () => {
  return (
    <div className="nomination-container">
      <span className="nomination"><LibraryAddIcon />Nominate</span>
    </div>
  )
}

export default AddNomination
