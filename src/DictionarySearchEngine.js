import React, { useState } from "react";
import "./SearchEngine.css";
export default function DictionarySearchEngine() {
  const [searchWord, setSearchWord] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    console.log(searchWord);
  }
  function handleSearch(event) {
    setSearchWord(event.target.value);
  }
  return (
    <div className="SearchEngine container-fluid">
      <h1 className="search__heading text-center mb-0 mt-3">
        Search Your Word
      </h1>
      <div className="search">
        <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
          <div className="search__input">
            <input placeholder="Enter your Word" onChange={handleSearch} />
          </div>
          <div className="search__btn">
            <button>
              {" "}
              <i className="bi bi-search"></i>{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
