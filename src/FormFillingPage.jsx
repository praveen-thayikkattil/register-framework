import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Input from "react-select";
import Select from "react-select";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import MenuItem from "@material-ui/core/MenuItem";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

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

function valuetext(value) {
  return `${value}°C`;
}

function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <formGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
          />
        }
        label="Subscribe to the newsletter"
      />
    </formGroup>
  );
}

function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={25}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </div>
  );
}

class FormFillingPage extends Component {
  render() {
    const statesOptions = [
      { value: "new-york", label: "New York" },
      { value: "california", label: "California" },
      { value: "texas", label: "Texas" },
    ];

    const countriesOptions = [
      { value: "new-york", label: "New York" },
      { value: "california", label: "California" },
      { value: "canada", label: "Canada" },
    ];

    const addressesOptions = [
      { value: "address-one", label: "Address One" },
      { value: "address-two", label: "Address Two" },
      { value: "address-three", label: "Address Three" },
    ];

    const interestsOptions = [
      { value: "hockey", label: "Hockey" },
      { value: "football", label: "Football" },
      { value: "reading", label: "Reading" },
    ];

    return (
      <header className="App-body">
        <h4>Please fill out the form below</h4>

        <div className="registration-form">
          <div className="fieldset-name fieldset">
            <div className="control-label">
              <label>Name</label>
            </div>

            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              className="first-name-input"
            />

            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              className="last-name-input"
            />
          </div>

          <div className="fieldset-agerange fieldset">
            <div className="control-label">
              <label>Age</label>
            </div>

            <Slider
              defaultValue={20}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-custom"
              step={5}
              valueLabelDisplay="auto"
              marks={marks}
            />
          </div>

          <div className="fieldset-email fieldset">
            <div className="control-label">
              <label>Email</label>
            </div>

            <TextField
              id="outlined-basic"
              label="john@doe.com"
              variant="outlined"
            />
          </div>

          <div className="fieldset-tel fieldset">
            <div className="control-label">
              <label>Tel</label>
            </div>

            <TextField
              id="outlined-basic"
              label="(212) 477 - 1000"
              variant="outlined"
            />
          </div>

          <div className="fieldset-state fieldset">
            <div className="control-label">
              <label>State</label>
            </div>

            <TextField id="selectState" label="" value="20" select>
              <MenuItem value="10">New York</MenuItem>
              <MenuItem value="20">California</MenuItem>
              <MenuItem value="30">Florida</MenuItem>
            </TextField>
          </div>

          <div className="fieldset-country fieldset">
            <div className="control-label">
              <label>Country</label>
            </div>

            <TextField id="selectCountry" label="" value="30" select>
              <MenuItem value="10">USA</MenuItem>
              <MenuItem value="20">UK</MenuItem>
              <MenuItem value="30">India</MenuItem>
            </TextField>
          </div>

          <div className="fieldset-address fieldset">
            <div className="control-label">
              <label>Address</label>
            </div>

            <div className="textAreaAutosize-wrapper">
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Type your address here"
                rowsMin={3}
              />
            </div>
          </div>

          <div className="fieldset-interests fieldset">
            <div className="control-label">
              <label>Interests</label>
            </div>

            <div className="textfield-wrap">
              <TextField
                id="standard-full-width"
                // label="Label"
                // style={{ margin: 8 }}
                placeholder="Hockey, Football, Reading"
                // helperText="Full width!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </div>
          </div>

          <div className="fieldset-newsletter-choice fieldset">
            <div className="control-label">
              <CheckboxLabels />
            </div>
          </div>

          <br />

          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log("submitted the form...")}
            className="form-submit-button"
          >
            Submit
          </Button>
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
