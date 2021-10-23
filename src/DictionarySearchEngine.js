import React, { useState } from "react";
import "./SearchEngine.css";
import axios from "axios";
import Result from "./Result";

export default function DictionarySearchEngine() {
  const [searchWord, setSearchWord] = useState(null);
  const [newWord, setNewWord] = useState(null);

  function handleResponse(res) {
    console.log(res.data[0]);
    setNewWord(res.data[0]);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(searchWord);
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSearch(event) {
    setSearchWord(event.target.value);
  }
  return (
    <div className="SearchEngine container-fluid px-0">
      <div className="search">
        <h1 className="search__heading text-center mb-0 mt-3">
          <span>Search Your</span> Word
        </h1>
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
      <Result result={newWord} />
    </div>
  );
}
