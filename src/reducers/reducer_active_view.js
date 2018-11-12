// Sate argument is not application state, only the state
// this reducer is resposible for
export default function(
  state = null,
  //{ type: "", view: "Front", primary: "White", secondary: "White" },
  action
) {
  switch (action.type) {
    case "ACTIVE_VIEW":
      return action.payload;
  }
  return state;
}
