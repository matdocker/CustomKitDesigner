<<<<<<< HEAD
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Menu from "../containers/main_menu";
import KitBuilder from "../containers/kit_builder";
import SportsMenu from "../containers/sports_menu";

class App extends Component {
  render() {
    if (!this.props.menu || this.props.menu === "Home") {
      return <Menu />;
    }
    if (this.props.menu) {
      console.log(`App.js this.props.menu: ${this.props.menu}`);
      return <SportsMenu />;
    } else {
      return <Menu />;
    }
  }
}

function mapStateToProps(state) {
  return {
    menu: state.Menu,
    kitSelected: state.ActiveMenu
  };
}

export default connect(mapStateToProps)(App);
=======
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Menu from "../containers/main_menu";
import KitBuilder from "../containers/kit_builder";
import SportsMenu from "../containers/sports_menu";

class App extends Component {
  render() {
    if (!this.props.menu || this.props.menu === "Home") {
      return <Menu />;
    }
    if (this.props.menu) {
      console.log(`App.js this.props.menu: ${this.props.menu}`);
      return <SportsMenu />;
    } else {
      return <Menu />;
    }
  }
}

function mapStateToProps(state) {
  return {
    menu: state.Menu,
    kitSelected: state.ActiveMenu
  };
}

export default connect(mapStateToProps)(App);
>>>>>>> f6179564ebf740428ec352f839758aeff8d243ea
