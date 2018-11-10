import React, { Component } from "react";
import { connect } from "react-redux";
import { SelectMenu } from "../actions/index";
import { bindActionCreators } from "redux";
import WOW from "wow";

class MainMenu extends Component {
  componentDidMount() {
    const wow = new WOW();
    wow.init();
  }
  renderMenu() {
    return this.props.mainMenus.map(menu => {
      return (
        <div key={menu.mainMenu} className="col-xs-1 m-1">
          <button
            onClick={() => this.props.SelectMenu(menu.mainMenu)}
            className="button1 wow zoomIn"
            data-wow-delay="0.25s"
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
      <div className="d-flex align-items-center h-100">
        <div id="menu" className="justify-content-center">
          <h1 className="text-center wow slideInDown">Select Your Sport</h1>
          <div className="row justify-content-center">{this.renderMenu()}</div>
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
