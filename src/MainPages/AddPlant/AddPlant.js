import React, { Component } from 'react'
import './AddPlant.css'
import AddPlantForm from '../../components/AddPlantForm/AddPlantForm'
import Context from '../../Context'

export default class AddPlant extends Component {

    static contextType = Context

    render() {
        return (
            <div>
                <AddPlantForm history={this.props.history}/>
            </div>
        )
    }
}