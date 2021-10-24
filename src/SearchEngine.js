import React, { useState } from "react";
import "./SearchEngine.css";
import axios from "axios";
import Result from "./Result";

export default function DictionarySearchEngine() {
  const [searchWord, setSearchWord] = useState("sunset");
  const [newWord, setNewWord] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photo, setPhoto] = useState();

  function handleResponse(res) {
    setNewWord(res.data[0]);
  }
  function handlePexelResoponse(res) {
    setPhoto(res.data.photos);
  }
  function search() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelApiKey =
      "563492ad6f9170000100000116e542a46819445ca7e28c38a3ed2b2d";
    const pexelUrl = `https://api.pexels.com/v1/search?query=${searchWord}`;
    axios
      .get(pexelUrl, { headers: { Authorization: `Bearer ${pexelApiKey}` } })
      .then(handlePexelResoponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleSearch(event) {
    setSearchWord(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="SearchEngine container-fluid px-0">
        <div className="search">
          <h1 className="search__heading text-center mb-0 mt-3">
            <span>Search Your</span> Word
          </h1>
          <form
            className="d-flex justify-content-center"
            onSubmit={handleSubmit}
          >
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
        <Result result={newWord} photos={photo} />
      </div>
    );
  } else {
    load();
    return "loading..";
  }
}
