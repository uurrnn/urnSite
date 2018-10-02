import React, { Component } from "react";
import Nav from "./Nav";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div>
          <h1>Aaron Griffin</h1>
          <h3>
            Web Developer
            <br />
            Louisville, KY
          </h3>
          <Nav />
        </div>
        <footer className="footer">
          Made with <span>&hearts;</span> <br />
          by Aaron Griffin <br />
          &copy; All Rights Reserved
        </footer>
      </header>
    );
  }
}

export default Header;
