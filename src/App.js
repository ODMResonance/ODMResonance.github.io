import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Team from "./pages/Team";
import Individual from "./pages/Individual";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router basename="/registration/">
        <div className="App">
          <div className="App__Aside">
            <div className="AsideHeading">Welcome to</div>
            <div className="AsideHeading AsideHeadingBold">ZERO OPACITY</div>
          </div>
          <div className="App__Form">
            {/* <div className="PageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                myself
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                my team
              </NavLink>
            </div> */}
            <div className="FormHeading">Select Type of</div>
            <div className="FormHeading FormHeadingBold">REGISTRATION</div>
            <div className="FormTitle">
              <NavLink
                exact
                to="/"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                I am an Individual
              </NavLink>
              <NavLink
                to="/team"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                We are a team
              </NavLink>
            </div>

            <Route exact path="/" component={Individual} />
            <Route path="/team" component={Team} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
