import React, { Component } from "react";
import { connect } from "react-redux";
import { SelectMenu } from "../actions/build_select";
import { desingSelected } from "../actions/design_selected";
import { logoSelected } from "../actions/logo_selected";
import { bindActionCreators } from "redux";
import firebase from "../firebase/index";
import WOW from "wow";
import { SelectView } from "../actions/active_view";
let logoCount = 1;

class MainMenu extends Component {
  constructor(props) {
    super(props); // Component has a method called super() [parent method]

    this.state = {
      BuildMenu: "Home",
      logo1: "",
      logoCount: 1,
      logoPos: null
    };
  }
  componentDidMount() {
    const wow = new WOW();
    wow.init();
  }
  initToggle() {
    this.props.LogoMenu.map(menu => {
      document.getElementById(menu.LogoMenu).classList.remove("active");
      document.getElementById(menu.LogoMenu).classList.remove("show");
    });
  }
  fileSelectHandler = event => {
    if (event.target.files[0]) {
      const image = event.target.files[0];
      this.setState(() => ({ image }));
    }

    // console.log(`file handler called: ${event.target.files[0].name}`);
    // this.file = event.target.files[0].name;
    // console.log(`this is state fileUpload: ${this.file}`);
    // this.setState({ file: event.target.files[0].name }, function() {
    //   this.setState({ logo1: this.state.file });
    // });
  };
  uploadHandler = () => {
    const storageRef = firebase.storage().ref();
    const { image } = this.state;

    console.log(`this is ref image: ${image.name}`);

    const uploadTask = storageRef.child(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      snapshot => {
        //Progress function .....
        console.log(snapshot);
      },
      error => {
        // Error Function
        console.log(`There is an error: ${error}`);
      },
      () => {
        // Complete Function
        storageRef
          .child(`images/${image.name}`)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            this.props.logoSelected(url);
            //this.setState({ logoUrl: url });
          });
      }
    );
  };
  mapLogoTabs() {
    return this.props.LogoMenu.map(menu => {
      return (
        <div key={menu.LogoMenu} className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade text-center"
            id={menu.LogoMenu}
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <h4>
              Logo
              {menu.LogoMenu}
            </h4>
            <div className="card card-body p-1 mt-2 mb-2 text-center">
              <div className="d-inline-flex">
                <div className="form-group m-0">
                  {/* Logo file input */}
                  <input
                    id="logo1-input"
                    type="file"
                    onChange={this.fileSelectHandler}
                    className="form-control-file btn btn-sm-File"
                    id="exampleFormControlFile1"
                    accept="image/*"
                  />
                </div>
                {/* logo Positon buttons */}
                <div
                  className="d-inline-flex btn-group btn-group-sm"
                  role="group"
                  aria-label="ButtonGroup"
                >
                  <button
                    type="button"
                    className="btn btn-outline-secondary p-1 logo-text"
                    onClick={this.uploadHandler}
                  >
                    Upload to L-Chest
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary p-1 logo-text"
                    onClick={() => {
                      this.uploadHandler;
                      this.setState({
                        logoCount: logoCount++,
                        logoPos: 2
                      });
                    }}
                  >
                    Upload to Torso
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary p-1 logo-text"
                    onClick={() => {
                      this.uploadHandler;
                      this.setState({
                        logoCount: logoCount++,
                        logoPos: 3
                      });
                    }}
                  >
                    Upload to R-Chest
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  renderMenu() {
    // console.log(
    //   `${ActiveBuildMenu} - ${this.state.BuildMenu} - ${this.props.BuildMenu}`
    // );
    if (
      this.state.BuildMenu === "Home" &&
      !this.props.ActiveBuildMenu /*&& !this.props.Back*/
    ) {
      return this.props.BuildMenu.map(menu => {
        return (
          <div key={menu.BuildMenu} className="col-xs-1 m-1">
            <button
              onClick={() => this.props.SelectMenu(menu.BuildMenu)}
              className="button1 wow zoomIn"
              data-wow-delay="0.25s"
              type="button"
            >
              {menu.BuildMenu}
            </button>
          </div>
        );
      });
    }
    if (this.props.ActiveBuildMenu === "Designs") {
      return this.props.DesignMenu.map(menu => {
        return (
          <div key={menu.DesignMenu} className="col-xs-1 m-1">
            <button
              onClick={() => this.props.desingSelected(menu.DesignMenu)}
              className="button1 wow zoomIn"
              data-wow-delay="0.25s"
              type="button"
            >
              {`Design ${menu.DesignMenu}`}
            </button>
          </div>
        );
      });
    }
    if (this.props.ActiveBuildMenu === "Logo's") {
      return this.props.LogoMenu.map(menu => {
        return (
          <div key={menu.LogoMenu} className="col-xs-1 m-1">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <button
                  onClick={() => {
                    this.initToggle();
                    document
                      .getElementById(menu.LogoMenu)
                      .classList.toggle("active");
                    document
                      .getElementById(menu.LogoMenu)
                      .classList.toggle("show");
                  }}
                  className="nav-link button1 wow zoomIn"
                  id="pills-home-tab"
                  data-toggle="pill"
                  data-target={"#" + menu.LogoMenu}
                  role="tab"
                  aria-controls={menu.LogoMenu}
                  aria-selected="true"
                  data-wow-delay="0.25s"
                  type="button"
                >
                  {`Logo ${menu.LogoMenu}`}
                </button>
              </li>
            </ul>
          </div>
        );
      });
    }
  }

  toggleViewRight(type, view, primary, seconday) {
    if (view === "Front") {
      () => this.setState({ view: "QuarterR" });
      return;
    }
    if (view === "QuarterR") {
      () => this.setState({ view: "SideR" });
      return;
    }
    if (view === "SideR") {
      () => this.setState({ view: "Back" });
      return;
    }
    if (view === "Back") {
      () => this.setState({ view: "SideL" });
      return;
    }
    if (view === "SideL") {
      () => this.setState({ view: "QuarterL" });
      return;
    }
    if (view === "QuaterL") {
      () => this.setState({ view: "Front" });
      return;
    }
  }
  toggleViewLeft(type, view, primary, seconday) {
    console.log(`type:${type} view: ${view}`);
    switch (view) {
      case "Front":
        SelectView({
          type: type,
          view: "QuarterR",
          primary: primary,
          secondary: seconday
        });
        break;
      case "QuarterR":
        SelectView({
          type: type,
          view: "SideR",
          primary: primary,
          secondary: seconday
        });
        break;
      case "SideR":
        SelectView({
          type: type,
          view: "Back",
          primary: primary,
          secondary: seconday
        });
        break;
      case "Back":
        SelectView({
          type: type,
          view: "SideR",
          primary: primary,
          secondary: seconday
        });
        break;
      case "SideL":
        SelectView({
          type: type,
          view: "QuarterL",
          primary: primary,
          secondary: seconday
        });
        break;
      case "QuaterL":
        SelectView({
          type: type,
          view: "Front",
          primary: primary,
          secondary: seconday
        });
        break;
    }
  }

  render() {
    console.log(this.state.logo1);
    return (
      <div className="text-center h-100">
        <div className="rotate__buttons text-center">
          <a
            href="#"
            className="button wow fadeIn d-inline"
            data-wow-delay="0.7s"
            onClick={() =>
              this.toggleViewLeft(
                this.props.KitSelected.type,
                this.props.ActiveView.view,
                this.props.ActiveView.primary,
                this.props.ActiveView.secondary
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
                this.props.KitSelected.type,
                this.props.ActiveView.view,
                this.props.ActiveView.primary,
                this.props.ActiveView.secondary
              )
            }
          >
            <i className="fas fa-angle-double-right fa-2x ml-5" />
          </a>
        </div>
        <h1 className="text-center wow slideInDown">
          Customise Your Kit {this.props.ActiveBuildMenu}
        </h1>
        <div id="menu">
          <div className="row justify-content-center">{this.renderMenu()}</div>
          {this.mapLogoTabs()}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  // Whatever gets returned from her will show up as props from books list
  return {
    menu: state.ActiveMenu,
    Sport: state.Sport,
    KitSelected: state.ActiveKit,
    BuildMenu: state.BuildMenu,
    ActiveBuildMenu: state.ActiveBuildMenu,
    DesignMenu: state.DesignMenu,
    LogoMenu: state.LogoMenu,
    ActiveView: state.ActiveView
  };
}
// Anything returned from this function will end up as props on mainMenu Container
function mapDispatchToProps(dispatch) {
  // Whenever selectMenu is called the result should be passed to all of our reducers, dispatch pass selectMenu to all reducers
  return bindActionCreators(
    {
      SelectMenu: SelectMenu,
      desingSelected: desingSelected,
      logoSelected: logoSelected,
      SelectView: SelectView
    },
    dispatch
  );
}
// Promote mainMenu list container froma a component to
// a container - it needs to know about this new dispatch
// method, selectMenu. Make it availible as a prop
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu);
