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
