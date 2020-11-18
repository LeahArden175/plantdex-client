import React, { Component } from "react";
import "./PlantList.css";
import PropTypes from 'prop-types'
import PlantBlock from "../PlantBlock/PlantBlock";
import { Link } from "react-router-dom";
import Context from "../../Context";

export default class PlantList extends Component {
  state = {
    plantInfo: [],
  };

  static contextType = Context;

  toggleSortAlphabetical = (event) => {
    event.preventDefault();
    const plantInfo = this.context.plantInfo;
    plantInfo.sort((a, b) => a.nickname.localeCompare(b.nickname));
    this.context.setPlant({ plantInfo });
    this.context.handleSort(plantInfo);
  };

  toggleSortPurchaseDate = (event) => {
    event.preventDefault()
    const plantInfo = this.context.plantInfo;
    plantInfo.sort((a, b) => new Date(a.datepurchased) - new Date(b.datepurchased))
    this.context.setPlant({ plantInfo });
    this.context.handleSort(plantInfo);
  }

  render() {
    const getPlants = this.context.plantInfo.map((plant, index) => (
      <PlantBlock
        key={index}
        id={plant.id}
        scientificName={plant.scientificname}
        nickName={plant.nickname}
        datePurchased={plant.datepurchased}
        purchasePlace={plant.purchaseplace}
        days_between_watering={plant.days_between_watering}
        date_last_watered={plant.date_last_watered}
        user_id={plant.user_id}
      />
    ));

    return (
      <div className="plant-list-div">
        <div className="search-form-div">
          <h3>You have {this.context.plantInfo.length} AMAZING plants!</h3>
          <div className="search-form" onSubmit={this.handleSearch}>
            <p>Sort By: </p>
            <button onClick={this.toggleSortPurchaseDate}>All</button>
            <button onClick={this.toggleSortAlphabetical}>Alphabetically</button>
          </div>
        </div>
        <div className="items">
          <li className="add-new-button">
            <Link to="/add-plant" className="link-style">
              <h2>Add a new plant!</h2>
            </Link>
          </li>
          {getPlants}
        </div>
      </div>
    );
  }
}

PlantList.propTypes={
  match: PropTypes.object
}
