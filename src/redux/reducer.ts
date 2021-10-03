import { combineReducers } from "redux";
import auth from "./auth/reducer";
import global from "./global/reducer";

const reducers = combineReducers({
  auth,
  global,
});

export default reducers;