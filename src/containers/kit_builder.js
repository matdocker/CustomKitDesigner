import React, { Component } from "react";
import { connect } from "react-redux";

class KitBuilder extends Component {
  render() {
    if (!this.props.menu) {
      return <div>Select a book to get started.</div>;
    }
    return (
      <div>
        <h1>Details of Kit Builder</h1>
        <div>{this.props.menu}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.ActiveMenu
  };
}

export default connect(mapStateToProps)(KitBuilder);
