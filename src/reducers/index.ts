import { combineReducers } from "redux";
import { themeReducer } from "./themeReducer";

const rootReducer = combineReducers({
  darkTheme: themeReducer,
});

export default rootReducer;
