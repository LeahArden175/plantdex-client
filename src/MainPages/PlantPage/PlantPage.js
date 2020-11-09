import React, { Component } from 'react';
import './PlantPage.css';
import PlantItem from '../../components/PlantItem/PlantItem'

export default class PlantPage extends Component {
  
    render () {
      const plant = this.props.match.params.id
        return (
            <div>
                <PlantItem plant={plant}/>
            </div>
        )
    }
}