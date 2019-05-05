import { combineReducers } from "redux";
import api from "./api";
import match from "./match";

export default combineReducers({
  api,
  match
});
