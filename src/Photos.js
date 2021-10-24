import React from "react";
import "./Photos.css";

function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        {props.photos.map((photo, i) => {
          if (i < 4) {
            return (
              <div key={i}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.medium}
                    className="img-fluid"
                    alt={photo.photographer}
                  />
                </a>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Photos;
