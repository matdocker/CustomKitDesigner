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
import ActiveLogoURL from "./reducer_active_logo_url";
import ActiveView from "./reducer_active_view";
import PoloFront from "./Sports/Cricket/Polo/reducer_front";

const rootReducer = combineReducers({
  // App States
  mainMenus: MainMenu,
  Menu: Menu,
  Sport: Sport,
  BuildMenu: BuildMenu,
  DesignMenu: DesignMenu,
  LogoMenu: LogoMenu,

  // Active States
  ActiveLogoURL: ActiveLogoURL,
  ActiveKit: ActiveKit,
  ActiveDesignMenu: ActiveDesignMenu,
  ActiveBuildMenu: ActiveBuildMenu,
  ActiveMenu: ActiveMenu,
  ActiveView: ActiveView,

  // Clothing Reducers
  PoloFront: PoloFront
});

export default rootReducer;
