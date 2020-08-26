import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getFormFillPageItemsAction from "../actions/formFillPageItems";
import { default as FormFillPageUI } from "../components/FormFillPage";

class FormFillPageView extends Component {
  componentWillMount() {
    this.props.getFormFillPageItemsAction.getFormFillPageItems();
  }

  render() {
    console.log(this.props.profilePageItems);

    const inProgress = this.props.formFillPageItems.inProgress;
    const isSuccess = this.props.formFillPageItems.isSuccess;

    if (inProgress) {
      return <h1>Loading...</h1>;
    } else if (isSuccess) {
      return <FormFillPageUI items={this.props.formFillPageItems} />;
    } else {
      return null;
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    formFillPageItems: state.formFillPageItems,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFormFillPageItemsAction: bindActionCreators(
      getFormFillPageItemsAction,
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormFillPageView);
