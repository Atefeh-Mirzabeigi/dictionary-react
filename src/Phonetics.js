import React from "react";
import "./Phonetics.css";

function Phonetics(props) {
  return (
    <div className="Phonetics mt-2">
      <a href={props.phonetic.audio}>
        <i className="bi bi-soundwave" target="_blank"></i>
      </a>
      <small>[ {props.phonetic.text} ]</small>
    </div>
  );
}

export default Phonetics;
