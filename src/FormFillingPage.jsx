import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class FormFillingPage extends Component {
  render() {
    return (
      <header className="App-body">
        <h1>Form Filling Page</h1>

        <ul className="list-inline">
          <li>
            <NavLink exact to="/profile" className="register-c2a-button">
              View Profile
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/" className="register-c2a-button">
              Back to Home
            </NavLink>
          </li>
        </ul>
      </header>
    );
  }
}

export default FormFillingPage;
