import { combineReducers } from "redux";
import MainMenu from "./reducer_main_menu";
import ActiveMenu from "./reducer_active_main_menu";
import Menu from "./reducer_app";
import Sport from "./reducer_sports_menu";
import ActiveKit from "./reducer_active_kit";
import BuildMenu from "./reducer_builder_menu";
import ActiveBuildMenu from "./reducer_active_build_menu";
import DesignMenu from "./reducer_design_menu";
import ActiveDesignMenu from "./reducer_active_design_menu";
import LogoMenu from "./reducer_logo_menu";

const rootReducer = combineReducers({
  // Main menu Items
  mainMenus: MainMenu,
  // Active Main menu (Selected main menu Item)
  ActiveMenu: ActiveMenu,
  Menu: Menu,
  Sport: Sport,
  ActiveKit: ActiveKit,
  BuildMenu: BuildMenu,
  ActiveBuildMenu: ActiveBuildMenu,
  DesignMenu: DesignMenu,
  ActiveDesignMenu: ActiveDesignMenu,
  LogoMenu: LogoMenu
});

export default rootReducer;
