import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import * as getFormFillPageItemsAction from "../actions/formFillPageItems";
import * as getFirstName from "../actions/FirstName";
import { default as RegForm } from "../components/RegistrationForm";

class RegistrationPageView extends Component {
  componentWillMount() {
    this.props.getFirstName.getFirstName();
  }
  render() {
    const inProgress = this.props.firstName.inProgress;
    const isSuccess = this.props.firstName.isSuccess;

    if (inProgress) {
      return <h1>Loading...</h1>;
    } else if (isSuccess) {
      return (
        <RegForm
          //   items={this.props.formFillPageItems}
          firstName={this.state.firstName}
        />
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    // formFillPageItems: state.formFillPageItems,
    firstName: state.firstName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFirstName: bindActionCreators(
      //   getFormFillPageItemsAction,
      getFirstName,
      dispatch
    ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationPageView);
