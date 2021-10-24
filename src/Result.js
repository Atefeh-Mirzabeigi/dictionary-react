import "./Result.css";
import React from "react";
import Synonym from "./Synonym";
import Phonetics from "./Phonetics";
import Photos from "./Photos";

function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <div className="row result__section m-0 p-4">
          <div className="col-md-4">
            <h2 className="mb-0">{props.result.word}</h2>
            {props.result.phonetics.map((phonetic, i) => {
              return <Phonetics phonetic={phonetic} key={i} />;
            })}
            {props.result.meanings.map((meaning, i) => {
              return (
                <div className="mt-4 meaning__section" key={i}>
                  <h4 className="mb-1">{meaning.partOfSpeech}</h4>
                  <ol>
                    {meaning.definitions.map((definition, i) => {
                      return (
                        <li key={i} className="mt-2">
                          <p className="mb-0">{definition.definition}</p>
                          <p className="mb-0 meaning__example">
                            {definition.example}
                          </p>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              );
            })}
          </div>
          <div className="col-md-4">
            <Synonym synonym={props.result.meanings} />
          </div>
          <div className="col-md-4">
            <Photos photos={props.photos} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Result;
