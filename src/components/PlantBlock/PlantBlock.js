import React, { Component } from "react";
import{ Link }from 'react-router-dom'
import PropTypes from 'prop-types'
import Context from "../../Context";
import config from '../../config'
import "./PlantBlock.css";
import TokenService from "../../services/token-service";
import WateringAlert from "../WateringAlert/WateringAlert";

export default class PlantBlock extends Component {

  static contextType = Context;
  
  plantWatered = (event) => {
    event.preventDefault()
    const plant_id = this.props.id
    const wateredDate = new Date().toISOString()
    const updatedPlant = {
      scientificname: this.props.scientificname,
      nickname: this.props.nickName,
      purchaseplace: this.props.purchaseplace,
      datepurchased: this.props.datepurchased,
      days_between_watering: this.props.days_between_watering,
      date_last_watered: wateredDate,
    }
    fetch(`${config.API_ENDPOINT}/api/plants/${plant_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(updatedPlant),
    })
    .then((response) => {
      if(!response.ok) {
        throw new Error(response.status);
      }
      return response.json()
    })
    .then((data) => {
      this.context.editPlant(data)
    })

  }


  render() {
    const plants= this.props
    return (
      <li className='list-items' key="this.props.id">
        {/* <img className="image" alt="Plant" src={this.props.picture} /> */}
        <Link 
            className='plant-link'
            to={`plant/${this.props.id}`
          }
        >
        <h2 className="nickname-block">{this.props.nickName}</h2>
        </Link>
        <div className="watering-div">
        <WateringAlert plants={plants}/>
        <button onClick={this.plantWatered} className="watered-button">Watered!</button>
        </div>
      </li>
    );
  }
}

PlantBlock.propTypes = {
  plants: PropTypes.arrayOf(
    PropTypes.shape({
      scientificname: PropTypes.string.required,
      nickname: PropTypes.string.required,
      purchaseplace: PropTypes.string.required,
      datepurchased: PropTypes.instanceOf(Date).required,
      date_last_watered: PropTypes.instanceOf(Date).required,
      days_between_watering: PropTypes.instanceOf(Date).required,
    })
  )
}
