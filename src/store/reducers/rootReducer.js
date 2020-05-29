import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import recordReducer from "./recordReducer";

export default combineReducers({
  theme: themeReducer,
  record: recordReducer,
});
