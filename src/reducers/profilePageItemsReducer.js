import * as types from "../constants/actionTypes";
import initialState from "./initialState";

export default function profilePageItemsitems(
  state = initialState.profilePageItems,
  action
) {
  let currentProfilePageItems;

  switch (action.type) {
    case types.GET_PROFILEPAGEITEMS_INPROGRESS:
      currentProfilePageItems = {
        ...state,
        inProgress: true,
        isSuccess: false,
      };

      return currentProfilePageItems;

    case types.GET_PROFILEPAGEITEMS_SUCCESS:
      return {
        ...state,
        inProgress: false,
        isSuccess: true,
        items: action.profilePageItems[0],
      };

    case types.GET_PROFILEPAGEITEMS_FAILURE:
      currentProfilePageItems = {
        ...state,
        inProgress: false,
        isSuccess: false,
      };

      return currentProfilePageItems;

    default:
      return state;
  }
}
