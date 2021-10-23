import React from "react";
import "./SearchEngine.css";
export default function DictionarySearchEngine() {
  return (
    <div className="SearchEngine container-fluid">
      <h1 className="search__heading text-center mb-0 mt-3">
        Search Your Word
      </h1>
      <div className="search d-flex justify-content-center mt-2">
        <input className="search__input px-3" placeholder="Enter your Word" />
        <button className="search__btn btn">
          {" "}
          <i className="bi bi-search"></i>{" "}
        </button>
      </div>
    </div>
  );
}
