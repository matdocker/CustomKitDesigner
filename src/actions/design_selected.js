export function desingSelected(design) {
  console.log(`desingSelected Called: ${design}`);
  // designSelected is an AntionCreator it needs to return an
  // action, an object with a type property
  return {
    type: "DESIGN_SELECTED",
    payload: design
  };
}
