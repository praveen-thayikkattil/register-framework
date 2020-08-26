import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import RegForm from "./RegistrationForm";

class FormFillPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      interests: "",
    };
  }

  componentDidMount() {
    console.log(this.props);
    console.log(this.state);
  }
  render() {
    return (
      <header className="App-body register-page">
        <h4 className="page-title">Please fill out the form below</h4>

        <div className="registration-form-wrapper">
          <RegForm />
        </div>

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

FormFillPage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default FormFillPage;
// export default withRouter(connect({}, {})(FormFillPage));
