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
    this.context.handleSort(plantInfo)
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
          <Link to="/add-plant">Add a new plant!</Link>
          <form className="search-form" onSubmit={this.handleSearch}>
            <p>Sort By</p>
            <button>All</button>
            <button onClick={this.toggleSort}>Alphabetically</button>
          </form>
        </div>
        {getPlants}
      </div>
    );
  }
}
