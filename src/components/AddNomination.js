import React from "react";
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import "../styles/AddNomination.css";

const AddNomination = () => {
  return (
    <div className="nomination-container">
      <span className="nomination"><EmojiEventsIcon />Nominate</span>
    </div>
  )
}

export default AddNomination
