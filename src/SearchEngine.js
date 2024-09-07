import React, { useState } from "react";
import axios from "axios";
import "./Style.css";

export default function SearchEngine() {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            className="search-input"
            type="search"
            placeholder="Enter a city..."
            onChange={updateCity}
            autoFocus="on"
          />
        </div>
        <div className="col-3">
          <input className="search-button" type="submit" value="search" />
        </div>
      </div>
    </form>
  );
}
