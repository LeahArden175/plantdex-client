import React, { Component } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import Context from "../../Context";

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  static contextType = Context

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null})
    const {username, password} = ev.target

    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
        this.context.fetchPlant()
      })
      .catch(res => {
        this.setState({ error: res.error})
      })
  }
  render() {
    return (
        <div className="loginForm-div">
          <form 
            className="loginForm"
            onSubmit={this.handleSubmitJwtAuth}
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
    );
  }
}
