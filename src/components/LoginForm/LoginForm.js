import React, { Component } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import TokenService from '../../services/token-service'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    const { username, password } = ev.target
    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(username.value, password.value)
    )

    username.value = ''
    password.value = ''
    this.props.onLoginSuccess()
  }

  render() {
    return (
      <div>
        <div className="loginForm-div">
          <form 
            className="loginForm"
            onSubmit={this.handleSubmitBasicAuth}
          >
            <label 
              className="input-labels" 
              htmlFor="username"
            >
              Username
            </label>
            <input 
              required
              className="input" 
              name="username"
              type="text" 
              placeholder="username" 
            />
            <label className="input-labels" htmlFor="password">
              Password
            </label>
            <input 
              required
              name='password'
              className="input" 
              type="password" 
              placeholder="password" 
            />
            <button className="submit-button" type="submit">
              Sign-in!
            </button>
            <div className="sign-up-button-div">
              <p>Don't have an account? Sign-up</p>
              <Link className="submit-button" to="/sign-up">
                Here
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
