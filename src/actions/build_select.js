export function SelectMenu(buildMenu) {
  console.log(`KitSelect Called: ${buildMenu}`);
  // SelectMenu is an AntionCreator it needs to return an
  // action, an object with a type property
  return {
    type: "B_MENU_SELECTED",
    payload: buildMenu
  };
}
