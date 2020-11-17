import React, { Component } from "react";
import "./WateringAlert.css";

export default class WateringAlert extends Component {

  wateringMessage() {
    const plant_id = this.props.plants.id
    const lastWatered = new Date(this.props.plants.date_last_watered)
    const daysBetween = this.props.plants.days_between_watering
    const currentDate = new Date()
    const diffMilliseconds = currentDate - lastWatered
    const diffDays = Math.floor(diffMilliseconds/(24*60*60*1000))
    return diffDays
    }


  render() {
    console.log('PROPS', this.props)
    return (
      <p>
        {this.wateringMessage()}
      </p>
    )
  }
}
