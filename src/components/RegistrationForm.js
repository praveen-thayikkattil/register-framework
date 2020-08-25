import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import RegFormLabel from "./RegFormLabel";

class RegForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      interests: [],
    };
  }

  handleChange = (e) => {
    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  };

  handleSubmit = (e, interests) => {
    e.preventDefault();

    let formData = {
      formFirstName: this.state.firstName,
      formLastName: this.state.lastName,
      formAge: this.setState.age,
      formEmail: this.state.email,
      formInterests: this.state.interests,
    };

    if (
      formData.formFirstName.length < 1 ||
      formData.formLastName.length < 1 ||
      formData.formAge.length < 1 ||
      formData.formEmail.length < 1 ||
      formData.formInterests.length < 1
    ) {
      return false;
    }

    this.setState({
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      interests: [],
    });
  };

  render() {
    return (
      <form className="registration-form" onSubmit={this.handleSubmit}>
        <fieldset className="fieldset-name fieldset">
          <RegFormLabel htmlFor="formFirstName" title="First Name" />

          <TextField
            id="formFirstName"
            label="First Name"
            variant="outlined"
            className="first-name-input"
            defaultValue={this.state.firstName}
            onChange={this.handleChange}
            name="First Name"
          />

          <TextField
            id="formLastName"
            label="Last Name"
            variant="outlined"
            className="last-name-input"
            onChange={this.handleChange}
            name="Last Name"
          />
        </fieldset>

        <Button
          variant="contained"
          color="primary"
          className="form-submit-button"
        >
          Submit
        </Button>
      </form>
    );
  }
}

export default RegForm;
