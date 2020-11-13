import React, { Component } from 'react'
import './PlantListPage.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import PlantList from '../../components/PlantList/PlantList'
import Context from '../../Context'

export default class PlantListPage extends Component {

  static contextType = Context

  componentDidMount () {
    this.context.setPlant()
  }
  
    render() {
      const {plantInfo} = this.context
      console.log(plantInfo)
        return (
            <div>
                {/* <SearchBar plantInfo={plantInfo}/> */}
                <PlantList plantInfo={plantInfo}/>
            </div>
        )
    }
}