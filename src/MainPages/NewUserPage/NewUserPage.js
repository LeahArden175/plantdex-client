import React, { Component } from 'react'
import './NewUserPage.css'
import NewUserForm from '../../components/NewUserForm/NewUserForm'

export default class NewUserPage extends Component {
    render() {
        return (
            <div>
                <NewUserForm />
            </div>
        )
    }
}