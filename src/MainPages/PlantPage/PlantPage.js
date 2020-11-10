import React, { Component } from 'react';
import './PlantPage.css';
import PlantItem from '../../components/PlantItem/PlantItem'
import Context from '../../Context';

export default class PlantPage extends Component {

    state = {
        plant: []
    }

    static contextType = Context
  
    render () {
      const plant = this.props.match.params.id
      const plantInfo = this.context
        return (
            <div>
                <PlantItem plant={plant} plantInfo={plantInfo}/>
            </div>
        )
    }
}