import React, { Component } from "react";
import "./LandingPage.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import Context from "../../Context";

export default class LandingPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/plant-list";
    history.push(destination);
  };

  render() {
    return (
      <div className="landing-page-div">
          <h3 className="landing-page-info">
            Plant-Dex helps you keep tabs on all your houseplants and their
            needs!
          </h3>
          <h4 className="landing-page-h4">
            Log your plants and keep track of their watering schedule!
          </h4>
          <div className="login-info">
            <p className="landing-page-p">Get Started!</p>
            <p className="landing-page-p">
              You are more than welcome to create your own account! However, if
              you do not want to, you can use the following account:
            </p>
            <p className="landing-page-p">Username: newuser</p>
            <p className="landing-page-p">Password: newUser2!</p>
          </div>
          <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </div>
    );
  }
}
