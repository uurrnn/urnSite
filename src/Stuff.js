import React from "react";
import "./buttons.css";

const Stuff = () => (
  <div>
    <h2>Stuff I'm Working On</h2>

    <h4>Argon Assault</h4>
    <p>
      A 3D on-rails flying shooter that is similar to Star Fox 64. Made via{" "}
      <a
        rel="noopener noreferrer"
        href="https://www.udemy.com/unitycourse2/"
        target="_blank"
      >
        this Udemy Unity 3D
      </a>{" "}
      course. Click below to play.
    </p>
    <a className="btn" href="/stuff/argon-assault/">
      Argon Assault
    </a>
  </div>
);

export default Stuff;
