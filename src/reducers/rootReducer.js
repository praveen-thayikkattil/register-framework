import { combineReducers } from "redux";
import profilePageItems from "./profilePageItemsReducer.js";
import formFillPageItems from "./profilePageItemsReducer.js";

const rootReducer = combineReducers({
  profilePageItems,
  formFillPageItems,
});

export default rootReducer;
