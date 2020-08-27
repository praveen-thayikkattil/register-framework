import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getProfilePageItemsAction from "../actions/profilePageItems";
import { default as ProfilePageUI } from "../components/ProfilePage";

class ProfilePageView extends Component {
  componentWillMount() {
    this.props.getProfilePageItemsAction.getProfilePageItems();
  }

  render() {
    const inProgress = this.props.profilePageItems.inProgress;
    const isSuccess = this.props.profilePageItems.isSuccess;

    if (inProgress) {
      return <h1>Loading...</h1>;
    } else if (isSuccess) {
      return <ProfilePageUI items={this.props.profilePageItems} />;
    } else {
      return null;
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    profilePageItems: state.profilePageItems,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProfilePageItemsAction: bindActionCreators(
      getProfilePageItemsAction,
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageView);
