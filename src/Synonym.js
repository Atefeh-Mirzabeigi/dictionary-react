import React from "react";

function Synonym(props) {
  console.log(props.synonym);
  return (
    <div className="Synonym">
      {props.synonym.map((word, i) => {
        return (
          <div className="synonym__section" key={i}>
            <h5>{word.partOfSpeech}</h5>
            {word.definitions.map((syn, i) => {
              return (
                <div key={i}>
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
