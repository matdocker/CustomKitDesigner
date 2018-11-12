import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SelectView } from "../actions/active_view";
import WOW from "wow";

class KitBuilder extends Component {
  constructor(props) {
    super(props); // Component has a method called super() [parent method]
    this.state = {
      design: "0",
      view: this.props.ActiveView.view,
      primary: this.props.ActiveView.primary,
      secondary: this.props.ActiveView.secondary
      //position: this.props.postion
    };
  }
  componentDidMount() {
    const wow = new WOW();
    wow.init();

    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const secondary = this.refs.secondary;
    const primary = this.refs.primary;
    const collar = this.refs.collar;
    // Secondary
    secondary.onload = () => {
      ctx.drawImage(secondary, -25, 0, 550, 580);
    };
    // Primary
    primary.onload = () => {
      ctx.drawImage(primary, -25, 0, 550, 580);
    };
    // Collar
    collar.onload = () => {
      ctx.drawImage(collar, -25, 0, 550, 580);
    };
  }
  componentDidUpdate() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const logo = new Image();

    logo.onload = () => {
      ctx.globalCompositeOperation = "multiply";
      ctx.drawImage(logo, 280, 175, 70, 70);
    };
    logo.src = this.props.ActiveLogoURL;

    this.setState = {
      //design: "0",
      type: this.props.ActiveView.type,
      view: () => {
        return this.props.ActiveView.view;
      },
      primary: this.props.ActiveView.primary,
      secondary: this.props.ActiveView.secondary
      //position: this.props.postion
    };
  }
  toggleViewRight = () => {
    console.log(` view: ${this.state.view}`);
    switch (this.state.view) {
      case "Front":
        SelectView({
          type: this.state.type,
          view: "QuarterR",
          primary: this.state.primary,
          secondary: this.state.secondary
        });
        break;
      case "QuarterR":
        SelectView({
          type: this.state.type,
          view: "SideR",
          primary: this.state.primary,
          secondary: this.state.secondary
        });
        break;
      case "SideR":
        SelectView({
          type: this.state.type,
          view: "Back",
          primary: this.state.primary,
          secondary: this.state.secondary
        });
        break;
      case "Back":
        SelectView({
          type: this.state.type,
          view: "SideL",
          primary: this.state.primary,
          secondary: this.state.secondary
        });
        break;
      case "SideL":
        SelectView({
          type: this.state.type,
          view: "QuarterL",
          primary: this.state.primary,
          secondary: this.state.seconday
        });
        break;
      case "QuaterL":
        SelectView({
          type: this.state.type,
          view: "Front",
          primary: this.state.primary,
          secondary: this.state.secondary
        });
        break;
    }
  };

  toggleViewLeft = () => {
    console.log(`view: ${view}`);
    switch (view) {
      case "Front":
        SelectView({
          type: type,
          view: "QuarterL",
          primary: primary,
          secondary: secondary
        });
        break;
      case "QuarterL":
        SelectView({
          type: type,
          view: "SideL",
          primary: primary,
          secondary: secondary
        });
        break;
      case "SideL":
        SelectView({
          type: type,
          view: "Back",
          primary: primary,
          secondary: secondary
        });
        break;
      case "Back":
        SelectView({
          type: type,
          view: "SideR",
          primary: primary,
          secondary: secondary
        });
        break;
      case "SideR":
        SelectView({
          type: type,
          view: "QuarterR",
          primary: primary,
          secondary: seconday
        });
        break;
      case "QuaterR":
        SelectView({
          type: type,
          view: "Front",
          primary: primary,
          secondary: secondary
        });
        break;
    }
  };

  render() {
    // console.log(
    //   `This type is: ${this.props.kit.type} & View: ${this.props.kit.view}`
    // );
    if (!this.props.ActiveLogoURL) {
      return (
        <section>
          <div className="d-flex justify-content-center">
            <canvas
              ref="canvas"
              className="canvas wow fadeIn"
              height="600"
              width="500"
            >
              {/* Secondary */}
              <img
                ref="secondary"
                className="image"
                src={require(`../img/${this.props.menu}/${
                  this.props.KitSelected.type
                }/${this.props.ActiveDesignMenu}/${this.props.ActiveView.view}${
                  this.props.ActiveView.secondary
                }S.png`)}
                alt="mockup goes here"
              />
              {/* Primary */}
              <img
                ref="primary"
                className="image"
                src={require(`../img/${this.props.menu}/${
                  this.props.KitSelected.type
                }/${this.props.ActiveDesignMenu}/${this.props.ActiveView.view}${
                  this.props.ActiveView.primary
                }P.png`)}
                alt="mockup goes here"
              />
              {/* Collar */}
              <img
                ref="collar"
                className="image"
                src={require(`../img/${this.props.menu}/${
                  this.props.KitSelected.type
                }/${this.props.ActiveDesignMenu}/${this.props.ActiveView.view}${
                  this.props.ActiveView.secondary
                }C.png`)}
                alt="mockup goes here"
              />
            </canvas>
          </div>
          <div className="rotate__buttons text-center">
            <a
              href="#"
              className="button wow fadeIn d-inline"
              data-wow-delay="0.7s"
              onClick={this.toggleViewLeft}
            >
              <i className="fas fa-angle-double-left fa-2x mr-5" />
            </a>
            <h4 className="d-inline float wow fadeIn" data-wow-delay="0.7s">
              Rotate View
            </h4>
            <a
              href="#"
              className="button wow fadeIn d-inline"
              data-wow-delay="0.7s"
              onClick={this.toggleViewRight}
            >
              <i className="fas fa-angle-double-right fa-2x ml-5" />
            </a>
          </div>
        </section>
      );
    }
    if (this.props.ActiveLogoURL) {
      return (
        <section>
          <div className="d-flex justify-content-center">
            <canvas
              ref="canvas"
              className="canvas wow fadeIn"
              height="600"
              width="500"
            >
              {/* Secondary */}
              <img
                ref="secondary"
                className="image"
                src={require(`../img/${this.props.menu}/${
                  this.props.KitSelected.type
                }/${this.props.ActiveDesignMenu}/${this.props.ActiveView.view}${
                  this.props.ActiveView.secondary
                }S.png`)}
                alt="mockup goes here"
              />
              {/* Primary */}
              <img
                ref="primary"
                className="image"
                src={require(`../img/${this.props.menu}/${
                  this.props.KitSelected.type
                }/${this.props.ActiveDesignMenu}/${this.props.ActiveView.view}${
                  this.props.ActiveView.primary
                }P.png`)}
                alt="mockup goes here"
              />
              {/* Collar */}
              <img
                ref="collar"
                className="image"
                src={require(`../img/${this.props.menu}/${
                  this.props.KitSelected.type
                }/${this.props.ActiveDesignMenu}/${this.props.ActiveView.view}${
                  this.props.ActiveView.secondary
                }C.png`)}
                alt="mockup goes here"
              />
              {/* Logo */}
              <img
                ref="logo"
                className="image"
                //src={this.props.ActiveLogoURL}
                alt="mockup goes here"
              />
            </canvas>
          </div>
          <div className="rotate__buttons text-center">
            <a
              href="#"
              className="button wow fadeIn d-inline"
              data-wow-delay="0.7s"
              onClick={() =>
                this.toggleViewLeft(
                  () => {
                    return this.props.ActiveView.type;
                  },
                  () => {
                    this.props.ActiveView.view;
                  },
                  () => {
                    this.props.ActiveView.primary;
                  },
                  () => {
                    this.props.ActiveView.secondary;
                  }
                )
              }
            >
              <i className="fas fa-angle-double-left fa-2x mr-5" />
            </a>
            <h4 className="d-inline float wow fadeIn" data-wow-delay="0.7s">
              Rotate View
            </h4>
            <a
              href="#"
              className="button wow fadeIn d-inline"
              data-wow-delay="0.7s"
              onClick={() =>
                this.toggleViewRight(
                  () => {
                    return this.props.ActiveView.type;
                  },
                  () => {
                    this.props.ActiveView.view;
                  },
                  () => {
                    this.props.ActiveView.primary;
                  },
                  () => {
                    this.props.ActiveView.secondary;
                  }
                )
              }
            >
              <i className="fas fa-angle-double-right fa-2x ml-5" />
            </a>
          </div>
        </section>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    menu: state.ActiveMenu,
    Sport: state.Sport,
    KitSelected: state.ActiveKit,
    ActiveDesignMenu: state.ActiveDesignMenu,
    ActiveLogoURL: state.ActiveLogoURL,
    ActiveView: state.ActiveView
  };
}
// Anything returned from this function will end up as props on mainMenu Container
function mapDispatchToProps(dispatch) {
  // Whenever selectMenu is called the result should be passed to all of our reducers, dispatch pass selectMenu to all reducers
  return bindActionCreators(
    {
      SelectView: SelectView
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KitBuilder);
