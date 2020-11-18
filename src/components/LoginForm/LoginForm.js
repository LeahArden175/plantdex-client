import React, { Component } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import Context from "../../Context";
import ErrorBoundary from "../../ErrorBoundary";
import PropTypes from "prop-types";

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state={
    error: false
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
        this.context.handleLoggedIn(true)
      })
      .catch(res => {
        this.setState({ error: res.error})
      })
  }
  render() {
    const { error } = this.state
    return (
        <div className="loginForm-div">
          <ErrorBoundary>
          <form 
            className="loginForm"
            onSubmit={this.handleSubmitJwtAuth}
          >
            <div className="error-div">
            {error && <p className='red'>{error}</p>}
            </div>
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
            <button className="login-page-buttons" type="submit">
              Sign-in!
            </button>
            <div className="sign-up-button-div">
              <p className="sign-up-p">Don't have an account? Sign-up</p>
              <Link className="login-page-buttons" to="/sign-up">
                Here
              </Link>
            </div>
          </form>
          </ErrorBoundary>
        </div>
    );
  }
}

LoginForm.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string.required,
      password: PropTypes.string.required,
    })
  )
}
