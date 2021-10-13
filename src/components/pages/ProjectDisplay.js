import React from "react";
import Projects from "./Projects";

const projects = [
  {
    name: "Workout Tracker",
    description:
      "The application that allow the user to create a fitness plan.",
    techUsed: ["JavaScript", "Node.js", "MongoDB", "Express"],
    image: "fitnesstracker.jpg",
    gitHub: "https://github.com/Truong-Duong/Workout-Tracker.git",
    deployed: "https://homework-18--workout-tracker.herokuapp.com/",
  },
  {
    name: "Note Taker",
    description:
      "The application that allow user to take their note for work. ",
    techUsed: ["JavaScript", "Node.js", "Express.js"],
    image: "notetaker.jpg",
    gitHub: "https://github.com/Truong-Duong/Note-Taker.git",
    deployed: "https://homework-11--note-taker.herokuapp.com/notes",
  },
  {
    name: "Mars Rover",
    description:
      "The application that get the NASA API to display picture on Mars from rovers.",
    techUsed: ["Bootstrap", "JavaScript", "Moment.js", "jQuery"],
    image: "marrover.jpg",
    gitHub: "https://github.com/Truong-Duong/Mars-Rover.git",
    deployed: "https://truong-duong.github.io/Mars-Rover/",
  },
  {
    name: "Weather Dashboard",
    description:
      "This is a weather dashboard that take the open API weather to forecast weather.",
    techUsed: ["Bootstrap", "JavaScript"],
    image: "weatherdashboard.jpg",
    gitHub: "https://github.com/Truong-Duong/Weather-Dashboard.git",
    deployed: "https://truong-duong.github.io/Weather-Dashboard/",
  },
  {
    name: "Book Search Engine",
    description:
      "This is a book search application that let you search your favorite book.",
    techUsed: ["React", "MongoDB"],
    image: "booksearch.jpg",
    gitHub: "https://github.com/Truong-Duong/Book-Search-Engine.git",
    deployed: "https://homework-21--book-search-engin.herokuapp.com/",
  },

  {
    name: "Coding Quiz",
    description:
      "This is a coding quiz that will test your JavaScript knowledge.",
    techUsed: ["JavaScript", "CSS", "HTML"],
    image: "codequiz.jpg",
    gitHub: "https://github.com/Truong-Duong/Coding-Quiz.git",
    deployed: "https://truong-duong.github.io/Coding-Quiz/",
  },
];

export default function ProjectDisplay() {
  return (
    <div className="row d-flex justify-content-around">
      {projects.map((project) => (
        <Projects
          name={project.name}
          description={project.description}
          techUsed={project.techUsed}
          image={project.image}
          gitHub={project.gitHub}
          deployed={project.deployed}
          key={project.id}
        />
      ))}
    </div>
  );
}
