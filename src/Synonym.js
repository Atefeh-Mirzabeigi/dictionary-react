import React from "react";
import "./Result.css";

function Synonym(props) {
  return (
    <div className="Synonym mt-4">
      <h3>synonyms</h3>
      {props.synonym.map((word, i) => {
        return (
          <div className="synonym__section" key={i}>
            {word.definitions.map((syn, i) => {
              return (
                <div
                  className={syn.synonyms.length ? "px-3 py-2" : null}
                  key={i}
                >
                  <h5>{syn.synonyms.length ? word.partOfSpeech : null}</h5>
                  <p>{syn.synonyms.join(", ")}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Synonym;
