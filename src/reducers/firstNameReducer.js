import * as types from "../constants/actionTypes";
import initialState from "./initialState";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function getFirstName(state = initialState.firstName, action) {
  let currentFirstName;

  switch (action.type) {
    case types.GET_FIRSTNAME_INPROGRESS:
      currentFirstName = {
        ...state,
        inProgress: true,
        isSuccess: false,
      };

      return currentFirstName;

    case types.GET_FIRSTNAME_SUCCESS:
      return {
        ...state,
        inProgress: false,
        isSuccess: true,
        items: action.firstName,
      };

    case types.GET_FIRSTNAME_FAILURE:
      currentFirstName = {
        ...state,
        inProgress: false,
        isSuccess: false,
      };

      return currentFirstName;

    default:
      return state;
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

export default connect(mapStateToProps, mapDispatchToProps)(getFirstName);
