import React, { Component } from "react";
import moment from 'moment'
import {Link} from 'react-router-dom';
import "./PlantItem.css";
import Context from "../../Context";
import config from '../../config'
import TokenService from '../../services/token-service'

export default class PlantItem extends Component {

  static contextType = Context;


  handleDeletePlant = event => {
    event.preventDefault()
    console.log('delete clicked')
    const plant_id = this.props.plant
    console.log('Plant_id:', plant_id)

    fetch(`${config.API_ENDPOINT}/api/plants/${plant_id}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
    })
    .then(res => {
      if(!res.ok)
        return res.json().then(event = Promise.reject(event))
    })
    .then(()=> {
      console.log(plant_id)
      this.context.deletePlant(plant_id)
      this.props.history.push('/plant-list')
    })
    .catch(error => {
      console.error({ error })
    })
  }



  render() {
    const { plantInfo=[] } = this.context;
    const id = this.props.plant
    const findPlant = plantInfo && plantInfo.find((plant) => plant.id == id);

    if(!findPlant){
        return 'loading'
    }

    console.log('props', this.props)

    const formattedDate = moment(findPlant.datepurchased).format("MMM Do YY")

    return (
      <div className='plant-item-div'>
        {/* <img className="image" alt="Plant" src={findPlant.picture} /> */}
        <h2>{findPlant.nickname}</h2>
        <p>{findPlant.scientificname}</p>
        <p>Adopted: {formattedDate}</p>
        <p>{findPlant.purchaseplace}</p>
        <Link to={`/update/${this.props.plant}`}>
        <button>Edit Plant</button>
        </Link>
        <button type="button" onClick={this.handleDeletePlant}>DELETE</button>
      </div>
    );
  }
}
