import _ from "lodash";
import axios from "axios";
import * as types from "../constants/actionTypes";
import appConfig from "../appConfig.json";

export const getFirstName = () => {
  return (dispatch) => {
    console.log("inside actioncreator...");
    let firstName = [];
    const url =
      appConfig.env === "dev" ? "/" : "api.where.you.are.hosting.this.app.com";
    dispatch({
      type: types.GET_FIRSTNAME_INPROGRESS,
      firstName,
    });

    axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          firstName.push(_.get(res, "data", []));
          dispatch({
            type: types.GET_FIRSTNAME_SUCCESS,
            firstName,
          });
        } else {
          dispatch({
            type: types.GET_FIRSTNAME_FAILURE,
            firstName,
          });
        }
      })
      .catch((error) => {
        dispatch({ type: types.GET_FIRSTNAME_FAILURE, error });
      });
  };
};
