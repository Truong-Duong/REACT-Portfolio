import React from "react";
import picture from "./Img/Me.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="container my-4">
      <div className="jumbotron my-4 about-border" id="about-me">
        <figure id="profContainer" className="rounded">
          <img
            id="profPic"
            className="rounded-circle borderc mt-2 "
            src={picture}
            alt="profile-pic"
          ></img>
        </figure>
        <p className="p-5">
        I am currently enrolling to Southern Methodist University, and I am currently working on my master's degree of science in Computer Science. 
        I just complete my bachelor's degree of science in Mechanical Engineer. After completing the degree, I found out that I am lacking at coding skill. 
        I decided to enroll to SMU coding bootcamp to sharp my skill before I begin my master program. By doing the bootcamp will gain me tremendous confident in programming. 
        I am looking forward to get a job at Web Developer, Software Developer, or Cyber Analyst.
        </p>
      </div>
    </div>
  );
}
export default About;
