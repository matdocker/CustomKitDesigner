import React, { Component } from "react";
import _ from "lodash";
import Menu from "../containers/main_menu";
import KitBuilder from "../containers/kit_builder";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    if (this.props.activeMenu === "mainMenu") {
      return (
        <div>
          <KitBuilder />
          <Menu />
        </div>
      );
    }
  }
}

export default App;
