// Sate argument is not application state, only the state
// this reducer is resposible for
export default function(state = "", action) {
  switch (action.type) {
    case "B_MENU_SELECTED":
      return action.payload;
  }
  return state;
}
