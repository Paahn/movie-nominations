import React from "react";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import "../styles/RemoveNomination.css";

const RemoveNomination = () => {
  return (
    <div className="remove-nomination-container">
      <span className="remove-nomination"><HighlightOffIcon color="primary"/>Remove Nomination</span>
    </div>
  )
}

export default RemoveNomination
