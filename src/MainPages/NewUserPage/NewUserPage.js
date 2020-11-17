import React, { Component } from 'react'
import './NewUserPage.css'
import NewUserForm from '../../components/NewUserForm/NewUserForm'

export default class NewUserPage extends Component {


    handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/')
      }

    
    render() {
        return (
            <div>
                <NewUserForm onRegistrationSuccess={this.handleRegistrationSuccess}/>
            </div>
        )
    }
}