import { combineReducers } from "redux";
import firstName from "./firstNameReducer.js";
// import formFillPageItems from "./formFillPageItemsReducer.js";

const rootReducer = combineReducers({
  // profilePageItems,
  // formFillPageItems,
  firstName,
});

export default rootReducer;
