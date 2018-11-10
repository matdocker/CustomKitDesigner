<<<<<<< HEAD
import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers";
import _ from "lodash";
import ReactDom from "react-dom";
import Menu from "./containers/main_menu";
//import App from "./components/app";
import App from "./containers/app";

const store = createStore(allReducers);

class Index extends Component {
  constructor(props) {
    super(props);
  }
}

// Take this components generated HTML and put it
// on the page (In the DOM)
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(".container")
);

export default Index;
=======
import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers";
import _ from "lodash";
import ReactDom from "react-dom";
import Menu from "./containers/main_menu";
//import App from "./components/app";
import App from "./containers/app";

const store = createStore(allReducers);

class Index extends Component {
  constructor(props) {
    super(props);
  }
}

// Take this components generated HTML and put it
// on the page (In the DOM)
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(".container")
);

export default Index;
>>>>>>> f6179564ebf740428ec352f839758aeff8d243ea
