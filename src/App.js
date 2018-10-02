import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Body from "./Body";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Stuff from "./Stuff";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Body>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/stuff" component={Stuff} />
          </Body>
          <Header />
        </div>
      </Router>
    );
  }
}

export default App;
