import { combineReducers } from "redux";
import MainMenu from "./reducer_main_menu";
import ActiveMenu from "./reducer_active_main_menu";
import Menu from "./reducer_app";
import Sport from "./reducer_sports_menu";

const rootReducer = combineReducers({
  mainMenus: MainMenu,
  ActiveMenu: ActiveMenu,
  Menu: Menu,
  Sport: Sport
});

export default rootReducer;
