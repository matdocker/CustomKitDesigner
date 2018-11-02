import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers";
import _ from "lodash";
import ReactDom from "react-dom";
import Menu from "./containers/main_menu";
import App from "./components/app";

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
    <App activeMenu="mainMenu" />
  </Provider>,
  document.querySelector(".container")
);

export default Index;
