import React, { Component } from "react";
import "./NewUserForm.css";

export default class NewUserForm extends Component {
  render() {
    return (
      <div>
        <div className="loginForm-div">
          <form className="loginForm">
            <label className="input-labels" htmlFor="username">
              Username
            </label>
            <input className="input" type="text" placeholder="username" />
            <label className="input-labels" htmlFor="email">
              Email
            </label>
            <input className="input" type="text" placeholder="Jdoe@email.com" />
            <label className="input-labels" htmlFor="password">
              Password
            </label>
            <input className="input" type="text" placeholder="password" />
            <button className="submit-button" type="submit">
              Sign-up!
            </button>
          </form>
        </div>
      </div>
    );
  }
  s;
}
