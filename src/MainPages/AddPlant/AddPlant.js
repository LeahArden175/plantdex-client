import React, { Component } from 'react'
import './AddPlant.css'
import LandingPage from '../LandingPage/LandingPage'
import AddPlantForm from '../../components/AddPlantForm/AddPlantForm'
import TokenService from '../../services/token-service'
import Context from '../../Context'

export default class AddPlant extends Component {

    static contextType = Context

    renderLandingPage() {
        return (
            <LandingPage />
        )
    }

    renderAddPlantPage() {
        return (
            <AddPlantForm history={this.props.history}/>
        )
    }

    render() {
        return (
            <div>
                {TokenService.hasAuthToken()
                ? this.renderAddPlantPage()
                : this.renderLandingPage()
                }
            </div>
        )
    }
}