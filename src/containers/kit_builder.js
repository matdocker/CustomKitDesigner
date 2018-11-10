<<<<<<< HEAD
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
    // if (this.props.logo1 && this.props.position) {
    // logo.onload = () => {
    logo.onload = () => {
      ctx.globalCompositeOperation = "multiply";
      ctx.drawImage(logo, 280, 175, 70, 70);
    };
    logo.src = this.props.ActiveLogoURL;
    //   if (this.props.position == "RChest") {
    //     ctx.drawImage(logo, 155, 175, 70, 70);
    //   }
    // };
    //}
  }

  render() {
    console.log(
      `This type is: ${this.props.ActiveView.type} & View: ${
        this.props.ActiveView.view
      }`
    );
    if (!this.props.ActiveLogoURL) {
      return (
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
              }/${this.props.ActiveDesignMenu}/${this.state.view}${
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
      );
    }
    if (this.props.ActiveLogoURL) {
      return (
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
=======
import React, { Component } from "react";
import { connect } from "react-redux";
import WOW from "wow";

class KitBuilder extends Component {
  constructor(props) {
    super(props); // Component has a method called super() [parent method]
    this.state = {
      design: "0",
      view: "Front",
      primary: "White",
      secondary: "Grey"
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
  // componentDidUpdate() {
  //   const canvas = this.refs.canvas;
  //   const ctx = canvas.getContext("2d");
  //   const logo = this.refs.logo;
  //   // if (this.props.logo1 && this.props.position) {
  //   logo.onload = () => {
  //     if (this.props.position == "LChest") {
  //       ctx.drawImage(logo, 280, 175, 70, 70);
  //     }
  //     if (this.props.position == "RChest") {
  //       ctx.drawImage(logo, 155, 175, 70, 70);
  //     }
  //   };
  //   // }
  // }

  render() {
    //console.log(`This state is: ${this.state({ design })}`);
    return (
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
            src={require(`../img/${this.props.menu}/${this.props.KitSelected}/${
              this.props.ActiveDesignMenu
            }/${this.state.view}${this.state.secondary}S.png`)}
            alt="mockup goes here"
          />
          {/* Primary */}
          <img
            ref="primary"
            className="image"
            src={require(`../img/${this.props.menu}/${this.props.KitSelected}/${
              this.props.ActiveDesignMenu
            }/${this.state.view}${this.state.primary}P.png`)}
            alt="mockup goes here"
          />
          {/* Collar */}
          <img
            ref="collar"
            className="image"
            src={require(`../img/${this.props.menu}/${this.props.KitSelected}/${
              this.props.ActiveDesignMenu
            }/${this.state.view}${this.state.secondary}C.png`)}
            alt="mockup goes here"
          />
        </canvas>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.ActiveMenu,
    Sport: state.Sport,
    KitSelected: state.ActiveKit,
    ActiveDesignMenu: state.ActiveDesignMenu
  };
}

export default connect(mapStateToProps)(KitBuilder);
>>>>>>> f6179564ebf740428ec352f839758aeff8d243ea
