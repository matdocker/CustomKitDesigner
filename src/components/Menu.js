import React, { Component } from "react";
// import Axios from "axios";
import KitBuilder from "./KitBuilder";
import Index from "../index";

class Menu extends Component {
  constructor(props) {
    super(props); // Component has a method called super() [parent method]
    let file;
    this.state = {
      menu: this.props.menu,
      design: this.props.design,
      // Reset design to original state
      resetSport: this.props.sport,
      resetView: this.props.view,
      resetDesign: this.props.design,
      resetPrimary: this.props.primary,
      resetSecondary: this.props.secondary,
      // Colours
      primary: this.props.primary,
      secondary: this.props.secondary,
      // Logos
      file: null,
      logo1: "",
      position: "",
      pos: 0
    };
  }

  fileSelectHandler = event => {
    console.log(`file handler called: ${event.target.files[0].name}`);
    this.file = event.target.files[0].name;
    //console.log(`this is state fileUpload: ${this.file}`)
    this.setState({ file: event.target.files[0].name }, function() {
      this.setState({ logo1: this.state.file });
    });
  };

  fileUploadHandler = () => {
    return Axios.get(
      "http://localhost:8080/KitDesigner/src/components/img",
      fileSelectHandler.event.target.files[0].name
    );
  };

  render() {
    const menuState = this.state.menu;
    const sport = this.props.sport;
    const view = this.props.view;
    const design = this.state.design;

    if (menuState === "mainMenu") {
      console.log(menuState);
      return (
        <div className="menu">
          <KitBuilder
            sport={sport}
            view={view}
            design={design}
            primary={this.state.primary}
            secondary={this.state.secondary}
            position={this.state.position}
            pos={this.state.pos}
            logo1={this.state.logo1}
          />
          <div className="row justify-content-center">
            <div className="d-inline">
              <button
                onClick={() => this.setState({ menu: "patterns" })}
                className="button1 m-1"
                type="button"
              >
                Patterns
              </button>
            </div>
            <div className="d-inline">
              <button
                onClick={() => this.setState({ menu: "logos" })}
                className="button1 m-1"
                type="button"
              >
                Logos
              </button>
            </div>
            <div className="d-inline">
              <button
                onClick={() => this.setState({ menu: "colours" })}
                className="button1 m-1"
                type="button"
              >
                Colours
              </button>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="d-inline">
              <button className="button1 m-1" type="button">
                Options
              </button>
            </div>
            <div className="d-inline">
              <button className="button1 m-1" type="button">
                Sponsers
              </button>
            </div>
            <div className="d-inline">
              <button className="button1 m-1" type="button">
                {" "}
                Add to Cart
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={() => this.setState({ menu: "reset" })}
              className="backBtn"
              type="button"
            >
              Reset
            </button>
            <button
              onClick={() => this.setState({ menu: "home" })}
              className="homeBtn"
              type="button"
            >
              Home
            </button>
          </div>
        </div>
      );
    }
    if (menuState === "patterns") {
      console.log(menuState);
      return (
        <div className="menu">
          <KitBuilder
            sport={sport}
            view={view}
            design={design}
            primary={this.state.primary}
            secondary={this.state.secondary}
          />
          <div className="row justify-content-center">
            <div className="d-inline">
              <button
                onClick={() => this.setState({ menu: "mainMenu" })}
                className="button1 m-1"
                type="button"
              >
                Back
              </button>
            </div>
            <div className="d-inline">
              <button
                onClick={() => this.setState({ menu: "patterns", design: "0" })}
                className="button1 m-1"
                type="button"
              >
                Patterns
              </button>
            </div>
            <div className="d-inline">
              <button
                onClick={() => this.setState({ menu: "patterns", design: "1" })}
                className="button1 m-1"
                type="button"
              >
                Patterns
              </button>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="d-inline">
              <button
                onClick={() => this.setState({ menu: "design", design: "2" })}
                className="button1 m-1"
                type="button"
              >
                Patterns
              </button>
            </div>
            <div className="d-inline">
              <button className="button1 m-1" type="button">
                Patterns
              </button>
            </div>
            <div className="d-inline">
              <button className="button1 m-1" type="button">
                {" "}
                Patterns
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={() => this.setState({ menu: "reset" })}
              className="backBtn"
              type="button"
            >
              Reset
            </button>
            <button
              onClick={() => this.setState({ menu: "home" })}
              className="homeBtn"
              type="button"
            >
              Home
            </button>
          </div>
        </div>
      );
    }
    if (menuState === "colours") {
      console.log(menuState);
      return (
        <div className="menu">
          <KitBuilder
            sport={sport}
            view={view}
            design={design}
            primary={this.state.primary}
            secondary={this.state.secondary}
          />
          <div className="row justify-content-center">
            <div className="d-inline">
              <button
                onClick={() => this.setState({ menu: "mainMenu" })}
                className="button1 m-1"
                type="button"
              >
                Back
              </button>
              <button
                className="button1 m-1"
                type="button"
                data-toggle="collapse"
                data-target="#primaryColours"
                aria-expanded="false"
                aria-controls="primaryColours"
              >
                Primary
              </button>
              <button
                className="button1 m-1"
                type="button"
                data-toggle="collapse"
                data-target="#secondaryColours"
                aria-expanded="false"
                aria-controls="secondaryColours"
              >
                Secondary
              </button>
            </div>
          </div>
          <div
            className="row justify-content-center collapse"
            id="primaryColours"
          >
            <button
              className="colour white"
              onClick={() => this.setState({ primary: "White" })}
            />
            <button
              className="colour gold"
              onClick={() => this.setState({ primary: "Gold" })}
            />
            <button
              className="colour green"
              onClick={() => this.setState({ primary: "Green" })}
            />
            <button
              className="colour red"
              onClick={() => this.setState({ primary: "Red" })}
            />
          </div>
          <div
            className="row justify-content-center collapse"
            id="secondaryColours"
          >
            <button
              className="colour grey"
              onClick={() => this.setState({ secondary: "Grey" })}
            />
            <button
              className="colour gold"
              onClick={() => this.setState({ secondary: "Gold" })}
            />
            <button
              className="colour green"
              onClick={() => this.setState({ secondary: "Green" })}
            />
            <button
              className="colour red"
              onClick={() => this.setState({ secondary: "Red" })}
            />
          </div>
          <div>
            <button
              onClick={() => this.setState({ menu: "reset" })}
              className="backBtn"
              type="button"
            >
              Reset
            </button>
            <button
              onClick={() => this.setState({ menu: "home" })}
              className="homeBtn"
              type="button"
            >
              Home
            </button>
          </div>
        </div>
      );
    }
    if (menuState === "logos") {
      // console.log(`Logo1 === ${this.state.file}`);
      return (
        <div className="text-center">
          <KitBuilder
            sport={sport}
            view={view}
            design={design}
            primary={this.state.primary}
            secondary={this.state.secondary}
            position={this.state.position}
            pos={this.state.pos}
            logo1={this.state.file}
          />
          <div className="menu pl-3 pr-3 text-center logoMenu">
            <div className="card card-body p-1 mt-2 mb-2">
              <div className="d-inline-flex">
                <div className="form-group m-0">
                  {/* Logo file input */}
                  <input
                    id="logo1-input"
                    type="file"
                    onChange={this.fileSelectHandler}
                    className="form-control-file btn btn-sm-File"
                    id="exampleFormControlFile1"
                  />
                </div>
                {/* logo Positon buttons */}
                <div
                  className="d-inline-flex btn-group btn-group-sm"
                  role="group"
                  aria-label="ButtonGroup"
                >
                  <button
                    onClick={() => {
                      this.forceUpdate;
                      this.setState({
                        position: "LChest",
                        pos: 290,
                        logo1: this.state.file
                      });
                    }}
                    type="button"
                    className="btn btn-outline-secondary p-1 logo-text"
                  >
                    L-Chest
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary p-1 logo-text"
                  >
                    Torso
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary p-1 logo-text"
                  >
                    R-Chest
                  </button>
                </div>
              </div>
            </div>
            <div className="card card-body p-1 mt-2 mb-2">
              <form className="d-inline-flex">
                <div className="form-group m-0">
                  <input
                    type="file"
                    className="form-control-file btn btn-sm-File"
                    id="exampleFormControlFile1"
                  />
                </div>
                <div
                  className="d-inline-flex btn-group btn-group-sm"
                  role="group"
                  aria-label="ButtonGroup"
                >
                  <button
                    type="button"
                    className="btn btn-outline-secondary p-1 logo-text"
                  >
                    L-Chest
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary p-1 logo-text"
                  >
                    Torso
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary p-1 logo-text"
                  >
                    R-Chest
                  </button>
                </div>
              </form>
            </div>
            <div className="card card-body p-1 mt-2 mb-2">
              <form className="d-inline-flex">
                <div className="form-group m-0">
                  <input
                    type="file"
                    className="form-control-file btn btn-sm-File"
                    id="exampleFormControlFile1"
                  />
                </div>
                <div
                  className="d-inline-flex btn-group btn-group-sm"
                  role="group"
                  aria-label="ButtonGroup"
                >
                  <button
                    type="button"
                    className="btn btn-outline-secondary p-1 logo-text"
                  >
                    L-Chest
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary p-1 logo-text"
                  >
                    Torso
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary p-1 logo-text"
                  >
                    R-Chest
                  </button>
                </div>
              </form>
            </div>
            <div className="row justify-content-center mb-1">
              <button
                onClick={() => this.setState({ menu: "mainMenu" })}
                className="button2 m-1 w-75"
                type="button"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      );
    }
    if (menuState === "home") {
      return <Index />;
    }
    if (menuState === "reset") {
      return (
        <Menu
          sport={this.state.resetSport}
          view={this.state.resetView}
          design={this.state.resetDesign}
          primary={this.state.resetPrimary}
          secondary={this.state.resetSecondary}
          menu="mainMenu"
        />
      );
    }
    return <p>error</p>;
  }
}

export default Menu;
