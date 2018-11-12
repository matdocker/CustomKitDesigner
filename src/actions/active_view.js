export function SelectView(activeView) {
  console.log(`SelectView Called: ${activeView.type} && ${activeView.view}`);
  // SelectView is an AntionCreator it needs to return an
  // action, an object with a type property
  return {
    type: "ACTIVE_VIEW",
    payload: activeView
  };
}
