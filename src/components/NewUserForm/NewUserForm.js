import React, { Component } from "react";
import "./NewUserForm.css";

export default class NewUserForm extends Component {
  render() {
    return (
      <div>
        <div className="loginForm-div">
          <form className="loginForm">
            <label class="input-labels" for="username">
              Username
            </label>
            <input class="input" type="text" placeholder="username" />
            <label class="input-labels" for="email">
              Email
            </label>
            <input class="input" type="text" placeholder="Jdoe@email.com" />
            <label class="input-labels" for="password">
              Password
            </label>
            <input class="input" type="text" placeholder="password" />
            <button class="submit-button" type="submit">
              Sign-up!
            </button>
          </form>
        </div>
      </div>
    );
  }
  s;
}
