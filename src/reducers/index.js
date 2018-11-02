import { combineReducers } from "redux";
import MainMenu from "./reducer_main_menu";
import ActiveMenu from "./reducer_active_main_menu";

const rootReducer = combineReducers({
  mainMenus: MainMenu
});

export default rootReducer;
