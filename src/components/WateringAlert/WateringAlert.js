import React, { Component } from "react";
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
        <p>Happy plant</p>
      ) 
    } else if (diffDays > overDue){
      return (
        <p>Why havent you watered me? It's been {diffDays} days!</p>
      ) 
    } else if (diffDays === daysBetween){
      return (
        <p>Time to water me</p>
      )
    } else {
      return (
        <p>You are {diffDays} days late watering me</p>
      ) 
    }
  }

  render() {
    console.log("PROPS", this.props);
    return <div>{this.wateringMessage()}</div>;
  }
}
