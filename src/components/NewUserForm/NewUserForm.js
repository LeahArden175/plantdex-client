import React, { Component } from "react";
import "./NewUserForm.css";
import { Link } from "react-router-dom";
import config from '../../config'
import ErrorBoundary from "../../ErrorBoundary";
import PropTypes from 'prop-types'

export default class NewUserForm extends Component {

  handleSubmitNewUser = (event) => {
    event.preventDefault()

      const { full_name, nickname, username, password } = event.target

      const newUser = {
        full_name: full_name.value,
        nickname: nickname.value,
        username: username.value,
        password: password.value
      }

      return fetch(`${config.API_ENDPOINT}/api/users`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
        .then(newUser => {
          full_name.value = ''
          nickname.value = ''
          username.value = ''
          password.value = ''
          this.props.onRegistrationSuccess()
        })
        .catch(res => {
          this.setState({ error: res.error})
        })
    }


  render() {
    return (
      <div>
        <div className="new-user-form-div">
          <ErrorBoundary>
          <form 
            className="new-user-form" 
            onSubmit={this.handleSubmitNewUser}
          >
            <label 
              className="input-labels" 
              htmlFor="username"
            >
              Username
            </label>
            <input 
              className="input"
              name="username"
              required 
              type="text" 
              placeholder="username" 
              id="reg-username"
              />
            <label className="input-labels" htmlFor="full_name">
              Full Name:
            </label>
            <input 
              className="input"
              name='full_name'
              required
              type="text" 
              placeholder="full name" 
            />
            <label className="input-labels" htmlFor="password">
              Password
            </label>
            <input 
              className="input" 
              name="password"
              required
              type="password" 
              placeholder="password" 
            />
            <label className="input-labels" htmlFor="nickname">
              Nickname:
            </label>
            <input 
              className="input" 
              name='nickname'
              required
              type="nickname" 
              placeholder="nickname" 
            />
            <div className='new-user-button-div'>
            <button className="submit-button" type="submit">
              Sign-up!
            </button>
            <Link className='submit-button' to="/">
              Cancel
            </Link>
            </div>
          </form>
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

NewUserForm.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
      full_name: PropTypes.string.required,
      nickname: PropTypes.string.required,
      username: PropTypes.string.required,
      password: PropTypes.string.required,
    })
  )
}