import React, { Component } from "react";
import "./PlantList.css";
import PlantBlock from "../PlantBlock/PlantBlock";

export default class PlantList extends Component {
  render() {
    console.log(this.props);

    const getPlants = this.props.plantInfo.map((plant, index) => (
      <PlantBlock
        key={index}
        id={plant.id}
        scientificName={plant.scientificName}
        nickName={plant.nickName}
        datePurchased={plant.datePurchased}
        purchasePlace={plant.purchasePlace}
        picture={plant.picture}
      />
    ))
    return <div>{getPlants}</div>;
  }
}
