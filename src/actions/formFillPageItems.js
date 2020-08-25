import _ from "lodash";
import axios from "axios";
import * as types from "../constants/actionTypes";
import appConfig from "../appConfig.json";

export const getFormFillPageItems = () => {
  return (dispatch) => {
    let formFillPageItems = [];
    const url = `http://${appConfig.env} === 'dev' ? 'localhost/pit-rnd2' || 'localhost/register-framework' : 'api.where.you.are.hosting.this.app.com'`;
    dispatch({ type: types.GET_FORMFILLPAGE_INPROGRESS, formFillPageItems });

    axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          formFillPageItems.push(_.get(res, "data", []));
          dispatch({ type: types.GET_FORMFILLPAGE_SUCCESS, formFillPageItems });
        } else {
          dispatch({ type: types.GET_FORMFILLPAGE_FAILURE, formFillPageItems });
        }
      })
      .catch((error) => {
        dispatch({ type: types.GET_FORMFILLPAGE_FAILURE, error });
      });
  };
};
