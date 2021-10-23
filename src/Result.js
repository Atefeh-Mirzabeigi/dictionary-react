import "./Result.css";
import React from "react";

function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <div className="row p-4">
          <div className="col">
            <h2 className="mb-0">{props.result.word}</h2>
            <small>[ {props.result.phonetic} ]</small>
            {props.result.meanings.map((meaning, i) => {
              return (
                <div className="mt-4" key={i}>
                  <h4 className="mb-1">{meaning.partOfSpeech}</h4>
                  {meaning.definitions.map((definition, i) => {
                    return (
                      <div key={i}>
                        <p className="mb-0">{definition.definition}</p>
                        <p className="mb-0 meaning__example">
                          {definition.example}
                        </p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Result;
