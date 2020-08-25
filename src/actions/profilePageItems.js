import _ from "lodash";
import axios from "axios";
import * as types from "../constants/actionTypes";
import appConfig from "../appConfig.json";

export const getProfilePageItems = () => {
  return (dispatch) => {
    let profilePageItems = [];
    const url = `http://${appConfig.env} === 'dev' ? 'localhost/pit-rnd2' || 'localhost/register-framework' : 'api.where.you.are.hosting.this.app.com'`;
    dispatch({ type: types.GET_PROFILEPAGE_INPROGRESS, profilePageItems });

    axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          profilePageItems.push(_.get(res, "data", []));
          dispatch({ type: types.GET_PROFILEPAGE_SUCCESS, profilePageItems });
        } else {
          dispatch({ type: types.GET_PROFILEPAGE_FAILURE, profilePageItems });
        }
      })
      .catch((error) => {
        dispatch({ type: types.GET_PROFILEPAGE_FAILURE, error });
      });
  };
};
