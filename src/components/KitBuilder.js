import React, { Component } from "react";

class KitBuilder extends Component {
  constructor(props) {
    super(props); // Component has a method called super() [parent method]
    this.state = {
      // term: '',
      position: this.props.postion
      // pos: this.props.pos,
      // logo1: this.props.logo1,
    };
  }

  componentDidMount() {
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
    const logo = this.refs.logo;
    if (this.props.logo1 && this.props.position) {
      logo.onload = () => {
        if (this.props.position == "LChest") {
          ctx.drawImage(logo, 280, 175, 70, 70);
        }
        if (this.props.position == "RChest") {
          ctx.drawImage(logo, 155, 175, 70, 70);
        }
      };
    }
  }

  render() {
    console.log(`The logo position is: ${this.props.position}`);

    if (!this.props.logo1) {
      return (
        <div className="row justify-content-center">
          <canvas ref="canvas" className="canvas" height="600" width="500">
            {/* Secondary */}
            <img
              ref="secondary"
              className="image"
              src={require(`./img/${this.props.design}/${this.props.sport}${
                this.props.view
              }${this.props.design}${this.props.secondary}s.png`)}
              alt="mockup goes here"
            />
            {/* Primary */}
            <img
              ref="primary"
              className="image"
              src={require(`./img/${this.props.design}/${this.props.sport}${
                this.props.view
              }${this.props.design}${this.props.primary}p.png`)}
              alt="mockup goes here"
            />
            {/* Collar */}
            <img
              ref="collar"
              className="image"
              src={require(`./img/${this.props.design}/${this.props.sport}${
                this.props.view
              }${this.props.design}${this.props.secondary}Collar.png`)}
              alt="mockup goes here"
            />
          </canvas>
        </div>
      );
    }
    if (this.props.logo1) {
      return (
        <div className="row justify-content-center">
          <canvas ref="canvas" className="canvas" height="600" width="500">
            {/* Secondary */}
            <img
              ref="secondary"
              className="image"
              src={require(`./img/${this.props.design}/${this.props.sport}${
                this.props.view
              }${this.props.design}${this.props.secondary}s.png`)}
              alt="mockup goes here"
            />
            {/* Primary */}
            <img
              ref="primary"
              className="image"
              src={require(`./img/${this.props.design}/${this.props.sport}${
                this.props.view
              }${this.props.design}${this.props.primary}p.png`)}
              alt="mockup goes here"
            />
            {/* Collar */}
            <img
              ref="collar"
              className="image"
              src={require(`./img/${this.props.design}/${this.props.sport}${
                this.props.view
              }${this.props.design}${this.props.secondary}Collar.png`)}
              alt="mockup goes here"
            />
            {/* Logo */}
            <img
              ref="logo"
              className="image"
              src={require(`./img/${this.props.logo1}`)}
              alt="mockup goes here"
            />
          </canvas>
        </div>
      );
    }
  }
}

export default KitBuilder;
