import React from "react";
import "../styles/Home.css";
import "../styles/responsive.css";

function Home() {
  return (
    <div className="container mt-4 p-0 home-border">
      <div className="jumbotron welcome ">
        <div>
          <p className="wtext">My name is Truong Duong</p>
        </div>
        <div className="typewriter">
          <p>I am a Full Stack Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
