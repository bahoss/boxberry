import { combineReducers } from "redux";
import auth from "./AuthReducer";
import main from "./MainPageReducers";
export default combineReducers({ auth, main });
