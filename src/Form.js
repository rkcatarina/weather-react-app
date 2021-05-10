import React from "react";
import "./Form.css";
export default function Form() {
  return (
    <div className="Form">
      <form>
        <input
          type="text"
          placeholder="Type the city here"
          className="form-control"
        />
        <input type="submit" className="search-button" value="Search" />

        <button type="submit" className="current-button">
          Current
        </button>
      </form>
    </div>
  );
}
