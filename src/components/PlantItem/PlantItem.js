import React, { Component } from "react";
import "./PlantItem.css";
import Context from "../../Context";

export default class PlantItem extends Component {
  state = {
    plant: [],
  };

  static contextType = Context;

  render() {
    const plantInfo = this.context.plantInfo.plantInfo;
    const id = this.props.plant;
    console.log("plantInfo is typeof:", typeof plantInfo);
    console.log("id:", id, "plantInfo:", plantInfo);
    const findPlant = plantInfo && plantInfo.find((plant) => plant.id === id);
    console.log("findPlant:", findPlant);

    return (
      <div>
        <img className="image" alt="Plant" src={findPlant.picture} />
        <p>{findPlant.nickName}</p>
        <p>{findPlant.datePurchased}</p>
        <p>{findPlant.purchasePlace}</p>
        <p>{findPlant.scientificName}</p>
      </div>
    );
  }
}
