import React, { Component } from 'react'
import './PlantListPage.css'
import PlantList from '../../components/PlantList/PlantList'
import Context from '../../Context'

export default class PlantListPage extends Component {

  static contextType = Context

  componentDidMount () {
    this.context.fetchPlant()
  }
  
    render() {
      const {plantInfo} = this.context
      console.log(plantInfo)
        return (
            <div className="plant-list">
                <PlantList plantInfo={plantInfo}/>
            </div>
        )
    }
}