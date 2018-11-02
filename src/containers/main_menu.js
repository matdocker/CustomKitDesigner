import React, { Component } from "react";
import { connect } from "react-redux";
import { SelectMenu } from "../actions/index";
import { bindActionCreators } from "redux";

class MainMenu extends Component {
  renderMenu() {
    return this.props.mainMenus.map(menu => {
      return (
        <div key={menu.mainMenu} className="d-inline">
          <button
            onClick={() => this.props.SelectMenu(menu)}
            className="button1 m-1"
            type="button"
          >
            {menu.mainMenu}
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="vert-align-center">
        <div className="container">
          <h1 className="text-center">Select Your Sport</h1>
          <div id="menu" className="row justify-content-center">
            {this.renderMenu()}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  // Whatever gets returned from her will show up as props from books list
  return {
    mainMenus: state.mainMenus
  };
}
// Anything returned from this function will end up as props on mainMenu Container
function mapDispatchToProps(dispatch) {
  // Whenever selectMenu is called the result should be passed to all of our reducers, dispatch pass selectMenu to all reducers
  return bindActionCreators({ SelectMenu: SelectMenu }, dispatch);
}
// Promote mainMenu list container froma a component to
// a container - it needs to know about this new dispatch
// method, selectMenu. Make it availible as a prop
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu);
