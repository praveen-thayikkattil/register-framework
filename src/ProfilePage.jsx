import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ProfilePage extends Component {
  render() {
    return (
      <header className="App-body">
        <h1>Profile Page</h1>

        <ul className="list-inline">
          <li>
            <NavLink exact to="/register" className="register-c2a-button">
              Edit Profile
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

export default ProfilePage;
