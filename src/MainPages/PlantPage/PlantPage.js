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
        console.log(this.props)
      const plant = this.props.match.params.id
      const plantInfo = this.context
      const history =  this.props.history
        return (
            <div>
                <PlantItem plant={plant} plantInfo={plantInfo} history={history}/>
            </div>
        )
    }
}