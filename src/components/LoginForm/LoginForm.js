import React, { Component } from "react";
import "./LoginForm.css";

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <div className="loginForm-div">
          <form className="loginForm">
            <label class="input-labels" for="firstName">
              First Name
            </label>
            <input class="input" type="text" placeholder="Jane" />
            <label class="input-labels" for="lastName">
              Last Name
            </label>
            <input class="input" type="text" placeholder="Doe" />
            <label class="input-labels" for="email">
              Email
            </label>
            <input class="input" type="text" placeholder="Jdoe@email.com" />
            <label class="input-labels" for="password">
              Password
            </label>
            <input class="input" type="text" placeholder="password" />
            <button class="submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
  s;
}
