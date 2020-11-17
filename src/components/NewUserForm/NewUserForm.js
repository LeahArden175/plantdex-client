import React, { Component } from "react";
import "./NewUserForm.css";
import { Link } from "react-router-dom";

export default class NewUserForm extends Component {
  render() {
    return (
      <div>
        <div className="new-user-form-div">
          <form className="new-user-form">
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
            <input className="input" type="password" placeholder="password" />
            <div className='new-user-button-div'>
            <button className="submit-button" type="submit">
              Sign-up!
            </button>
            <Link className='submit-button' to="/">
              Cancel
            </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
  s;
}
