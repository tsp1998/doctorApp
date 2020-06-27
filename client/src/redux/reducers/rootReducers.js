import { combineReducers } from "redux";
import uiReducer from "./uiReducer";
import userReducer from "./userReducer";
import doctorReducer from "./doctorReducer";

export default combineReducers({
  user: userReducer,
  doctor: doctorReducer,
  ui: uiReducer,
});
