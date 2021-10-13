import React from "react";
import fitness from "./Img/fitnesstracker.jpg";
import note from "./Img/notetaker.jpg";
import rover from "./Img/marrover.jpg";
import weather from "./Img/weatherdashboard.jpg";
import book from "./Img/booksearch.jpg";
import quiz from "./Img/codequiz.jpg";
import "../styles/Project.css";

const allImages = {
  "fitnesstracker.jpg": fitness,
  "notetaker.jpg": note,
  "marrover.jpg": rover,
  "weatherdashboard.jpg": weather,
  "booksearch.jpg": book,
  "codequiz.jpg": quiz,
};

export default function Projects(props) {
  return (
    <div className="d-flex mx-2 my-4 col-xl-3 col-md-4 flex-wrap cards bordercustom">
      <div className="w-100">
        <figure className="d-flex row">
          <figcaption className="projtitle">{props.name}</figcaption>
          <p className="projDescription">{props.description}</p>
        </figure>
        <img
          className="imgProp"
          src={allImages[props.image]}
          alt="my_project"
        ></img>

        <div className="my-4 mx-2">
          <a href={props.gitHub} target="_blank" rel="noreferrer">
            <button className="btn btn-primary">Github</button>
          </a>
          <a href={props.deployed} target="_blank" rel="noreferrer">
            <button className="btn btn-primary mx-3">Live Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
}
