export function logoSelected(url) {
  console.log(`LogoURLSelected Called: ${url}`);
  // designSelected is an AntionCreator it needs to return an
  // action, an object with a type property
  return {
    type: "LOGO_URL_SELECTED",
    payload: url
  };
}
