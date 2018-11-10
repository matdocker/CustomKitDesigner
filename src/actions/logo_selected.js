<<<<<<< HEAD
export function logoSelected(url) {
  console.log(`LogoURLSelected Called: ${url}`);
  // designSelected is an AntionCreator it needs to return an
  // action, an object with a type property
  return {
    type: "LOGO_URL_SELECTED",
    payload: url
  };
}
=======
export function desingSelected(design) {
  console.log(`desingSelected Called: ${design}`);
  // designSelected is an AntionCreator it needs to return an
  // action, an object with a type property
  return {
    type: "DESIGN_SELECTED",
    payload: design
  };
}
>>>>>>> f6179564ebf740428ec352f839758aeff8d243ea
