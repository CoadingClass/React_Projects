import React from "react";
import "../ComponentsCss/TogleButton.css";
function TogelButton() {
  return (
    <div className="togle_button">
      <button className="prevous">
        <i class="fa-solid fa-arrow-left"></i>
        <span>Prevouse</span>
      </button>
      <button className="next">
        Next <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default TogelButton;
