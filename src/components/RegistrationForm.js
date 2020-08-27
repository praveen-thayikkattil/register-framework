import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import FormControl from "@material-ui/core/FormControl";
import Autocomplete from "@material-ui/lab/Autocomplete";

import * as getFirstName from "../actions/FirstName";

import RegFormLabel from "./RegFormLabel";
const marks = [
  {
    value: 0,
    label: "13 - 19",
  },
  {
    value: 25,
    label: "20 - 29",
  },
  {
    value: 60,
    label: "30 - 45",
  },
  {
    value: 100,
    label: "45+",
  },
];

class RegForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      userState: "",
      country: "",
      address: "",
      interests: "",
    };
  }

  valuetext = (value) => {
    // return `${value}°C`;
  };

  handleChange = (e) => {
    e.preventDefault();
    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  };

  handleSubmit = (e, value) => {
    e.preventDefault();
    console.log(e, value);
  };

  render() {
    return (
      <form
        className="registration-form"
        // onSubmit={(e) => this.handleSubmit(e)}
      >
        <fieldset className="fieldset-name fieldset">
          <FormControl
            variant="outlined"
            className="firstName-wrapper input-wrapper"
          >
            <RegFormLabel name="firstName" title="First Name" />

            <TextField
              id="firstName"
              label=""
              variant="outlined"
              className="first-name-input text-input"
              onChange={this.handleChange}
              name="firstName"
              value={this.state.firstName}
              defaultValue={this.state.firstName}
            />
          </FormControl>

          <div className="firstName-wrapper input-wrapper">
            <RegFormLabel name="lastName" title="Last Name" />

            <TextField
              id="lastName"
              label=""
              variant="outlined"
              className="last-name-input text-input"
              onChange={this.handleChange}
              name="lastName"
              value={this.state.lastName}
            />
          </div>
        </fieldset>

        <fieldset className="ageRange-fieldset fieldset">
          <FormControl
            variant="outlined"
            className="ageRange-wrapper input-wrapper"
          >
            <RegFormLabel name="ageRange" title="Age" />

            <Slider
              defaultValue={25}
              getAriaValueText={this.valuetext}
              aria-labelledby="discrete-slider-custom"
              step={10}
              valueLabelDisplay="auto"
              marks={marks}
              className="age-range-slider"
            />
          </FormControl>
        </fieldset>

        <fieldset className="fieldset-email fieldset">
          <FormControl
            variant="outlined"
            className="email-wrapper input-wrapper"
          >
            <RegFormLabel name="email" title="Email" />

            <TextField
              id="email"
              label=""
              variant="outlined"
              className="email-input text-input"
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
            />
          </FormControl>
        </fieldset>

        <fieldset className="fieldset-tel fieldset">
          <FormControl variant="outlined" className="tel-wrapper input-wrapper">
            <RegFormLabel name="tel" title="Tel" />

            <TextField
              id="tel"
              label=""
              variant="outlined"
              className="tel-input text-input"
              onChange={this.handleChange}
              name="tel"
              value={this.state.tel}
            />
          </FormControl>
        </fieldset>

        <fieldset className="fieldset-states fieldset">
          <FormControl variant="outlined" className="formControl input-wrapper">
            <RegFormLabel name="userState" title="State" />

            <Autocomplete
              id="userState"
              options={[
                { title: "New York" },
                { title: "Texas" },
                { title: "California" },
                { title: "Michigan" },
              ]}
              getOptionLabel={(option) => option.title}
              style={{ width: 75 + "%" }}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField {...params} label="" variant="outlined" />
              )}
              className="states-input select-input"
            />
          </FormControl>
        </fieldset>

        <fieldset className="fieldset-country fieldset">
          <FormControl variant="outlined" className="formControl input-wrapper">
            <RegFormLabel name="country" title="Country" />

            <Autocomplete
              id="country"
              options={[
                { title: "USA" },
                { title: "Canada" },
                { title: "Mexico" },
                { title: "Japan" },
                { title: "UAE" },
                { title: "India" },
                { title: "Sri Lanka" },
                { title: "China" },
                { title: "Norway" },
                { title: "Denmark" },
              ]}
              getOptionLabel={(option) => option.title}
              style={{ width: 75 + "%" }}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField {...params} label="" variant="outlined" />
              )}
              className="country-input select-input"
            />
          </FormControl>
        </fieldset>

        <fieldset className="fieldset-address fieldset">
          <FormControl variant="outlined" className="formControl input-wrapper">
            <RegFormLabel name="address" title="Address" />

            <Autocomplete
              id="address"
              options={[
                { title: "Home Address..." },
                { title: "Office Address..." },
              ]}
              getOptionLabel={(option) => option.title}
              style={{ width: 75 + "%" }}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField {...params} label="" variant="outlined" />
              )}
              className="address-input select-input"
            />
          </FormControl>
        </fieldset>

        <fieldset className="fieldset-interests fieldset">
          <FormControl variant="outlined" className="formControl input-wrapper">
            <RegFormLabel name="interests" title="Interests" />

            <Autocomplete
              multiple
              id="combo-box-demo"
              options={[
                { title: "Reading" },
                { title: "Drawing" },
                { title: "Traveling" },
              ]}
              getOptionLabel={(option) => option.title}
              style={{ width: 75 + "%" }}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField {...params} label="" variant="outlined" />
              )}
              className="interests-input select-input"
            />
          </FormControl>
        </fieldset>

        <fieldset className="fieldset-submit-button fieldset">
          <FormControl className="formControl input-wrapper">
            <RegFormLabel name="submit" title="" />

            <Button
              variant="contained"
              color="primary"
              className="form-submit-button"
              type="submit"
            >
              Submit
            </Button>
          </FormControl>
        </fieldset>
      </form>
    );
  }
}

// export default RegForm;

function mapStateToProps(state, ownProps) {
  console.log(">>>>>Here");
  return {
    firstName: state.firstName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFirstName: bindActionCreators(getFirstName, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegForm);
