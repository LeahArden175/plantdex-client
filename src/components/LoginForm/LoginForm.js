import React, { Component } from 'react';
import './LoginForm.css';

export default class LoginForm extends Component {
    render () {
        return (
            <div>
        <div className="loginForm-div">
          <form className="loginForm">
            <label className="input-labels" tmlFor="username">
              Username
            </label>
            <input className="input" type="text" placeholder="username" />
            <label className="input-labels" htmlFor="password">
              Password
            </label>
            <input className="input" type="text" placeholder="password" />
            <button className="submit-button" type="submit">
              Sign-in!
            </button>
            <div className='sign-up-button-div'>
            <p>Don't have an account? Sign-up</p>
            <button className="submit-button" type="submit">
              Here
            </button>
            </div>
          </form>
        </div>
      </div>
        )
    }
}