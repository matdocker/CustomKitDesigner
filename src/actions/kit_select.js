export function SelectKit(kit) {
  console.log(`SelectMenu Called: ${kit}`);
  // SelectKit is an AntionCreator it needs to return an
  // action, an object with a type property
  return {
    type: "KIT_SELECTED",
    payload: kit
  };
}
