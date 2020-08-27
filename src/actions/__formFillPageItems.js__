import _ from "lodash";
import axios from "axios";
import * as types from "../constants/actionTypes";
import appConfig from "../appConfig.json";

export const getFormFillPageItems = () => {
  return (dispatch) => {
    let formFillPageItems = [];
    const url =
      appConfig.env === "dev" ? "/" : "api.where.you.are.hosting.this.app.com";
    dispatch({
      type: types.GET_FORMFILLPAGEITEMS_INPROGRESS,
      formFillPageItems,
    });

    axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          formFillPageItems.push(_.get(res, "data", []));
          dispatch({
            type: types.GET_FORMFILLPAGEITEMS_SUCCESS,
            formFillPageItems,
          });
        } else {
          dispatch({
            type: types.GET_FORMFILLPAGEITEMS_FAILURE,
            formFillPageItems,
          });
        }
      })
      .catch((error) => {
        dispatch({ type: types.GET_FORMFILLPAGEITEMS_FAILURE, error });
      });
  };
};
