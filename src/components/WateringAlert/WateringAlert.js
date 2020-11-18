import React, { Component } from "react";
import PropTypes from 'prop-types'
import "./WateringAlert.css";

export default class WateringAlert extends Component {
  wateringMessage() {
    const lastWatered = new Date(this.props.plants.date_last_watered);
    const daysBetween = this.props.plants.days_between_watering;
    const currentDate = new Date();
    const diffMilliseconds = currentDate - lastWatered;
    const diffDays = Math.floor(diffMilliseconds / (24 * 60 * 60 * 1000));
    const overDue = daysBetween + 30;

    if (diffDays < daysBetween) {
      return (
        <p>I'm so happy! 😎</p>
      ) 
    } else if (diffDays > overDue){
      return (
        <p>I must be dead! 😢  It's been {diffDays} days!</p>
      ) 
    } else if (diffDays === daysBetween){
      return (
        <p>Time to water me 💧</p>
      )
    } else {
      return (
        <p>You are {diffDays} days late watering me</p>
      ) 
    }
  }

  render() {
    return <div>{this.wateringMessage()}</div>;
  }
}

WateringAlert.propTypes ={
  alerts: PropTypes.arrayOf(
    PropTypes.shape({
      date_last_watered: PropTypes.instanceOf(Date),
      days_between_watering: PropTypes.instanceOf(Date),
    })
  )
}