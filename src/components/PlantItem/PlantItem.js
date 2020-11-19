import React, { Component } from "react";
import moment from "moment";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import history from '../../history'
import "./PlantItem.css";
import Context from "../../Context";
import config from "../../config";
import TokenService from "../../services/token-service";

export default class PlantItem extends Component {
  static contextType = Context;

  handleDeletePlant = (event) => {
    event.preventDefault();
    const plant_id = this.props.plant;

    fetch(`${config.API_ENDPOINT}/api/plants/${plant_id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((event = Promise.reject(event)));
      })
      .then(() => {
        this.context.deletePlant(plant_id);
        history.push("/plant-list");
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    const { plantInfo = [] } = this.context;
    const id = this.props.plant;
    const findPlant = plantInfo && plantInfo.find((plant) => plant.id == id);

    if (!findPlant) {
      return "loading";
    }

    const formattedDatePurchased = moment(findPlant.datepurchased).format("MMM Do YYYY");
    const formattedDateWatered = moment(findPlant.date_last_watered).format("MMM Do YYYY")

    return (
      <div className="plant-item-div">
        <div className="plant-item">
          <h2 className="nickname">{findPlant.nickname}</h2>
          <p className="categories">Scientific Name:</p>
          <p className="prop-categories">{findPlant.scientificname}</p>
          <p className="categories">Adopted:</p>
          <p className="prop-categories">{formattedDatePurchased}</p>
          <p className="categories">Aquired from:</p>
          <p className="prop-categories">{findPlant.purchaseplace}</p>
          <p className="categories">Days between watering:</p>
          <p className="prop-categories">{findPlant.days_between_watering}</p>
          <p className="categories">Last watering date:</p>
          <p className="prop-categories">{formattedDateWatered}</p>
        </div>
        <div className="button-div">
          <Link className="plant-item-buttons" to={`/update/${this.props.plant}`}>
            Edit
          </Link>
          <button
            className="plant-item-buttons"
            type="button"
            onClick={this.handleDeletePlant}
          >
            DELETE
          </button>
        </div>
      </div>
    );
  }
}

PlantItem.propTypes = {
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
