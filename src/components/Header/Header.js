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
    if (TokenService.hasAuthToken()) {
      return (
        <div>
          <div className="Header__logged-in">
            <Link to="/plant-list" className="link">
              Your Plants!
            </Link>
            <Link onClick={this.handleLogoutClick} to="/" className="link">
              Logout
            </Link>
          </div>
          <h1 className="header">
            <span role="img" aria-label="seedling">
              🌱
            </span>{" "}
            Plant-Dex{" "}
            <span role="img" aria-label="seedling">
              🌱
            </span>
          </h1>
        </div>
      );
    } else {
      return (
        <div className="Header__not-logged-in">
          <h1 className="header">
            <span role="img" aria-label="seedling">
              🌱
            </span>{" "}
            Welcome to Plant-Dex{" "}
            <span role="img" aria-label="seedling">
              🌱
            </span>
          </h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="header-div">
        {this.renderHeaderLinks()}
      </div>
    );
  }
}
