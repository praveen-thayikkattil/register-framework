import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

class ProfilePage extends Component {
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
      <header className="App-body profile-page">
        <aside className="sidebar">
          <div className="inner-wrap">
            <div className="avatar-wrap">
              <div className="the-img" />
            </div>
          </div>

          <footer className="action-buttons">
            <button className="change-photo-button">Change Photo</button>

            <button
              className="edit-profile-button"
              onClick={() => this.props}
              // onClick={() => this.props.history.push("/register")}
            >
              Edit Profile
            </button>
          </footer>
        </aside>

        <main className="main-content">
          <p>
            I am{" "}
            <span>
              {this.state.firstName} {this.state.lastName} Mr. David Miller
            </span>{" "}
            and I am <span>above 20 years</span> and you can send your emails to{" "}
            <span>jesus@heaven.com</span>.I live in the state of Alaska. I like
            to <span>play hockey, football and reading</span> books. And please
            send me the newsletters. Please reach out to me on my phone
            9876543210.
          </p>

          <footer>
            <Button
              variant="contained"
              color="primary"
              onClick={() => console.log("submitted the form...")}
              className="profile-agree-button"
            >
              Agree
            </Button>
          </footer>
        </main>
        {/*<h1>Profile Page</h1>

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
        </ul> */}
      </header>
    );
  }
}

ProfilePage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default ProfilePage;
// export default withRouter(connect({}, {})(ProfilePage));
