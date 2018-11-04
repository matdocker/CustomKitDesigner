import React, { Component } from "react";
import _ from "lodash";
import Menu from "../containers/main_menu";
import KitBuilder from "../containers/kit_builder";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <KitBuilder />
        <Menu />
      </div>
    );
  }
}

export default App;
