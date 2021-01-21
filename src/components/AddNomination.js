import React from "react";
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import "../styles/AddNomination.css";

const AddNomination = ({ active, inactive }) => {
  console.log(`Active? ${active} Inactive? ${inactive}`);
  return (
    <div className="nomination-container">
      <span 
        className={`nomination ${active === 'true' ? 'nomination-available' : ''} ${inactive === 'true' ? 'nomination-unavailable' : ''}`}>
          <EmojiEventsIcon color="primary"/>
        Nominate
      </span>
    </div>
  )
}

export default AddNomination
