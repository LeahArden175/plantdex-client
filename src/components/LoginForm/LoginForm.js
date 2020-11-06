import React, { Component } from 'react';
import './LoginForm.css';

export default class LoginForm extends Component {
    render () {
        return (
            <div>
        <div className="loginForm-div">
          <form className="loginForm">
            <label class="input-labels" for="username">
              Username
            </label>
            <input class="input" type="text" placeholder="username" />
            <label class="input-labels" for="password">
              Password
            </label>
            <input class="input" type="text" placeholder="password" />
            <button class="submit-button" type="submit">
              Sign-in!
            </button>
            <div className='sign-up-button-div'>
            <p>Don't have an account? Sign-up</p>
            <button class="submit-button" type="submit">
              Here
            </button>
            </div>
          </form>
        </div>
      </div>
        )
    }
}