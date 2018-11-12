// Sate argument is not application state, only the state
// this reducer is resposible for
export default function(state = "1", action) {
  switch (action.type) {
    case "DESIGN_SELECTED":
      return action.payload;
  }
  return state;
}
