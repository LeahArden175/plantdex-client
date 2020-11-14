import React, { Component } from "react";
import "./PlantList.css";
import PlantBlock from "../PlantBlock/PlantBlock";
import { Link } from "react-router-dom";
import Context from "../../Context";

export default class PlantList extends Component {
  state = {
    plantInfo: [],
  };

  static contextType = Context;

  toggleSort = (event) => {
    event.preventDefault();
    const plantInfo = this.context.plantInfo;
    plantInfo.sort((a, b) => a.nickname.localeCompare(b.nickname));
    this.context.setPlant({ plantInfo });
    this.context.handleSort(plantInfo);
  };

  render() {
    const getPlants = this.context.plantInfo.map((plant, index) => (
      <PlantBlock
        key={index}
        id={plant.id}
        scientificName={plant.scientificname}
        nickName={plant.nickname}
        datePurchased={plant.datepurchased}
        purchasePlace={plant.purchaseplace}
        // picture={plant.picture}
      />
    ));

    return (
      <div>
        <div className="search-form-div">
          <h3>You have {this.context.plantInfo.length} amazing plants!</h3>
          <p>Sort By: </p>
          <form className="search-form" onSubmit={this.handleSearch}>
            <button>All</button>
            <button onClick={this.toggleSort} >Alphabetically</button>
            <Link to="/add-plant" className="add-new-button" className="link">Add a new plant!</Link>
          </form>
        </div>
        <div className="items">
        {getPlants}
        </div>
      </div>
    );
  }
}
