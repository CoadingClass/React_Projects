import React from "react";
import "../ComponentsCss/SearchStyle.css";
function Search() {
  return (
    <div className="search_bar_section">
      <h2 className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
        saepe?
      </h2>
      <div className="serchBar">
        <h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          <div className="inputbox">
            <select name="month" id="month" className="input">
              <option value="Janury">Janury</option>
              <option value="Janury">Janury</option>
              <option value="Janury">Janury</option>
              <option value="Janury">Janury</option>
              <option value="Janury">Janury</option>
              <option value="Janury">Janury</option>
              <option value="Janury">Janury</option>
            </select>
            <select name="Year" id="Year" className="input">
              <option value="Janury">2023</option>
              <option value="Janury">2023</option>
              <option value="Janury">2023</option>
              <option value="Janury">2023</option>
              <option value="Janury">2023</option>
              <option value="Janury">2023</option>
              <option value="Janury">2023</option>
            </select>
            <button className="input">Go</button>
          </div>
        </h2>
      </div>
    </div>
  );
}

export default Search;
