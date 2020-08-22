import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class LandingPage extends Component {
  render() {
    return (
      <header className="App-body">
        <NavLink to="/register" className="register-c2a-button">
          Register
        </NavLink>
      </header>
    );
  }
}
