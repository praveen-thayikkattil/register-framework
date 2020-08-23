import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Input from "react-select";
import Select from "react-select";

class FormFillingPage extends Component {
  render() {
    const statesOptions = [
      { value: "new-york", label: "New York" },
      { value: "california", label: "California" },
      { value: "texas", label: "Texas" },
    ];

    return (
      <header className="App-body">
        <h4>Please fill out the form below</h4>

        <div className="registration-form">
          <div className="fieldset-name">
            <div className="control-label">
              <label>Name</label>
            </div>

            <Input />

            <input type="text" placeholder="First Name" />

            <input type="text" placeholder="Last Name" />
          </div>

          <div className="fieldset-agerange">
            <div className="control-label">
              <label>Age</label>
            </div>

            <input type="range" min="13" max="45" width="100%" />
          </div>

          <div className="fieldset-email">
            <div className="control-label">
              <label>Email</label>
            </div>

            <input type="email" placeholder="john@doe.com" />
          </div>

          <div className="fieldset-tel">
            <div className="control-label">
              <label>Tel</label>
            </div>

            <input type="tel" placeholder="(212) 477 - 1000" />
          </div>

          <div className="fieldset-state">
            <div className="control-label">
              <label>State</label>
            </div>

            <Select options={statesOptions} />

            <select>
              <option>Alaska</option>
            </select>
          </div>

          <div className="fieldset-country">
            <div className="control-label">
              <label>Country</label>
            </div>

            <select>
              <option>United States</option>
            </select>
          </div>

          <div className="fieldset-address">
            <div className="control-label">
              <label>Address</label>
            </div>

            <select>
              <option>Please select</option>
            </select>
          </div>

          <div className="fieldset-interests">
            <div className="control-label">
              <label>Interests</label>
            </div>

            <input type="text" placeholder="Hockey, Football, Reading" />

            <div className="interest-options">
              <ul>
                <li>
                  <button>Hockey</button>
                </li>
                <li>
                  <button>Football</button>
                </li>
                <li>
                  <button>Reading</button>
                </li>
              </ul>
            </div>
          </div>

          <div className="fieldset-newsletter-choice">
            <div className="control-label">
              <input type="checkbox" checked />
              <label>
                <span>Subscribe to the newsletter</span>
              </label>
            </div>
          </div>

          <button
            className="form-submit-button"
            onClick={() => console.log("submitted the form...")}
          >
            Submit
          </button>
        </div>

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
