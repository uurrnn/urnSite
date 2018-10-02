import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

// TODO: add router
class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/stuff">Stuff</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
