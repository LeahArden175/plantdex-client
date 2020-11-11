import React, { Component } from 'react'
import './PlantListPage.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import PlantList from '../../components/PlantList/PlantList'
import Context from '../../Context'

export default class PlantListPage extends Component {

  static contextType = Context
    render() {
      const {plantInfo} = this.context
        return (
            <div>
                {/* <SearchBar plantInfo={plantInfo}/> */}
                <PlantList plantInfo={plantInfo}/>
            </div>
        )
    }
}