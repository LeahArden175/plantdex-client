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
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
        <Link to='/plant-list'>
        Your Plants!
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link to="/register">Register</Link>
        <span className='Hyph'>{' - '}</span>
        <Link to="/login">Log in</Link>
      </div>
    );
  }
  render() {
    return (
      <div className="header-div">
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
        <h1 className="header">Welcome to Plant-Dex</h1>
      </div>
    );
  }
}
