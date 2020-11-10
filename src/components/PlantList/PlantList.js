import React, { Component } from "react";
import "./PlantList.css";
import PlantBlock from "../PlantBlock/PlantBlock";


export default class PlantList extends Component {

  render() {

    console.log(this.props)

    const getPlants = this.props.plantInfo.map((plant, index) => (
      <PlantBlock
        key={index}
        id={plant.id}
        scientificName={plant.scientificname}
        nickName={plant.nickname}
        datePurchased={plant.datepurchased}
        purchasePlace={plant.purchaseplace}
        // picture={plant.picture}
      />
    ))
    return <div>{getPlants}</div>;
  }
}
