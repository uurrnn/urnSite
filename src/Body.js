import React, { Component } from "react";

import "./Body.css";

class Body extends Component {
  render() {
    return <main className="body-container">{this.props.children}</main>;
  }
}

export default Body;
