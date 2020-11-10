import React, { Component } from "react";
import "./LandingPage.css";
import LoginForm from "../../components/LoginForm/LoginForm";

export default class LandingPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  };

  render() {
    return (
      <div className="landing-page-div">
        <div className="landing-page-info-div">
          <h3 className="landing-page-info">
            Plant-Dex helps you keep tabs on all your houseplants and their
            needs!
          </h3>
        </div>
        <div>
          <h4>Log your plants and keep track of their growth!</h4>
          <p>Get Started!</p>
          <LoginForm onLoginSuccess={this.handleLoginSuccess} />
        </div>
      </div>
    );
  }
}
