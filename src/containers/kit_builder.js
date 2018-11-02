import React, { Component } from "react";
import { connect } from "react-redux";

class KitBuilder extends Component {
  render() {
    return (
      <div>
        <h1>Details of Kit Builder</h1>
        <div>{console.log(this.props.menu.mainMenu)}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.activeMenu
  };
}

export default connect(mapStateToProps)(KitBuilder);
