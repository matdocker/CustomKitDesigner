import React, { Component } from "react";
import { connect } from "react-redux";
import { SelectKit } from "../actions/kit_select";
import KitBuilder from "../containers/kit_builder";
import BuilderMenu from "../containers/builder_menu";
import { bindActionCreators } from "redux";
import WOW from "wow";

class SportsMenu extends Component {
  componentDidMount() {
    const wow = new WOW();
    wow.init();
  }
  renderKit() {
    return this.props.Sport.map(kit => {
      return (
        <div key={kit.type} className="col-md-3 hover">
          <img
            onClick={() => this.props.SelectKit(kit.type)}
            className="w-100 m-1 wow zoomIn"
            data-wow-delay="0.25s"
            src={`src/img/${this.props.menu}/${kit.type}.png`}
          />
          <p className="text-center wow zoomIn hover">{kit.type}</p>
        </div>
      );
    });
  }

  render() {
    if (this.props.KitSelected) {
      return (
        <div>
          <KitBuilder />
          <BuilderMenu />
          {console.log(`This is SelectKit: ${this.props.KitSelected}`)}
        </div>
      );
    } else
      return (
        <div className="d-flex align-items-center h-100">
          <div id="menu" className="justify-content-center">
            <h1 className="wow slideInDown text-center">
              Select Your Clothing Type
            </h1>
            <div className="row">{this.renderKit()}</div>
          </div>
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.ActiveMenu,
    Sport: state.Sport,
    KitSelected: state.ActiveKit
  };
} // Anything returned from this function will end up as props on mainMenu Container
function mapDispatchToProps(dispatch) {
  // Whenever SelectKit is called the result should be passed to all of our reducers, dispatch pass SelectKit to all reducers
  return bindActionCreators({ SelectKit: SelectKit }, dispatch);
}
// Promote mainMenu list container froma a component to
// a container - it needs to know about this new dispatch
// method, SelectKit. Make it availible as a prop
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SportsMenu);
