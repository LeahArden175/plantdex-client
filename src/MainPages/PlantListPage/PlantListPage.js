import React, { Component } from 'react'
import './PlantListPage.css'
import PlantList from '../../components/PlantList/PlantList'
import TokenService from '../../services/token-service'
import LandingPage from '../LandingPage/LandingPage'
import Context from '../../Context'

export default class PlantListPage extends Component {

  static contextType = Context

  componentDidMount () {
    this.context.fetchPlant()
  }

  renderPlantListPage() {
    const {plantInfo} = this.context
    return (
    <PlantList plantInfo={plantInfo}/>
    )
  }

  renderLandingPage() {
    return (
        <LandingPage />
    )

  }
  
  
    render() {
      const {plantInfo} = this.context
        return (
            <div className="plant-list">
              {TokenService.hasAuthToken()
                ? this.renderPlantListPage()
                : this.renderLandingPage()
                }
                {/* <PlantList plantInfo={plantInfo}/> */}
            </div>
        )
    }
}