import React, { Component } from "react";
import moment from 'moment'
import PropTypes from "prop-types";
import "./WateringAlert.css";

export default class WateringAlert extends Component {
  wateringMessage() {
    const lastWatered = moment.utc(this.props.plants.date_last_watered);
    const daysBetween = this.props.plants.days_between_watering;
    const currentDate = moment();
    const diffMilliseconds = currentDate - lastWatered;
    const diffDays = Math.floor(diffMilliseconds / (24 * 60 * 60 * 1000)) - 1;
    const overDue = daysBetween + 30;

    if (diffDays < daysBetween) {
      return (
        <p>
          I'm so happy!{" "}
          <span role="img" aria-label="sunglasses face">
            😎
          </span>
        </p>
      );
    } else if (diffDays > overDue) {
      return (
        <p>
          It's been {diffDays} days!{" "}
          <span role="img" aria-label="crying face">
            😢
          </span>
        </p>
      );
    } else if (diffDays === daysBetween) {
      return (
        <p>
          Time to water me{" "}
          <span role="img" aria-label="water drop">
            💧
          </span>
        </p>
      );
    } else {
      return (
        <p>
          You are {diffDays} days late!{" "}
          <span role="img" aria-label="frowning face">
            😟
          </span>
        </p>
      );
    }
  }

  render() {
    return <div>{this.wateringMessage()}</div>;
  }
}

WateringAlert.propTypes = {
  alerts: PropTypes.arrayOf(
    PropTypes.shape({
      date_last_watered: PropTypes.instanceOf(Date),
      days_between_watering: PropTypes.instanceOf(Date),
    })
  ),
};
