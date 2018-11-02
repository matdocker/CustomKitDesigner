export function SelectMenu(menu) {
  // SelectMenu is an AntionCreator it needs to return an
  // anction, an object with a type property
  return {
    type: "MENU_SELECTED",
    payload: menu
  };
}
