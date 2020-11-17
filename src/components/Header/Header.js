import React, { Component } from "react";
import "./Header.css";
import TokenService from "../../services/token-service";
import { Link } from "react-router-dom";

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
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
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <></>
      </div>
    );
  }

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
    )
  }
  render() {
    return (
      <div className="header-div">
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
          {TokenService.hasAuthToken()
          ? this.renderRegHeader()
          : this.renderWelcomeHeader()}
      </div>
    );
  }
}
