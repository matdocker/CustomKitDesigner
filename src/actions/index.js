export function SelectMenu(menu) {
  console.log(`SelectMenu Called: ${menu}`);
  // SelectMenu is an AntionCreator it needs to return an
  // action, an object with a type property
  return {
    type: "MENU_SELECTED",
    payload: menu
  };
}
