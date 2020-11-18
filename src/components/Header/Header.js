import React, { Component } from "react";
import "./Header.css";
import TokenService from "../../services/token-service";
import { Link } from "react-router-dom";
import Context from "../../Context";

export default class Header extends Component {
  static contextType = Context;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.handleLoggedIn(false);
  };

  renderHeaderLinks() {
    if (this.context.loggedIn === true) {
      return (
        <div className="Header__logged-in">
          <Link to="/plant-list" className="link">
            Your Plants!
          </Link>
          <Link onClick={this.handleLogoutClick} to="/" className="link">
            Logout
          </Link>
        </div>
      );
    } else {
      return (
        <div className="Header__not-logged-in">
          <></>
        </div>
      );
    }
  }

  // renderLogoutLink() {
  //   return (
  //     <div className="Header__logged-in">
  //       <Link to="/plant-list" className="link">
  //         Your Plants!
  //       </Link>
  //       <Link onClick={this.handleLogoutClick} to="/" className="link">
  //         Logout
  //       </Link>
  //     </div>
  //   );
  // }

  // renderLoginLink() {
  //   return (
  //     <div className="Header__not-logged-in">
  //       <></>
  //     </div>
  //   );
  // }

  renderWelcomeHeader() {
    return (
      <h1 className="header">
        <span role="img" aria-label="seedling">
          🌱
        </span>{" "}
        Welcome to Plant-Dex{" "}
        <span role="img" aria-label="seedling">
          🌱
        </span>
      </h1>
    );
  }

  renderRegHeader() {
    return (
      <h1 className="header">
        <span role="img" aria-label="seedling">
          🌱
        </span>{" "}
        Plant-Dex{" "}
        <span role="img" aria-label="seedling">
          🌱
        </span>
      </h1>
    );
  }
  render() {
    return (
      <div className="header-div">
        {this.renderHeaderLinks()}
        {TokenService.hasAuthToken()
          ? this.renderRegHeader()
          : this.renderWelcomeHeader()}
      </div>
    );
  }
}
